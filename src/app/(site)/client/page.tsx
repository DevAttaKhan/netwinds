import { Metadata } from "next";
import {
  ClientsHero,
  WhyNewAgency,
  TeamExpertise,
  ClientTypes,
  ClientsCTA
} from "@/components/sections/clients";

export const metadata: Metadata = {
  title: "Clients - BeetleBytes | Be Our First Success Story",
  description: "Ready to be our first success story? As a new agency, we bring fresh energy, innovative thinking, and a hunger to prove ourselves. Perfect for startups, small businesses, and ambitious teams.",
};

export default function ClientsPage() {
  return (
    <>
      <ClientsHero />
      <WhyNewAgency />
      <TeamExpertise />
      <ClientTypes />
      <ClientsCTA />
    </>
  );
}
