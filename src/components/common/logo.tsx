import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="group flex items-center space-x-2 font-primary font-bold text-xl md:text-2xl lg:text-3xl transition-all duration-300 hover:scale-105"
    >
      <div className="relative">
        <span className="text-gradient-primary">Beetle</span>
        <span className="text-secondary">Bytes</span>
        {/* Beetle accent mark */}
        <div className="absolute -top-1 -right-2 w-2 h-2 bg-accent rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </Link>
  );
};
