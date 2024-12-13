"use client";

import { Logo } from "../common";
import cn from "classnames";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { Hamburger } from "../ui/hamburger";

const NAV_ITEMS = [
  {
    id: "1",
    name: "About",
    href: "/about",
    className: "",
  },
  {
    id: "2",
    name: "Services",
    href: "/services",
    className: "",
  },
  {
    id: "3",
    name: "Clients",
    href: "/client",
    className: "",
  },
  {
    id: "4",
    name: "Portfolio",
    href: "/portfolio",
    className: "",
  },
  {
    id: "5",
    name: "Let's have a project",
    href: "/contact",
    className:
      "text-sm lg:text-base !capitalize !font-normal px-5 py-2 md:px-7 md:py-3 gradient-animation rounded-md ml-4",
  },
];

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Function to handle outside click
  const handleOutsideClick = (e: MouseEvent) => {
    // Check if the click is outside both the nav menu and the menu button
    if (
      navRef.current &&
      !navRef.current.contains(e.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(e.target as Node)
    ) {
      setIsNavOpen(false);
    }
  };

  // Attach and detach outside click listener
  useEffect(() => {
    if (isNavOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isNavOpen]);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const navItems = NAV_ITEMS.map((item, index, arr) => (
    <Link
      key={item.id}
      href={item.href}
      className={cn("uppercase transition", item.className, {
        "hover:text-secondary": arr.length - 1 !== index,
      })}
      onClick={() => setIsNavOpen(false)} // Close menu on link click
    >
      {item.name}
    </Link>
  ));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 md:py-5 bg-accent text-white shadow-lg">
      <div className="container flex items-center justify-between">
        <Logo />
        <div
          ref={navRef}
          className={cn(
            "flex flex-col md:flex-row items-center justify-center gap-6 font-bold font-secondary z-50 fixed top-0 right-0 max-w-[350px] w-full h-screen md:h-auto md:static md:max-w-none md:w-auto bg-accent transition-transform duration-300",
            {
              "translate-x-0": isNavOpen,
              "translate-x-full md:translate-x-0": !isNavOpen,
            }
          )}
        >
          {navItems}
        </div>
        {/* <button aria-label="Toggle navigation menu"> */}
        {/* <MenuIcon width={24} height={25} /> */}
        <Hamburger
          isActive={isNavOpen}
          ref={buttonRef}
          className="block md:hidden z-50"
          onClick={toggleNav}
        />
        {/* </button> */}
      </div>
    </header>
  );
};
