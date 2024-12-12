"use client";
// import Image from "next/image";
import { BANNER } from "./data";
// import windTurbine from "@/assets/images/wind-turbine.gif";
import windTurbine from "@/assets/lottie/wind-turbine-white.json";
import Lottie from "@lottielab/lottie-player/react";
export const Banner = () => {
  return (
    <section className="gradient-animation h-screen  flex items-center">
      <div className="container flex items-center justify-between">
        <div className="left max-w-[660px] ">
          <h1 className="text-white text-5xl font-primary font-bold mb-4">
            {BANNER.heaing}
          </h1>
          <p className="text-2xl font-secondary text-white">
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
