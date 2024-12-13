"use client";
import dynamic from "next/dynamic";
import { BANNER } from "./data";
import windTurbine from "@/assets/lottie/wind-turbine-white.json";
const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });
export const Banner = () => {
  return (
    <section className="gradient-animation flex items-center py-28 h-screen min-h-[600px] overflow-hidden">
      <div className="container h-full flex flex-col sm:flex-row justify-between items-center mt-[5vw]">
        <div className="left max-w-[400px] md:max-w-[660px]  ">
          <h1 className="text-white text-center sm:text-left text-3xl md:text-4xl lg:text-5xl font-primary font-bold mb-4">
            {BANNER.heaing}
          </h1>
          <p className=" text-base text-center sm:text-left md:text-xl lg:text-2xl font-secondary text-white">
            {BANNER.subheading}
          </p>
        </div>

        <Lottie
          loop
          play
          animationData={windTurbine}
          className="wind-turbine shrink-0 w-right-clamp "
        />
      </div>
    </section>
  );
};
