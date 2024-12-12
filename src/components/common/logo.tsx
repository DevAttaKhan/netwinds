import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-primary font-bold text-2xl md:text-3xl lg:text-5xl"
    >
      Netwinds.
    </Link>
  );
};
