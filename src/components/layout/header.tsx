"use client";

import { Logo } from "../common";
import cn from "classnames";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { Hamburger } from "../ui/hamburger";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  {
    id: "0",
    name: "Home",
    href: "/",
    className: "",
  },
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
      "text-sm xl:text-base !capitalize !font-normal px-3 py-2 md:px-5 md:py-2 gradient-animation rounded-md ml-4",
  },
];

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Function to handle outside click
  const handleOutsideClick = (e: MouseEvent) => {
    if (
      navRef.current &&
      !navRef.current.contains(e.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(e.target as Node)
    ) {
      setIsNavOpen(false);
    }
  };

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

  const navItems = NAV_ITEMS.map((item, index, arr) => {
    const isCta = arr.length - 1 === index;
    const active = isActive(item.href);

    return (
      <Link
        key={item.id}
        href={item.href}
        className={cn(
          "uppercase text-sm xl:text-base transition",
          item.className,
          {
            "hover:text-secondary": !isCta,
            "text-secondary": active && !isCta,
          }
        )}
        aria-current={active ? "page" : undefined}
        onClick={() => setIsNavOpen(false)}
      >
        {item.name}
      </Link>
    );
  });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-2 md:py-4 bg-accent text-white shadow-lg">
      <div className="container flex items-center justify-between">
        <Logo />
        <div
          ref={navRef}
          className={cn(
            "flex flex-col md:flex-row items-center justify-center gap-6 font-bold font-secondary z-50 fixed top-12 right-0 max-w-[350px] w-full h-screen md:h-auto md:static md:max-w-none md:w-auto bg-accent transition-transform duration-300",
            {
              "translate-x-0": isNavOpen,
              "translate-x-full md:translate-x-0": !isNavOpen,
            }
          )}
        >
          {navItems}
        </div>
        <Hamburger
          isActive={isNavOpen}
          ref={buttonRef}
          className="block md:hidden z-50"
          onClick={toggleNav}
        />
      </div>
    </header>
  );
};
