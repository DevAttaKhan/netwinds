import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-primary font-bold text-xl md:text-2xl lg:text-4xl"
    >
      Netwinds.
    </Link>
  );
};
