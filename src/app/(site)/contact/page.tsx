export default function ContactPage() {
  return (
    <>
      <section className="gradient-animation text-white py-28 md:py-36">
        <div className="container text-center">
          <h1 className="font-primary font-bold text-4xl md:text-6xl lg:text-7xl leading-tight">
            Contact
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-xl lg:text-2xl font-secondary opacity-95 max-w-3xl mx-auto">
            Tell us about your goals — we’ll help you get there.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <div className="mb-8">
              <h2 className="gradient-heading font-primary font-bold text-3xl md:text-5xl mb-3">
                Let’s talk
              </h2>
              <p className="font-secondary text-base md:text-lg text-text/80">
                Prefer email or a quick call? We’re flexible.
              </p>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
              <div className="rounded-3xl shadow-service p-6 bg-white">
                <div className="text-sm text-text/70 mb-1">Email</div>
                <a
                  href="mailto:hello@netwinds.dev"
                  className="font-primary font-bold text-xl hover:text-secondary transition"
                >
                  hello@netwinds.dev
                </a>
              </div>
              <div className="rounded-3xl shadow-service p-6 bg-white">
                <div className="text-sm text-text/70 mb-1">Phone</div>
                <a
                  href="tel:+1234567890"
                  className="font-primary font-bold text-xl hover:text-secondary transition"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="rounded-3xl shadow-service p-6 bg-white">
                <div className="text-sm text-text/70 mb-1">Hours</div>
                <div className="font-primary font-bold text-xl">
                  Mon – Fri, 9am – 6pm
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="rounded-3xl shadow-service p-6 md:p-8 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm text-text/70 mb-1">
                    First name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-sm text-text/70 mb-1">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="Doe"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-text/70 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="jane@company.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-text/70 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full rounded-lg border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="Tell us about your project..."
                  />
                </div>
              </div>
              <button
                type="button"
                className="gradient-animation text-white font-secondary font-bold py-3 px-8 rounded-lg mt-5 md:mt-6"
              >
                Send message
              </button>
              <p className="text-xs text-text/60 mt-3">
                By clicking, you agree to our terms and privacy policy.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
