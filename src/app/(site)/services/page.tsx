import { ServiceCard } from "@/components/common";
import { SERVICES } from "@/components/sections/home/data";

const STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "TailwindCSS",
  "Vercel",
];

export default function ServicesPage() {
  return (
    <>
      <section className="gradient-animation text-white py-28 md:py-36">
        <div className="container text-center">
          <h1 className="font-primary font-bold text-4xl md:text-6xl lg:text-7xl leading-tight">
            Services
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-xl lg:text-2xl font-secondary opacity-95 max-w-3xl mx-auto">
            Solutions tailored to your goals — designed, engineered, and
            optimized for results.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="section-heading text-center max-w-[920px] mx-auto">
            <h2 className="mb-3 font-primary text-3xl md:text-5xl lg:text-6xl font-bold leading-tight gradient-heading">
              {SERVICES.heading}
            </h2>
            <div className="mx-auto h-1 w-16 rounded-full bg-primary mb-5 md:mb-6" />
            <p className="font-secondary text-base md:text-lg lg:text-xl text-text/80">
              {SERVICES.subheading}
            </p>
          </div>

          <div className="mx-auto mt-12 md:mt-16 lg:mt-20 grid content-center grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 md:gap-8 lg:gap-10">
            {SERVICES.cards.map((card) => (
              <ServiceCard key={card.id} data={card} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#f8f8f8]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
            <h3 className="gradient-heading font-primary font-bold text-2xl md:text-4xl">
              Technologies
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {STACK.map((t) => (
              <span
                key={t}
                className="px-4 py-2 rounded-full border border-primary/30 text-sm md:text-base"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="text-center mt-10 md:mt-14">
            <a
              href="/contact"
              className="border-gradient inline-block font-secondary font-bold py-3 px-10 rounded-lg"
            >
              Let’s Talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
