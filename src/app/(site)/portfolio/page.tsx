import { Metadata } from "next";
import {
  PortfolioHero,
  DesignConcepts,
  TechnicalShowcase,
  PortfolioCTA
} from "@/components/sections/portfolio";

export const metadata: Metadata = {
  title: "Portfolio - BeetleBytes | Showcasing Our Potential & Capabilities",
  description: "Explore our design concepts, technical capabilities, and creative potential. While we're building our client portfolio, discover what we can create for your next digital project.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <DesignConcepts />
      <TechnicalShowcase />
      <PortfolioCTA />
    </>
  );
}
