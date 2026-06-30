import LegalLayout from "@/components/legal/LegalLayout";

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="June 28, 2026">
      <p>
        This Privacy Policy explains how TruTown Marketplace (&ldquo;TruTown,&rdquo;
        &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses,
        shares, and protects your personal information when you use our mobile
        applications, websites, and related services (collectively, the
        &ldquo;Services&rdquo;). By using the Services, you agree to the
        practices described below.
      </p>

      <h2>1. Information we collect</h2>

      <h3>Information you give us</h3>
      <ul>
        <li>
          <strong>Account information:</strong> name, email address, phone
          number, profile photo, and password.
        </li>
        <li>
          <strong>Identity verification:</strong> government-issued ID
          information, selfie photo, and date of birth when you choose to become
          a verified buyer or seller.
        </li>
        <li>
          <strong>Listing and transaction data:</strong> item details, photos,
          pricing, deposit amounts, meet-up locations, messages exchanged with
          other users, and reviews you leave or receive.
        </li>
        <li>
          <strong>Payment information:</strong> partial card details, billing
          address, and transaction history. Full card numbers and bank
          credentials are handled by our PCI-compliant payment processors &mdash;
          we never store full card numbers on our servers.
        </li>
        <li>
          <strong>Support and contact data:</strong> information you share when
          you contact us, including the contents of your messages.
        </li>
      </ul>

      <h3>Information we collect automatically</h3>
      <ul>
        <li>
          <strong>Device &amp; usage data:</strong> device model, operating
          system, app version, IP address, language, time zone, crash logs, and
          interactions with the Services.
        </li>
        <li>
          <strong>Location:</strong> approximate location derived from your IP,
          and (only with your permission) precise location used to suggest
          nearby listings and safe meet-up spots.
        </li>
        <li>
          <strong>Cookies and similar technologies:</strong> we use a small set
          of strictly necessary cookies and local storage to keep you signed in
          and to remember your preferences. We do not sell cookie-based
          advertising data.
        </li>
      </ul>

      <h2>2. How we use your information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Provide, operate, and improve the Services;</li>
        <li>
          Facilitate deposits, payments, refunds, payouts, and dispute
          resolution;
        </li>
        <li>
          Verify identity, prevent fraud, and protect the safety of our
          community;
        </li>
        <li>
          Personalize the experience (e.g., show you nearby listings or relevant
          categories);
        </li>
        <li>
          Send transactional messages (receipts, deposit status, meet-up
          reminders) and, where permitted, product updates;
        </li>
        <li>Comply with legal obligations and enforce our Terms of Service.</li>
      </ul>

      <h2>3. How we share your information</h2>
      <p>We share information only when necessary:</p>
      <ul>
        <li>
          <strong>With other users:</strong> your public profile (display name,
          photo, ratings) and any information you choose to include in a listing
          or message are visible to the counterparty of a transaction.
        </li>
        <li>
          <strong>With service providers:</strong> cloud hosting, payment
          processors, identity-verification vendors, mapping providers,
          analytics, and customer-support tools that act on our behalf under
          contractual confidentiality obligations.
        </li>
        <li>
          <strong>For legal reasons:</strong> when required to comply with law,
          legal process, or a lawful governmental request, or to protect the
          rights, property, or safety of TruTown, our users, or the public.
        </li>
        <li>
          <strong>In a business transfer:</strong> in connection with a merger,
          acquisition, financing, or sale of assets, subject to standard
          confidentiality protections.
        </li>
      </ul>
      <p>
        <strong>We do not sell your personal information.</strong>
      </p>

      <h2>4. Deposits and payment data</h2>
      <p>
        TruTown&rsquo;s deposit-based model is core to how we keep transactions
        safe. When a buyer commits a deposit, we share with the seller only the
        information needed to complete the exchange (e.g., first name, profile
        photo, agreed meet-up details). Full payment instruments are handled and
        stored by our payment processors in accordance with PCI-DSS standards.
      </p>

      <h2>5. Your choices and rights</h2>
      <p>Depending on where you live, you may have the right to:</p>
      <ul>
        <li>Access, correct, or delete personal information we hold about you;</li>
        <li>Object to or restrict certain processing;</li>
        <li>Withdraw consent where processing is based on consent;</li>
        <li>Receive a portable copy of your data;</li>
        <li>
          Lodge a complaint with a data-protection authority in your
          jurisdiction.
        </li>
      </ul>
      <p>
        You can update most account details directly in the app. To exercise any
        right or close your account, email{" "}
        <a href="mailto:legal@trutown.market">legal@trutown.market</a>. We will
        respond within the timeframe required by applicable law.
      </p>

      <h2>6. Data retention</h2>
      <p>
        We retain personal information for as long as your account is active and
        for a reasonable period thereafter to comply with legal obligations,
        resolve disputes, prevent fraud, and enforce our agreements.
        Transaction records and identity-verification data may be retained
        longer where required by financial, tax, or anti-money-laundering laws.
      </p>

      <h2>7. Security</h2>
      <p>
        We use industry-standard technical and organizational safeguards
        including encryption in transit, encryption at rest for sensitive
        fields, access controls, and continuous monitoring. No system is 100%
        secure, so we cannot guarantee absolute security, but we work hard to
        protect your data and to notify you in the event of a material incident
        affecting your information.
      </p>

      <h2>8. Children</h2>
      <p>
        The Services are not intended for anyone under 18. We do not knowingly
        collect personal information from children. If you believe a child has
        provided us with personal information, please contact us so we can
        delete it.
      </p>

      <h2>9. International users</h2>
      <p>
        TruTown is operated from the United States. If you use the Services from
        another country, you understand that your information may be transferred
        to, stored in, and processed in the United States or in other countries
        where our service providers operate, with appropriate safeguards.
      </p>

      <h2>10. Changes to this Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material changes
        will be communicated through the app or by email. The &ldquo;Last
        updated&rdquo; date at the top of this page reflects the most recent
        revision.
      </p>

      <h2>11. Contact</h2>
      <p>
        For privacy questions, requests, or complaints, please reach our team at{" "}
        <a href="mailto:legal@trutown.market">legal@trutown.market</a>.
      </p>
    </LegalLayout>
  );
}
