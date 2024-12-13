"use client";
import dynamic from "next/dynamic";
import { BANNER } from "./data";
import windTurbine from "@/assets/lottie/wind-turbine-white.json";
const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });
export const Banner = () => {
  return (
    <section className="gradient-animation h-screen  md:flex items-center py-28 md:py-52 lg:py-[calc(208px_+_88px)] overflow-hidden">
      <div className="container flex flex-col gap-12 md:flex-row items-center justify-between">
        <div className="left max-w-[400px] md:max-w-[660px] ">
          <h1 className="text-white text-center md:text-left text-2xl md:text-3xl lg:text-5xl font-primary font-bold mb-4">
            {BANNER.heaing}
          </h1>
          <p className=" text-sm text-center md:text-left md:text-xl lg:text-2xl font-secondary text-white">
            {BANNER.subheading}
          </p>
        </div>

        <Lottie
          loop
          play
          animationData={windTurbine}
          className="wind-turbine shrink-0 w-right-clamp"
        />
      </div>
    </section>
  );
};
