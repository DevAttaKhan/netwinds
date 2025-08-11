import { PROJECTS } from "./data";
import { ProjectCard } from "@/components/common/project-card";

export const Projects = () => {
  return (
    <section className="py-20 md:py-28 lg:py-36">
      <div className="container">
        <div className="section-heading text-center max-w-[920px] mx-auto">
          <h1 className="mb-3 font-primary text-3xl md:text-5xl lg:text-6xl font-bold leading-tight gradient-heading">
            {PROJECTS.heading}
          </h1>
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
      </div>
    </section>
  );
};
