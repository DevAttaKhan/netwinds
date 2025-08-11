import { Lucide } from "@/components/ui";

const LOGOS = Array.from({ length: 8 }).map((_, i) => ({ id: i + 1 }));

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Netwinds delivered ahead of schedule and the quality exceeded our expectations.",
    author: "Jordan P.",
    role: "VP Product, RetailCo",
  },
  {
    id: 2,
    quote:
      "A true partner — from strategy through launch. Our conversion rate jumped 35%.",
    author: "Alicia R.",
    role: "Founder, SaaSly",
  },
];

export default function ClientsPage() {
  return (
    <>
      <section className="gradient-animation text-white py-28 md:py-36">
        <div className="container text-center">
          <h1 className="font-primary font-bold text-4xl md:text-6xl lg:text-7xl leading-tight">
            Clients
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-xl lg:text-2xl font-secondary opacity-95 max-w-3xl mx-auto">
            We partner with ambitious teams across industries to build what’s
            next.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <h2 className="gradient-heading font-primary font-bold text-2xl md:text-4xl lg:text-5xl">
              Trusted by
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-6 md:gap-8 lg:gap-10 items-center">
            {LOGOS.map((l) => (
              <div
                key={l.id}
                className="h-16 rounded-2xl border border-black/10 bg-white/70 flex items-center justify-center"
              >
                <span className="text-text/50 text-sm">Logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#f8f8f8]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h3 className="gradient-heading font-primary font-bold text-2xl md:text-4xl">
              What our clients say
            </h3>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 md:gap-8">
            {TESTIMONIALS.map((t) => (
              <blockquote
                key={t.id}
                className="rounded-3xl shadow-service p-6 bg-white"
              >
                <Lucide
                  name="Quote"
                  size={24}
                  color="currentColor"
                  className="text-primary mb-3"
                />
                <p className="text-text/90 text-base md:text-lg leading-relaxed">
                  “{t.quote}”
                </p>
                <footer className="mt-4 text-sm md:text-base text-text/70">
                  <span className="font-semibold">{t.author}</span>, {t.role}
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="text-center mt-10 md:mt-14">
            <a
              href="/contact"
              className="border-gradient inline-block font-secondary font-bold py-3 px-10 rounded-lg"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
