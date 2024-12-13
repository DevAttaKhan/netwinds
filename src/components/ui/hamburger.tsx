import React, { forwardRef } from "react";
import cn from "classnames";

interface HamburgerProps {
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

export const Hamburger = forwardRef<HTMLButtonElement, HamburgerProps>(
  ({ isActive, className, onClick }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative w-7 h-8 flex flex-col items-center justify-center gap-1.5 group [&_span]:rounded",
          className
        )}
        onClick={onClick}
        aria-label="Toggle menu"
      >
        <span
          className={cn(
            "block w-full h-[3px] bg-white transition-transform duration-300 ease-in-out",
            {
              "translate-y-[9px] rotate-45 group-hover:bg-tertiary": isActive,
            }
          )}
        ></span>
        <span
          className={cn(
            "block w-full h-[3px] bg-white transition-opacity duration-300 ease-in-out",
            {
              "opacity-0": isActive,
            }
          )}
        ></span>
        <span
          className={cn(
            "block w-full h-[3px] bg-white transition-transform duration-300 ease-in-out",
            {
              "-translate-y-[9px] -rotate-45 group-hover:bg-quaternery":
                isActive,
            }
          )}
        ></span>
      </button>
    );
  }
);

Hamburger.displayName = "Hamburger"; // Add display name for better debugging
