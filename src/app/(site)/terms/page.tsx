export default function TermsPage() {
  return (
    <>
      <section className="gradient-animation text-white py-28 md:py-36">
        <div className="container text-center">
          <h1 className="font-primary font-bold text-4xl md:text-6xl lg:text-7xl leading-tight">
            Terms of Service
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-xl lg:text-2xl font-secondary opacity-95 max-w-3xl mx-auto">
            The rules for using our website and services.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="prose prose-neutral max-w-none">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing or using the Netwinds website and services
              (&quot;Services&quot;), you agree to be bound by these Terms of
              Service (&quot;Terms&quot;). If you do not agree, do not use the
              Services.
            </p>

            <h2>Use of Services</h2>
            <ul>
              <li>You agree to use the Services only for lawful purposes.</li>
              <li>
                You will not interfere with or disrupt the operation of the
                Services.
              </li>
              <li>
                You will not attempt to gain unauthorized access to any systems
                or data.
              </li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              All content, trademarks, and materials available through the
              Services are owned by or licensed to Netwinds and are protected by
              applicable laws. You may not copy, modify, or distribute any
              content without prior written permission.
            </p>

            <h2>Client Materials</h2>
            <p>
              You represent that you have the necessary rights to any materials
              you provide to us and grant us a license to use such materials
              solely to deliver the Services.
            </p>

            <h2>Fees and Payment</h2>
            <p>
              For paid engagements, fees, payment terms, and deliverables will
              be specified in a separate proposal or agreement. Late payments
              may incur interest or suspension of Services.
            </p>

            <h2>Warranties and Disclaimers</h2>
            <p>
              The Services are provided &quot;as is&quot; without warranties of
              any kind, express or implied, including merchantability, fitness
              for a particular purpose, and non-infringement. We do not warrant
              that the Services will be uninterrupted or error-free.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Netwinds will not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, or loss of profits or data, arising from your
              use of the Services.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Netwinds and its
              affiliates from any claims, damages, losses, or expenses arising
              from your use of the Services or violation of these Terms.
            </p>

            <h2>Termination</h2>
            <p>
              We may suspend or terminate access to the Services at any time if
              you violate these Terms or engage in harmful activities.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Changes take effect
              when posted on this page, with the “Last Updated” date adjusted
              below.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms are governed by the laws of the jurisdiction where
              Netwinds operates, without regard to conflict of law principles.
            </p>

            <h2>Contact</h2>
            <p>
              If you have questions about these Terms, contact us at{" "}
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
