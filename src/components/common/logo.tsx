import Link from "next/link";
import React from "react";
import cn from 'classnames';

type Props = {
  className?: string;
  bytesClassName?: string;
};

export const Logo = ({ className, bytesClassName }: Props) => {
  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center space-x-2 font-primary font-bold text-xl md:text-2xl lg:text-3xl transition-all duration-300 hover:scale-105",
        className
      )}
    >
      <div className="relative">
        <span className="text-gradient-primary">Beetle</span>
        <span className={cn([bytesClassName ? bytesClassName : "text-secondary"])}>Bytes</span>
        {/* Beetle accent mark */}
        <div className="absolute -top-1 -right-2 w-2 h-2 bg-accent rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </Link>
  );
};
