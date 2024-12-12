import React from "react";
import { Logo } from "../common";
import cn from "classnames";
import Link from "next/link";
import { Lucide } from "../ui";
import { MenuIcon } from "@/assets/icons";

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
      "text-sm lg:text-base !capitalize !font-normal px-5 py-2 md:px-7 md:py-3  gradient-animation rounded-md ml-4",
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
    <header className="fixed top-0 left-0 right-0 z-10 py-3 md:py-5 bg-accent text-white">
      <div className="container flex items-center justify-between">
        <Logo />
        <div className="  flex flex-col md:flex-row  items-center justify-center gap-6 font-bold font-secondary z-50 fixed   max-w-[350px] w-full h-screen md:h-auto top-0 right-0 md:static md:max-w-none md:w-auto translate-x-full md:translate-x-0  bg-accent">
          {navItems}
        </div>
        <button className="block md:hidden">
          <MenuIcon width={24} height={25} />
        </button>
      </div>
    </header>
  );
};
