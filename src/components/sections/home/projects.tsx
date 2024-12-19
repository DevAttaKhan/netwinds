import { PROJECTS } from "./data";
import { ProjectCard } from "@/components/common/project-card";

export const Projects = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="section-heading text-center max-w-[830px] mx-auto">
          <h1 className="mb-4 font-primary  text-3xl md:text-4xl lg:text-5xl font-bold gradient-heading ">
            {PROJECTS.heading}
          </h1>
          <p className="font-secondary text-sm sm:text-base md:text-xl lg:text-2xl">
            {PROJECTS.subheading}
          </p>
        </div>

        <div className="mx-auto mt-14 md:mt-20 lg:mt-28 grid content-center grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6  ">
          {PROJECTS.projects.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
