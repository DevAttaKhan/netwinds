import React from "react";
import { Logo } from "../common";
import cn from "classnames";
import Link from "next/link";

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
    name: "Lets have a project",
    href: "/contact",
    className:
      "!capitalize !font-normal px-7 py-3  gradient-animation rounded-md ml-4",
  },
];

export const Header = () => {
  const navItems = NAV_ITEMS.map((el, i, arr) => (
    <Link
      key={el.id}
      href={el.href}
      className={cn("uppercase transition", el.className, {
        "hover:text-secondary": arr.length - 1 !== i,
      })}
    >
      {el.name}
    </Link>
  ));

  return (
    <header className="fixed top-0 left-0 right-0 py-5 bg-accent text-white">
      <div className="container flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-6 font-bold font-secondary">
          {navItems}
        </div>
      </div>
    </header>
  );
};
