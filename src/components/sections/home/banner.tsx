"use client";
// import Image from "next/image";
import { BANNER } from "./data";
// import windTurbine from "@/assets/images/wind-turbine.gif";
import windTurbine from "@/assets/lottie/wind-turbine-white.json";
import Lottie from "@lottielab/lottie-player/react";
export const Banner = () => {
  return (
    <section className="gradient-animation h-screen  md:flex items-center py-52">
      <div className="container flex flex-col gap-12 md:flex-row items-center justify-between">
        <div className="left max-w-[400px] md:max-w-[660px] ">
          <h1 className="text-white text-center md:text-left text-2xl md:text-3xl lg:text-5xl font-primary font-bold mb-4">
            {BANNER.heaing}
          </h1>
          <p className=" text-sm text-center md:text-left md:text-xl lg:text-2xl font-secondary text-white">
            {BANNER.subheading}
          </p>
        </div>

        <div className="right">
          {/* <Image alt="wind-turbine" src={windTurbine} /> */}
          <Lottie lottie={windTurbine} className="wind-turbine" />
        </div>
      </div>
    </section>
  );
};
