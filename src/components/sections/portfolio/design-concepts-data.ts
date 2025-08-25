export interface DesignConcept {
  id: number;
  slug: string;
  title: string;
  description: string;
  industry: string;
  category: string;
  color: string;
  features: string[];
  mockups: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  overview: string;
  designPrinciples: string[];
  userExperience: string[];
  technicalFeatures: string[];
  deliverables: string[];
  timeline: string;
  pricing: string;
}

export const DESIGN_CONCEPTS: DesignConcept[] = [
  {
    id: 1,
    slug: "modern-ecommerce",
    title: "Modern E-commerce Platform",
    description: "A sleek, conversion-focused online shopping experience",
    industry: "E-commerce",
    category: "Web Application",
    color: "from-purple-500 to-pink-500",
    features: [
      "Advanced product filtering",
      "One-click checkout",
      "Personalized recommendations",
      "Mobile-first design",
      "Dark/Light mode toggle"
    ],
    mockups: {
      desktop: "/api/placeholder/1200/800",
      tablet: "/api/placeholder/768/1024",
      mobile: "/api/placeholder/375/812"
    },
    overview: "A modern e-commerce platform designed to maximize conversions while providing an exceptional user experience. Features include advanced product filtering, personalized recommendations, and a streamlined checkout process.",
    designPrinciples: [
      "Conversion-focused design",
      "Accessibility compliance",
      "Mobile-first approach",
      "Visual hierarchy optimization",
      "Performance-driven aesthetics"
    ],
    userExperience: [
      "Intuitive navigation",
      "Fast loading times",
      "Seamless mobile experience",
      "Clear call-to-actions",
      "Trust-building elements"
    ],
    technicalFeatures: [
      "Responsive design system",
      "Progressive Web App capabilities",
      "SEO optimization",
      "Performance monitoring",
      "Analytics integration"
    ],
    deliverables: [
      "Complete UI/UX design",
      "Responsive mockups",
      "Design system documentation",
      "Interactive prototypes",
      "Development handoff files"
    ],
    timeline: "4-6 weeks",
    pricing: "Starting from $8,500"
  },
  {
    id: 2,
    slug: "corporate-website",
    title: "Corporate Website Redesign",
    description: "Professional and trustworthy company presence",
    industry: "Corporate",
    category: "Website",
    color: "from-blue-600 to-cyan-500",
    features: [
      "Modern hero section",
      "Company timeline",
      "Team showcase",
      "Service highlights",
      "Contact forms"
    ],
    mockups: {
      desktop: "/api/placeholder/1200/800",
      tablet: "/api/placeholder/768/1024",
      mobile: "/api/placeholder/375/812"
    },
    overview: "A professional corporate website that builds trust and credibility while effectively communicating your company's mission, values, and services. Designed to convert visitors into clients.",
    designPrinciples: [
      "Professional aesthetics",
      "Clear information hierarchy",
      "Trust-building design",
      "Brand consistency",
      "User engagement focus"
    ],
    userExperience: [
      "Easy navigation",
      "Clear value proposition",
      "Professional appearance",
      "Fast information access",
      "Contact accessibility"
    ],
    technicalFeatures: [
      "Content management system",
      "SEO optimization",
      "Performance optimization",
      "Security features",
      "Analytics dashboard"
    ],
    deliverables: [
      "Complete website design",
      "Content strategy",
      "SEO optimization",
      "Performance optimization",
      "Training and support"
    ],
    timeline: "3-5 weeks",
    pricing: "Starting from $6,500"
  },
  {
    id: 3,
    slug: "mobile-app",
    title: "Mobile App Interface",
    description: "Intuitive and engaging mobile experience",
    industry: "Technology",
    category: "Mobile App",
    color: "from-green-500 to-emerald-500",
    features: [
      "Gesture navigation",
      "Offline functionality",
      "Push notifications",
      "Social integration",
      "Biometric authentication"
    ],
    mockups: {
      desktop: "/api/placeholder/1200/800",
      tablet: "/api/placeholder/768/1024",
      mobile: "/api/placeholder/375/812"
    },
    overview: "A modern mobile app interface that prioritizes user experience and engagement. Features intuitive navigation, smooth animations, and a design that feels native to both iOS and Android platforms.",
    designPrinciples: [
      "Mobile-first design",
      "Gesture-friendly interface",
      "Accessibility compliance",
      "Performance optimization",
      "Platform consistency"
    ],
    userExperience: [
      "Intuitive navigation",
      "Fast response times",
      "Smooth animations",
      "Clear feedback",
      "Easy onboarding"
    ],
    technicalFeatures: [
      "Cross-platform design",
      "Responsive layouts",
      "Animation systems",
      "Icon libraries",
      "Design tokens"
    ],
    deliverables: [
      "App interface design",
      "Interactive prototypes",
      "Design system",
      "Icon sets",
      "Development specifications"
    ],
    timeline: "5-7 weeks",
    pricing: "Starting from $9,500"
  },
  {
    id: 4,
    slug: "dashboard-design",
    title: "Analytics Dashboard",
    description: "Data-driven insights with beautiful visualization",
    industry: "SaaS",
    category: "Web Application",
    color: "from-orange-500 to-red-500",
    features: [
      "Real-time data display",
      "Interactive charts",
      "Customizable widgets",
      "Dark/Light themes",
      "Export functionality"
    ],
    mockups: {
      desktop: "/api/placeholder/1200/800",
      tablet: "/api/placeholder/768/1024",
      mobile: "/api/placeholder/375/812"
    },
    overview: "A powerful analytics dashboard that transforms complex data into actionable insights. Features interactive visualizations, customizable layouts, and a design that makes data exploration intuitive and engaging.",
    designPrinciples: [
      "Data clarity",
      "Visual hierarchy",
      "Interactive elements",
      "Performance focus",
      "Accessibility compliance"
    ],
    userExperience: [
      "Easy data interpretation",
      "Quick insights access",
      "Customizable views",
      "Responsive design",
      "Intuitive controls"
    ],
    technicalFeatures: [
      "Chart libraries",
      "Real-time updates",
      "Responsive grids",
      "Theme system",
      "Export capabilities"
    ],
    deliverables: [
      "Dashboard design",
      "Data visualization",
      "Interactive prototypes",
      "Component library",
      "Implementation guide"
    ],
    timeline: "6-8 weeks",
    pricing: "Starting from $10,500"
  },
  {
    id: 5,
    slug: "landing-page",
    title: "Conversion Landing Page",
    description: "High-converting single-page experience",
    industry: "Marketing",
    category: "Landing Page",
    color: "from-indigo-500 to-purple-500",
    features: [
      "Compelling headlines",
      "Social proof",
      "Clear CTAs",
      "Lead capture forms",
      "A/B testing ready"
    ],
    mockups: {
      desktop: "/api/placeholder/1200/800",
      tablet: "/api/placeholder/768/1024",
      mobile: "/api/placeholder/375/812"
    },
    overview: "A high-converting landing page designed to capture leads and drive conversions. Features compelling copy, strategic CTAs, and a design that guides visitors toward taking action.",
    designPrinciples: [
      "Conversion optimization",
      "Clear value proposition",
      "Trust building",
      "Action-oriented design",
      "Performance focus"
    ],
    userExperience: [
      "Clear messaging",
      "Easy navigation",
      "Fast loading",
      "Mobile optimization",
      "Clear next steps"
    ],
    technicalFeatures: [
      "Responsive design",
      "Form optimization",
      "Analytics integration",
      "A/B testing setup",
      "Performance optimization"
    ],
    deliverables: [
      "Landing page design",
      "Copywriting",
      "Conversion optimization",
      "A/B testing setup",
      "Performance optimization"
    ],
    timeline: "2-3 weeks",
    pricing: "Starting from $4,500"
  },
  {
    id: 6,
    slug: "portfolio-showcase",
    title: "Creative Portfolio",
    description: "Showcase your work with style",
    industry: "Creative",
    category: "Portfolio",
    color: "from-pink-500 to-rose-500",
    features: [
      "Project galleries",
      "Case studies",
      "Client testimonials",
      "Contact integration",
      "Social media links"
    ],
    mockups: {
      desktop: "/api/placeholder/1200/800",
      tablet: "/api/placeholder/768/1024",
      mobile: "/api/placeholder/375/812"
    },
    overview: "A creative portfolio website that showcases your work in the best possible light. Features beautiful project galleries, detailed case studies, and a design that reflects your creative vision.",
    designPrinciples: [
      "Creative expression",
      "Visual storytelling",
      "Project showcase",
      "Brand personality",
      "User engagement"
    ],
    userExperience: [
      "Easy project browsing",
      "Detailed case studies",
      "Contact accessibility",
      "Mobile optimization",
      "Fast navigation"
    ],
    technicalFeatures: [
      "Image optimization",
      "Lazy loading",
      "Smooth animations",
      "Contact forms",
      "Social integration"
    ],
    deliverables: [
      "Portfolio design",
      "Project layouts",
      "Case study templates",
      "Contact forms",
      "Content strategy"
    ],
    timeline: "3-4 weeks",
    pricing: "Starting from $5,500"
  }
];

export const getDesignConceptBySlug = (slug: string): DesignConcept | undefined => {
  return DESIGN_CONCEPTS.find(concept => concept.slug === slug);
};

export const getAllDesignConceptSlugs = (): string[] => {
  return DESIGN_CONCEPTS.map(concept => concept.slug);
};
