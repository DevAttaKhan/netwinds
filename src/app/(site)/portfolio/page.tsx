import { ProjectCard } from "@/components/common/project-card";
import { PROJECTS } from "@/components/sections/home/data";

export default function PortfolioPage() {
  return (
    <>
      <section className="gradient-animation text-white py-28 md:py-36">
        <div className="container text-center">
          <h1 className="font-primary font-bold text-4xl md:text-6xl lg:text-7xl leading-tight">
            Portfolio
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-xl lg:text-2xl font-secondary opacity-95 max-w-3xl mx-auto">
            A selection of outcomes we’ve delivered — built with care,
            performance, and purpose.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="section-heading text-center max-w-[920px] mx-auto">
            <h2 className="mb-3 font-primary text-3xl md:text-5xl lg:text-6xl font-bold leading-tight gradient-heading">
              {PROJECTS.heading}
            </h2>
            <div className="mx-auto h-1 w-16 rounded-full bg-primary mb-5 md:mb-6" />
            <p className="font-secondary text-base md:text-lg lg:text-xl text-text/80">
              {PROJECTS.subheading}
            </p>
          </div>

          <div className="mx-auto max-w-[1200px] mt-12 md:mt-16 lg:mt-20 grid content-center justify-items-center grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 md:gap-8 lg:gap-10">
            {PROJECTS.projects.map((project) => (
              <ProjectCard key={project.id} data={project} />
            ))}
          </div>

          <div className="text-center mt-12 md:mt-16">
            <a
              href="/contact"
              className="border-gradient inline-block font-secondary font-bold py-3 px-10 rounded-lg"
            >
              Have a project in mind?
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
