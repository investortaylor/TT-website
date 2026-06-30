#!/usr/bin/env python3
"""
Backend API Testing Suite for TruTown Marketplace
Tests the POST /api/contact endpoint and regression tests for existing endpoints
"""

import requests
import json
import os
from dotenv import load_dotenv
from pathlib import Path
from pymongo import MongoClient

# Load environment variables
backend_env = Path("/app/backend/.env")
frontend_env = Path("/app/frontend/.env")

load_dotenv(backend_env)
load_dotenv(frontend_env)

# Get configuration
BACKEND_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')
MONGO_URL = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
DB_NAME = os.environ.get('DB_NAME', 'test_database')

print(f"🔧 Configuration:")
print(f"   Backend URL: {BACKEND_URL}")
print(f"   MongoDB URL: {MONGO_URL}")
print(f"   Database: {DB_NAME}")
print()

# Test counters
tests_passed = 0
tests_failed = 0
test_results = []


def log_test(test_name, passed, details=""):
    """Log test result"""
    global tests_passed, tests_failed
    status = "✅ PASS" if passed else "❌ FAIL"
    print(f"{status}: {test_name}")
    if details:
        print(f"   {details}")
    print()
    
    if passed:
        tests_passed += 1
    else:
        tests_failed += 1
    
    test_results.append({
        "test": test_name,
        "passed": passed,
        "details": details
    })


