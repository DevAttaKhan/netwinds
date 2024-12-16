import React from "react";
import { SERVICES } from "./data";
import { ServiceCard } from "@/components/common";

export const Services = () => {
  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="container">
        <div className="section-heading text-center max-w-[830px] mx-auto">
          <h1 className="mb-4 font-primary  text-3xl md:text-4xl lg:text-5xl font-bold gradient-heading ">
            {SERVICES.heading}
          </h1>
          <p className="font-secondary text-sm sm:text-base md:text-xl lg:text-2xl">
            {SERVICES.subheading}
          </p>
        </div>

        <div className="mx-auto mt-14 md:mt-20 lg:mt-28 grid content-center grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 md:gap-10 lg:gap-14">
          {SERVICES.cards.map((card) => (
            <ServiceCard key={card.id} data={card} />
          ))}
        </div>
        <button className="border-gradient block w-max mt-5 md:mt-8 lg:mt-10 mx-auto font-secondary font-bold py-3 px-12 rounded-lg">
          Discover how can we help
        </button>
      </div>
    </section>
  );
};
