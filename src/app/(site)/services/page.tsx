import { 
  ServicesHero, 
  ServicesOverview, 
  TechStack, 
  Process, 
  ServicesCTA 
} from "@/components/sections/services";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesOverview />
      <TechStack />
      <Process />
      <ServicesCTA />
    </>
  );
}
