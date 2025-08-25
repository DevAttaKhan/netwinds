import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCapabilityBySlug, getAllCapabilitySlugs } from "@/components/sections/portfolio/data";
import { TechnicalCapabilityPage } from "@/components/sections/portfolio/technical-capability-page";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllCapabilitySlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const capability = getCapabilityBySlug(slug);
  
  if (!capability) {
    return {
      title: "Technical Capability Not Found",
    };
  }

  return {
    title: `${capability.title} - BeetleBytes | Technical Expertise`,
    description: capability.detailedDescription,
  };
}

export default async function TechnicalCapabilityPageRoute({ params }: Props) {
  const { slug } = await params;
  const capability = getCapabilityBySlug(slug);

  if (!capability) {
    notFound();
  }

  return <TechnicalCapabilityPage capability={capability} />;
}
