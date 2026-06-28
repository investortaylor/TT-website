from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import resend


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend configuration
RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
CONTACT_RECIPIENT = os.environ.get('CONTACT_RECIPIENT', 'info@trutown.market')
if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str


class ContactSubmissionCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=200)
    email: EmailStr
    phone: Optional[str] = Field(default=None, max_length=50)
    subject: str = Field(..., min_length=1, max_length=100)
    message: str = Field(..., min_length=1, max_length=5000)


class ContactSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: Optional[str] = None
    subject: str
    message: str
    email_id: Optional[str] = None
    email_status: str = "pending"
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)

    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()

    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)

    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])

    return status_checks


def _html_escape(text: str) -> str:
    return (
        text.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
        .replace("'", "&#39;")
    )


def _build_contact_email_html(submission: ContactSubmission) -> str:
    safe_name = _html_escape(submission.name)
    safe_email = _html_escape(submission.email)
    safe_phone = _html_escape(submission.phone) if submission.phone else "—"
    safe_subject = _html_escape(submission.subject)
    safe_message = _html_escape(submission.message).replace("\n", "<br>")
    ts = submission.timestamp.strftime("%b %d, %Y at %H:%M UTC")

    return f"""
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#fafaf9;padding:24px 0;font-family:Manrope,Arial,sans-serif;color:#1c1917;">
      <tr><td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e7e5e4;border-radius:12px;overflow:hidden;">
          <tr>
            <td style="background:#15803d;padding:20px 28px;color:#ffffff;font-size:20px;font-weight:600;">
              TruTown Marketplace &mdash; New Contact Form Submission
            </td>
          </tr>
          <tr>
            <td style="padding:24px 28px;">
              <p style="margin:0 0 16px 0;font-size:14px;color:#57534e;">Received {ts}</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="font-size:15px;line-height:1.6;">
                <tr><td style="padding:8px 0;color:#57534e;width:120px;">Name</td><td style="padding:8px 0;font-weight:600;">{safe_name}</td></tr>
                <tr><td style="padding:8px 0;color:#57534e;">Email</td><td style="padding:8px 0;font-weight:600;"><a href="mailto:{safe_email}" style="color:#15803d;text-decoration:none;">{safe_email}</a></td></tr>
                <tr><td style="padding:8px 0;color:#57534e;">Phone</td><td style="padding:8px 0;font-weight:600;">{safe_phone}</td></tr>
                <tr><td style="padding:8px 0;color:#57534e;">Subject</td><td style="padding:8px 0;font-weight:600;">{safe_subject}</td></tr>
              </table>
              <hr style="border:none;border-top:1px solid #e7e5e4;margin:20px 0;">
              <p style="margin:0 0 8px 0;color:#57534e;font-size:14px;text-transform:uppercase;letter-spacing:0.05em;">Message</p>
              <div style="font-size:15px;line-height:1.7;color:#1c1917;white-space:pre-wrap;">{safe_message}</div>
            </td>
          </tr>
          <tr>
            <td style="background:#f5f5f4;padding:16px 28px;font-size:12px;color:#78716c;text-align:center;">
              Reply directly to this email to respond to {safe_name}.
            </td>
          </tr>
        </table>
      </td></tr>
    </table>
    """


@api_router.post("/contact", response_model=ContactSubmission)
async def submit_contact_form(payload: ContactSubmissionCreate):
    submission = ContactSubmission(**payload.model_dump())

    # Persist first so we never lose the submission
    doc = submission.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.contact_submissions.insert_one(doc)

    if not RESEND_API_KEY:
        logger.error("RESEND_API_KEY not configured; submission stored but email not sent.")
        raise HTTPException(status_code=500, detail="Email service is not configured.")

    html_body = _build_contact_email_html(submission)
    params = {
        "from": f"TruTown Contact Form <{SENDER_EMAIL}>",
        "to": [CONTACT_RECIPIENT],
        "reply_to": [submission.email],
        "subject": f"[TruTown Contact] {submission.subject} — {submission.name}",
        "html": html_body,
    }

    try:
        email = await asyncio.to_thread(resend.Emails.send, params)
        email_id = email.get("id") if isinstance(email, dict) else getattr(email, "id", None)
        submission.email_id = email_id
        submission.email_status = "sent"

        # Update the persisted record with the email_id / status
        await db.contact_submissions.update_one(
            {"id": submission.id},
            {"$set": {"email_id": email_id, "email_status": "sent"}},
        )
        return submission
    except Exception as e:
        logger.error(f"Failed to send contact email via Resend: {e}")
        await db.contact_submissions.update_one(
            {"id": submission.id},
            {"$set": {"email_status": f"failed: {str(e)[:300]}"}},
        )
        raise HTTPException(status_code=502, detail="Failed to send email. Please try again later.")


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
