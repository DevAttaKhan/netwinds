import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDesignConceptBySlug, getAllDesignConceptSlugs } from "@/components/sections/portfolio/design-concepts-data";
import { DesignConceptPage } from "@/components/sections/portfolio/design-concept-page";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllDesignConceptSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const concept = getDesignConceptBySlug(slug);
  
  if (!concept) {
    return {
      title: "Design Concept Not Found",
      description: "The requested design concept could not be found.",
    };
  }

  return {
    title: `${concept.title} - Design Concept | BeetleBytes`,
    description: concept.description,
    keywords: [concept.industry, concept.category, "design", "UI/UX", "BeetleBytes"],
  };
}

export default async function DesignConceptPageRoute({ params }: Props) {
  const { slug } = await params;
  const concept = getDesignConceptBySlug(slug);
  
  if (!concept) {
    notFound();
  }

  return <DesignConceptPage concept={concept} />;
}
