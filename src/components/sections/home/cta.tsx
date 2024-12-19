import React from "react";

export const Cta = () => {
  return (
    <section className="py-14 md:py-20 lg:py-24 gradient-animation">
      <div className="max-w-[1135px] px-5 mx-auto text-white text-center">
        <h2 className=" text-3xl md:text-4xl lg:text-5xl font-bold  font-primary mb-6">
          Your Vision, Our Expertise – Start Your Journey Today!
        </h2>
        <p className="max-w-[945px] mx-auto text-base md:text-xl ">
          Whether you’re looking for a stunning website, a seamless e-commerce
          platform, or a custom solution, we’re here to turn your ideas into
          success stories. Let’s make it happen!
        </p>
        <button className="bg-accent text-white px-11 py-3 rounded-lg mt-10 md:mt-12  lg:mt-16">
          Start Your Journey
        </button>
      </div>
    </section>
  );
};
