"use client";
import { motion } from "framer-motion";
import { 
  Code2, 
  Zap, 
  Database, 
  Smartphone, 
  Cloud,
  ArrowRight,
  CheckCircle2,
  Star
} from "lucide-react";
import Link from "next/link";

const TECHNICAL_CAPABILITIES = [
  {
    id: 1,
    slug: "frontend-development",
    title: "Frontend Development",
    description: "Modern, responsive web applications built with cutting-edge technologies.",
    icon: Code2,
    color: "from-blue-500 to-cyan-400",
    technologies: ["React 18", "Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
    codeExample: "const App = () => {\n  return <div>Hello World</div>;\n};",
    features: ["Component-based architecture", "State management", "Performance optimization", "Accessibility"]
  },
  {
    id: 2,
    slug: "backend-apis",
    title: "Backend & APIs",
    description: "Scalable server-side solutions with robust data management.",
    icon: Database,
    color: "from-emerald-500 to-green-400",
    technologies: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"],
    codeExample: "app.get('/api/users', (req, res) => {\n  res.json(users);\n});",
    features: ["RESTful APIs", "Database design", "Authentication", "Security"]
  },
  {
    id: 3,
    slug: "mobile-solutions",
    title: "Mobile Solutions",
    description: "Cross-platform mobile applications and progressive web apps.",
    icon: Smartphone,
    color: "from-orange-500 to-red-400",
    technologies: ["React Native", "PWA", "Mobile-first design", "Performance"],
    codeExample: "const MobileApp = () => {\n  return <View><Text>Mobile</Text></View>;\n};",
    features: ["Native performance", "Offline support", "Push notifications", "App store deployment"]
  },
  {
    id: 4,
    slug: "performance-seo",
    title: "Performance & SEO",
    description: "Lightning-fast websites optimized for search engines and user experience.",
    icon: Zap,
    color: "from-yellow-500 to-orange-400",
    technologies: ["Core Web Vitals", "Lighthouse", "SEO", "CDN", "Caching"],
    codeExample: "export const metadata = {\n  title: 'Optimized Page',\n  description: 'Fast & SEO-friendly'\n};",
    features: ["Page speed optimization", "SEO best practices", "Performance monitoring", "User experience"]
  },
  {
    id: 5,
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    description: "Reliable deployment and hosting with continuous integration.",
    icon: Cloud,
    color: "from-purple-500 to-pink-400",
    technologies: ["AWS", "Vercel", "Docker", "CI/CD", "Monitoring"],
    codeExample: "version: '3.8'\nservices:\n  web:\n    build: .\n    ports:\n      - '3000:3000'",
    features: ["Cloud deployment", "Automated testing", "Continuous deployment", "Monitoring & alerts"]
  }
];

const PERFORMANCE_METRICS = [
  { metric: "Page Load", value: "< 2s", icon: Zap, color: "text-green-500" },
  { metric: "Core Web Vitals", value: "100/100", icon: Star, color: "text-blue-500" },
  { metric: "SEO Score", value: "95+", icon: CheckCircle2, color: "text-purple-500" },
  { metric: "Mobile Score", value: "98+", icon: Smartphone, color: "text-orange-500" }
];

export const TechnicalShowcase = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="section-padding bg-gradient-secondary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-primary/5 rounded-full blur-3xl"
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-accent/5 rounded-full blur-3xl"
          animate={{
            y: [15, -15, 15],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-gradient-primary/10 rounded-full text-sm font-medium text-accent border border-primary/20 mb-6">
            Technical Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            <span className="text-gradient-primary">Code</span> & Capabilities
          </h2>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Explore our technical expertise through code examples, architecture patterns, 
            and performance metrics that demonstrate our development capabilities.
          </p>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {PERFORMANCE_METRICS.map((metric, index) => (
            <motion.div
              key={metric.metric}
              className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <metric.icon className={`w-8 h-8 ${metric.color} mx-auto mb-3`} />
              <h3 className="text-white font-bold text-lg mb-2">{metric.metric}</h3>
              <p className="text-accent font-semibold text-2xl">{metric.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Capabilities Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {TECHNICAL_CAPABILITIES.map((capability) => (
            <motion.div
              key={capability.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-primary/30 transition-all duration-500 transform hover:-translate-y-2"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${capability.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                    {capability.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {capability.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-xs border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Code Example */}
              <div className="bg-secondary/20 rounded-xl p-4 mb-6 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/60 text-xs font-mono">Code Example</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <pre className="text-white/90 text-sm font-mono overflow-x-auto">
                  <code>{capability.codeExample}</code>
                </pre>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {capability.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center gap-2 text-white/70 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="w-3 h-3 text-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Learn More Button */}
              <Link 
                href={`/portfolio/technical/${capability.slug}`}
                className="w-full group/btn flex items-center justify-center gap-2 px-4 py-2 bg-white/10 text-white font-medium rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Link>

              {/* Hover Effect Border */}
              <div className="absolute -z-10 inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12 sm:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="btn-primary text-lg px-8 py-4 group">
              <span className="flex items-center gap-2">
                Start Your Technical Project
                <Code2 className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </span>
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Technical Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
