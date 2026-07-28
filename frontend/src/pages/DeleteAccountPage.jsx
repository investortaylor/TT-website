import LegalLayout from "@/components/legal/LegalLayout";

export default function DeleteAccountPage() {
  return (
    <LegalLayout
      title="Delete Your TruTown Marketplace Account"
      lastUpdated="July 28, 2026"
    >
      <h2>How to request account deletion</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Open the TruTown Marketplace app</li>
        <li>Go to Profile</li>
        <li>Tap Delete Account</li>
        <li>
          Review any blockers (e.g. active deposits or balance due) and resolve
          them if shown
        </li>
        <li>Confirm your deletion request</li>
      </ol>
      <p>
        Your account will be scheduled for deletion within 72 hours.
      </p>

      <h3>Alternative</h3>
      <p>
        Email{" "}
        <a href="mailto:support@trutown.market">support@trutown.market</a> or{" "}
        <a href="mailto:legal@2ncapitalventures.com">
          legal@2ncapitalventures.com
        </a>{" "}
        with the email address linked to your account.
      </p>

      <h2>Data that is deleted</h2>
      <ul>
        <li>Name, email, username, phone number</li>
        <li>Profile photo</li>
        <li>Listings and listing media</li>
        <li>In-app messages</li>
        <li>Account preferences and notification settings</li>
      </ul>

      <h2>Data that may be retained</h2>
      <ul>
        <li>
          Completed transaction and payment records (up to 7 years for tax,
          accounting, and legal compliance)
        </li>
        <li>
          Information required by law or for fraud prevention and dispute
          resolution
        </li>
        <li>
          ID verification data may be retained by our verification partner per
          their policies
        </li>
      </ul>

      <h2>Retention period</h2>
      <p>
        Deletion is processed within 72 hours of a confirmed request, except
        where law or legitimate business needs require longer retention.
      </p>
    </LegalLayout>
  );
}
