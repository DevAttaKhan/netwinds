import Link from "next/link";
import { Logo } from "../common";
import { Lucide } from "../ui";

const QUICK_LINKS = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Clients", href: "/client" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const SOCIALS: Array<{
  name: string;
  href: string;
  icon: Parameters<typeof Lucide>[0]["name"];
}> = [
  { name: "GitHub", href: "https://github.com/", icon: "Github" },
  { name: "LinkedIn", href: "https://www.linkedin.com/", icon: "Linkedin" },
  { name: "Twitter", href: "https://x.com/", icon: "Twitter" },
];

export const Footer = () => {
  return (
    <footer className="bg-gradient-secondary text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="col-span-1">
            <Logo />
            <p className="mt-4 text-sm md:text-base max-w-xs opacity-90">
              Crafting performant, accessible, and beautiful web experiences.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {SOCIALS.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.name}
                  className="p-2 rounded-md transition-all duration-300 hover:bg-accent/20 hover:scale-110"
                >
                  <Lucide name={s.icon} size={20} color="#ffffff" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h6 className="font-primary font-bold text-lg mb-4 text-accent">Quick Links</h6>
            <ul className="space-y-3">
              {QUICK_LINKS.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="text-sm md:text-base opacity-90 hover:opacity-100 hover:text-accent transition-colors duration-300"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="font-primary font-bold text-lg mb-4 text-accent">Services</h6>
            <ul className="space-y-3 opacity-90">
              <li>Web Design & Development</li>
              <li>E-Commerce Solutions</li>
              <li>Custom Development</li>
            </ul>
          </div>

          <div>
            <h6 className="font-primary font-bold text-lg mb-4 text-accent">Contact</h6>
            <ul className="space-y-3 opacity-90 text-sm md:text-base">
              <li>
                <a
                  href="mailto:hello@beetlebytes.dev"
                  className="hover:text-accent transition-colors duration-300"
                >
                  hello@beetlebytes.dev
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="hover:text-accent transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li>Mon - Fri, 9:00am - 6:00pm</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs md:text-sm opacity-80">
            © {new Date().getFullYear()} BeetleBytes. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs md:text-sm opacity-80">
            <Link href="/privacy" className="hover:text-accent transition-colors duration-300">
              Privacy Policy
            </Link>
            <span className="opacity-40">|</span>
            <Link href="/terms" className="hover:text-accent transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
