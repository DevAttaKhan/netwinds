export default function PrivacyPage() {
  return (
    <>
      <section className="gradient-animation text-white py-28 md:py-36">
        <div className="container text-center">
          <h1 className="font-primary font-bold text-4xl md:text-6xl lg:text-7xl leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-xl lg:text-2xl font-secondary opacity-95 max-w-3xl mx-auto">
            Your privacy matters. Here’s how we collect, use, and protect your
            data.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="prose prose-neutral max-w-none">
            <h2>Overview</h2>
            <p>
              This Privacy Policy explains how Netwinds (&quot;we&quot;,
              &quot;us&quot;, &quot;our&quot;) collects, uses, and safeguards
              information when you use our website and services. By accessing
              our site, you agree to the terms described here.
            </p>

            <h2>Information We Collect</h2>
            <ul>
              <li>
                Personal Information: Name, email address, phone number, and any
                details you choose to provide through forms or direct
                communication.
              </li>
              <li>
                Usage Data: IP address, browser type, pages visited, time spent,
                and other analytics data collected via cookies or similar
                technologies.
              </li>
            </ul>

            <h2>How We Use Information</h2>
            <ul>
              <li>To deliver and improve our services.</li>
              <li>To respond to inquiries and provide customer support.</li>
              <li>To personalize content and enhance user experience.</li>
              <li>To conduct analytics and measure performance.</li>
            </ul>

            <h2>Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to understand usage
              patterns and improve our site. You may adjust your browser
              settings to refuse cookies; however, some features may not
              function properly without them.
            </p>

            <h2>Data Sharing</h2>
            <p>
              We do not sell your personal information. We may share information
              with trusted service providers who assist in operating our website
              and delivering services, subject to confidentiality obligations.
            </p>

            <h2>Data Security</h2>
            <p>
              We use reasonable administrative, technical, and physical
              safeguards to protect your information. No method of transmission
              over the internet is completely secure, and we cannot guarantee
              absolute security.
            </p>

            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have rights to access,
              correct, or delete your personal data. To exercise these rights,
              contact us using the details below.
            </p>

            <h2>Children’s Privacy</h2>
            <p>
              Our services are not directed to children under 13. We do not
              knowingly collect personal information from children.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this policy periodically. Changes are effective when
              posted on this page, with the “Last Updated” date adjusted
              accordingly.
            </p>

            <h2>Contact Us</h2>
            <p>
              For questions about this policy or your data, contact us at{" "}
              <a href="mailto:hello@netwinds.dev">hello@netwinds.dev</a>.
            </p>

            <p>
              <em>Last Updated: {new Date().toLocaleDateString()}</em>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