def test_regression_hello_world():
    """Test GET /api/ returns Hello World"""
    try:
        response = requests.get(f"{BACKEND_URL}/api/", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                log_test("Regression: GET /api/ returns Hello World", True)
                return True
            else:
                log_test("Regression: GET /api/ returns Hello World", False, 
                        f"Expected message='Hello World', got {data}")
                return False
        else:
            log_test("Regression: GET /api/ returns Hello World", False, 
                    f"Expected status 200, got {response.status_code}")
            return False
    except Exception as e:
        log_test("Regression: GET /api/ returns Hello World", False, str(e))
        return False


def test_regression_status_endpoints():
    """Test POST and GET /api/status endpoints"""
    try:
        # Test POST /api/status
        payload = {"client_name": "Test Client for Regression"}
        response = requests.post(f"{BACKEND_URL}/api/status", json=payload, timeout=10)
        
        if response.status_code != 200:
            log_test("Regression: POST /api/status", False, 
                    f"Expected status 200, got {response.status_code}")
            return False
        
        data = response.json()
        if not data.get("id") or not data.get("client_name") or not data.get("timestamp"):
            log_test("Regression: POST /api/status", False, 
                    f"Missing required fields in response: {data}")
            return False
        
        # Test GET /api/status
        response = requests.get(f"{BACKEND_URL}/api/status", timeout=10)
        
        if response.status_code != 200:
            log_test("Regression: GET /api/status", False, 
                    f"Expected status 200, got {response.status_code}")
            return False
        
        data = response.json()
        if not isinstance(data, list):
            log_test("Regression: GET /api/status", False, 
                    f"Expected list response, got {type(data)}")
            return False
        
        log_test("Regression: POST and GET /api/status", True)
        return True
        
    except Exception as e:
        log_test("Regression: POST and GET /api/status", False, str(e))
        return False


def test_contact_happy_path_full():
    """Test POST /api/contact with all fields (happy path)"""
    try:
        payload = {
            "name": "QA Tester",
            "email": "qa-tester@example.com",
            "phone": "+1 555 0101",
            "subject": "General Inquiry",
            "message": "Automated test from deep_testing_backend_v2"
        }
        
        response = requests.post(f"{BACKEND_URL}/api/contact", json=payload, timeout=15)
        
        if response.status_code != 200:
            log_test("Happy Path: POST /api/contact with all fields", False, 
                    f"Expected status 200, got {response.status_code}. Response: {response.text}")
            return None
        
        data = response.json()
        
        # Validate response structure
        required_fields = ["id", "name", "email", "phone", "subject", "message", 
                          "email_status", "email_id", "timestamp"]
        missing_fields = [f for f in required_fields if f not in data]
        
        if missing_fields:
            log_test("Happy Path: POST /api/contact with all fields", False, 
                    f"Missing fields in response: {missing_fields}")
            return None
        
        # Validate field values
        if data["name"] != payload["name"]:
            log_test("Happy Path: POST /api/contact with all fields", False, 
                    f"Name mismatch: expected '{payload['name']}', got '{data['name']}'")
            return None
        
        if data["email"] != payload["email"]:
            log_test("Happy Path: POST /api/contact with all fields", False, 
                    f"Email mismatch: expected '{payload['email']}', got '{data['email']}'")
            return None
        
        if data["phone"] != payload["phone"]:
            log_test("Happy Path: POST /api/contact with all fields", False, 
                    f"Phone mismatch: expected '{payload['phone']}', got '{data['phone']}'")
            return None
        
        if data["subject"] != payload["subject"]:
            log_test("Happy Path: POST /api/contact with all fields", False, 
                    f"Subject mismatch: expected '{payload['subject']}', got '{data['subject']}'")
            return None
        
        if data["message"] != payload["message"]:
            log_test("Happy Path: POST /api/contact with all fields", False, 
                    f"Message mismatch: expected '{payload['message']}', got '{data['message']}'")
            return None
        
        if data["email_status"] != "sent":
            log_test("Happy Path: POST /api/contact with all fields", False, 
                    f"Expected email_status='sent', got '{data['email_status']}'")
            return None
        
        if not data["email_id"]:
            log_test("Happy Path: POST /api/contact with all fields", False, 
                    "email_id is null or empty")
            return None
        
        # Check that _id is not in response
        if "_id" in data:
            log_test("Happy Path: POST /api/contact with all fields", False, 
                    "_id field should not be in API response")
            return None
        
        log_test("Happy Path: POST /api/contact with all fields", True, 
                f"Submission ID: {data['id']}, Email ID: {data['email_id']}")
        return data["id"]
        
    except Exception as e:
        log_test("Happy Path: POST /api/contact with all fields", False, str(e))
        return None


def test_contact_happy_path_no_phone():
    """Test POST /api/contact without optional phone field"""
    try:
        payload = {
            "name": "QA Tester No Phone",
            "email": "qa-nophone@example.com",
            "subject": "Test Without Phone",
            "message": "Testing submission without phone number"
        }
        
        response = requests.post(f"{BACKEND_URL}/api/contact", json=payload, timeout=15)
        
        if response.status_code != 200:
            log_test("Happy Path: POST /api/contact without phone", False, 
                    f"Expected status 200, got {response.status_code}. Response: {response.text}")
            return False
        
        data = response.json()
        
        if data["email_status"] != "sent":
            log_test("Happy Path: POST /api/contact without phone", False, 
                    f"Expected email_status='sent', got '{data['email_status']}'")
            return False
        
        if not data["email_id"]:
            log_test("Happy Path: POST /api/contact without phone", False, 
                    "email_id is null or empty")
            return False
        
        # Phone should be None or null
        if data.get("phone") not in [None, ""]:
            log_test("Happy Path: POST /api/contact without phone", False, 
                    f"Expected phone to be None/null, got '{data.get('phone')}'")
            return False
        
        log_test("Happy Path: POST /api/contact without phone", True, 
                f"Email sent successfully without phone field")
        return True
        
    except Exception as e:
        log_test("Happy Path: POST /api/contact without phone", False, str(e))
        return False


def test_contact_validation_missing_email():
    """Test POST /api/contact with missing email (expect 422)"""
    try:
        payload = {
            "name": "Test User",
            "subject": "Test Subject",
            "message": "Test message"
        }
        
        response = requests.post(f"{BACKEND_URL}/api/contact", json=payload, timeout=10)
        
        if response.status_code == 422:
            log_test("Validation: Missing email returns 422", True)
            return True
        else:
            log_test("Validation: Missing email returns 422", False, 
                    f"Expected status 422, got {response.status_code}")
            return False
            
    except Exception as e:
        log_test("Validation: Missing email returns 422", False, str(e))
        return False


def test_contact_validation_missing_message():
    """Test POST /api/contact with missing message (expect 422)"""
    try:
        payload = {
            "name": "Test User",
            "email": "test@example.com",
            "subject": "Test Subject"
        }
        
        response = requests.post(f"{BACKEND_URL}/api/contact", json=payload, timeout=10)
        
        if response.status_code == 422:
            log_test("Validation: Missing message returns 422", True)
            return True
        else:
            log_test("Validation: Missing message returns 422", False, 
                    f"Expected status 422, got {response.status_code}")
            return False
            
    except Exception as e:
        log_test("Validation: Missing message returns 422", False, str(e))
        return False


def test_contact_validation_malformed_email():
    """Test POST /api/contact with malformed email (expect 422)"""
    try:
        payload = {
            "name": "Test User",
            "email": "not-an-email",
            "subject": "Test Subject",
            "message": "Test message"
        }
        
        response = requests.post(f"{BACKEND_URL}/api/contact", json=payload, timeout=10)
        
        if response.status_code == 422:
            log_test("Validation: Malformed email returns 422", True)
            return True
        else:
            log_test("Validation: Malformed email returns 422", False, 
                    f"Expected status 422, got {response.status_code}")
            return False
            
    except Exception as e:
        log_test("Validation: Malformed email returns 422", False, str(e))
        return False


def test_contact_persistence(submission_id):
    """Test that contact submission is persisted in MongoDB"""
    if not submission_id:
        log_test("Persistence: Contact submission in MongoDB", False, 
                "No submission_id provided (previous test may have failed)")
        return False
    
    try:
        # Connect to MongoDB
        mongo_client = MongoClient(MONGO_URL)
        db = mongo_client[DB_NAME]
        collection = db.contact_submissions
        
        # Find the document by id
        doc = collection.find_one({"id": submission_id})
        
        if not doc:
            log_test("Persistence: Contact submission in MongoDB", False, 
                    f"No document found with id={submission_id}")
            mongo_client.close()
            return False
        
        # Verify email_status is "sent"
        if doc.get("email_status") != "sent":
            log_test("Persistence: Contact submission in MongoDB", False, 
                    f"Expected email_status='sent', got '{doc.get('email_status')}'")
            mongo_client.close()
            return False
        
        # Verify email_id is not empty
        if not doc.get("email_id"):
            log_test("Persistence: Contact submission in MongoDB", False, 
                    "email_id is empty in database")
            mongo_client.close()
            return False
        
        # Verify _id field exists in MongoDB (it should, but not in API response)
        if "_id" not in doc:
            log_test("Persistence: Contact submission in MongoDB", False, 
                    "_id field missing in MongoDB document")
            mongo_client.close()
            return False
        
        log_test("Persistence: Contact submission in MongoDB", True, 
                f"Document found with email_status='sent' and email_id='{doc.get('email_id')}'")
        
        mongo_client.close()
        return True
        
    except Exception as e:
        log_test("Persistence: Contact submission in MongoDB", False, str(e))
        return False


def print_summary():
    """Print test summary"""
    print("=" * 70)
    print("TEST SUMMARY")
    print("=" * 70)
    print(f"Total Tests: {tests_passed + tests_failed}")
    print(f"✅ Passed: {tests_passed}")
    print(f"❌ Failed: {tests_failed}")
    print()
    
    if tests_failed > 0:
        print("Failed Tests:")
        for result in test_results:
            if not result["passed"]:
                print(f"  - {result['test']}")
                if result["details"]:
                    print(f"    {result['details']}")
        print()
    
    print("=" * 70)


if __name__ == "__main__":
    print("=" * 70)
    print("BACKEND API TESTING SUITE - TruTown Marketplace")
    print("=" * 70)
    print()
    
    # Run regression tests first
    print("🔄 Running Regression Tests...")
    print("-" * 70)
    test_regression_hello_world()
    test_regression_status_endpoints()
    
    # Run contact endpoint tests
    print("📧 Testing POST /api/contact Endpoint...")
    print("-" * 70)
    
    # Happy path tests
    submission_id = test_contact_happy_path_full()
    test_contact_happy_path_no_phone()
    
    # Validation tests
    test_contact_validation_missing_email()
    test_contact_validation_missing_message()
    test_contact_validation_malformed_email()
    
    # Persistence test
    test_contact_persistence(submission_id)
    
    # Print summary
    print_summary()
    
    # Exit with appropriate code
    exit(0 if tests_failed == 0 else 1)
