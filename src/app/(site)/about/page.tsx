import { Lucide } from "@/components/ui";

const VALUES = [
  {
    id: 1,
    title: "Craftsmanship",
    desc: "We obsess over details to ship delightful, high-quality experiences.",
    icon: "Hammer" as const,
  },
  {
    id: 2,
    title: "Partnership",
    desc: "We collaborate closely and communicate clearly to achieve your goals.",
    icon: "Handshake" as const,
  },
  {
    id: 3,
    title: "Integrity",
    desc: "We act with transparency and deliver on our promises.",
    icon: "ShieldCheck" as const,
  },
];

const STEPS = [
  {
    id: 1,
    title: "Discover",
    desc: "We learn your needs, audience, and goals.",
  },
  {
    id: 2,
    title: "Design",
    desc: "We craft thoughtful UX/UI driven by outcomes.",
  },
  {
    id: 3,
    title: "Develop",
    desc: "We build performant, accessible, and maintainable products.",
  },
  {
    id: 4,
    title: "Deliver",
    desc: "We launch, monitor, iterate, and support.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="gradient-animation text-white py-28 md:py-36">
        <div className="container text-center">
          <h1 className="font-primary font-bold text-4xl md:text-6xl lg:text-7xl leading-tight">
            About Netwinds
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-xl lg:text-2xl font-secondary opacity-95 max-w-3xl mx-auto">
            We blend creativity and technology to build digital products that
            move businesses forward.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container text-center max-w-4xl">
          <h2 className="gradient-heading font-primary font-bold text-3xl md:text-5xl lg:text-6xl leading-tight mb-4">
            Our Mission
          </h2>
          <p className="text-text/90 text-base md:text-lg lg:text-xl font-secondary">
            Empower brands with modern, scalable, and human-centered web
            experiences that drive measurable growth and enduring value.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#f8f8f8]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <h3 className="gradient-heading font-primary font-bold text-2xl md:text-4xl lg:text-5xl">
              Core Values
            </h3>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 md:gap-8 lg:gap-10">
            {VALUES.map((v) => (
              <div
                key={v.id}
                className="rounded-3xl shadow-service p-6 bg-white text-center"
              >
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 mb-4">
                  <Lucide
                    name={v.icon}
                    size={24}
                    color="currentColor"
                    className="text-primary"
                  />
                </div>
                <h4 className="font-primary font-bold text-xl md:text-2xl mb-2">
                  {v.title}
                </h4>
                <p className="font-secondary text-sm md:text-base text-text/80">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <h3 className="gradient-heading font-primary font-bold text-2xl md:text-4xl lg:text-5xl">
              Our Process
            </h3>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 md:gap-8 lg:gap-10">
            {STEPS.map((s) => (
              <div
                key={s.id}
                className="rounded-3xl shadow-service p-6 bg-white"
              >
                <div className="text-3xl md:text-4xl font-bold font-primary text-primary mb-2">
                  {s.id.toString().padStart(2, "0")}
                </div>
                <h5 className="font-primary font-bold text-xl md:text-2xl mb-1">
                  {s.title}
                </h5>
                <p className="font-secondary text-sm md:text-base text-text/80">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 md:mt-14">
            <a
              href="/contact"
              className="border-gradient inline-block font-secondary font-bold py-3 px-10 rounded-lg"
            >
              Start a Project
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
