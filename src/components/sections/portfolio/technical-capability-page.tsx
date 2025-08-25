"use client";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Code2, 
  CheckCircle2, 
  Star,
  Zap,
  Database,
  Smartphone,
  Cloud,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import Link from "next/link";

interface Technology {
  name: string;
  description: string;
  features: string[];
}

interface CodeExample {
  title: string;
  description: string;
  code: string;
}

interface Capability {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  technologies: Technology[];
  codeExample: string;
  features: string[];
  detailedDescription: string;
  benefits: string[];
  useCases: string[];
  codeExamples: CodeExample[];
}

interface Props {
  capability: Capability;
}

const getIconComponent = (iconName: string) => {
  const iconMap = {
    Code2,
    Database,
    Smartphone,
    Zap,
    Cloud
  };
  return iconMap[iconName as keyof typeof iconMap] || Code2;
};

export const TechnicalCapabilityPage = ({ capability }: Props) => {
  const IconComponent = getIconComponent(capability.icon);

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
    <>
      {/* Hero Section */}
      <section className={`relative min-h-[60vh] bg-gradient-to-r ${capability.color} overflow-hidden pt-20`}>
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 h-[60vh] flex items-center">
          <div className="max-w-4xl">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Link 
                href="/portfolio"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Link>
            </motion.div>

            {/* Icon and Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-6 mb-6"
            >
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <IconComponent className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {capability.title}
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-3xl"
            >
              {capability.detailedDescription}
            </motion.p>

            {/* Quick Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              {capability.features.map((feature, index) => (
                <span
                  key={feature}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm border border-white/30"
                >
                  {feature}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-gradient-to-br from-white via-neutral/10 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              
              {/* Benefits Section */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold text-secondary mb-8">
                  Why Choose Our {capability.title}?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {capability.benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      variants={itemVariants}
                      className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-neutral/100"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-secondary leading-relaxed">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Use Cases Section */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold text-secondary mb-8">
                  Perfect For
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {capability.useCases.map((useCase, index) => (
                    <motion.div
                      key={useCase}
                      variants={itemVariants}
                      className="flex items-center gap-3 p-4 bg-gradient-primary/5 rounded-xl border border-primary/20"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-secondary leading-relaxed">{useCase}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Code Examples Section */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold text-secondary mb-8">
                  Code Examples
                </h2>
                <div className="space-y-8">
                  {capability.codeExamples.map((example, index) => (
                    <motion.div
                      key={example.title}
                      variants={itemVariants}
                      className="bg-secondary rounded-xl p-6 border border-neutral/200"
                    >
                      <h3 className="text-xl font-bold text-white mb-2">
                        {example.title}
                      </h3>
                      <p className="text-white/80 mb-4">
                        {example.description}
                      </p>
                      <div className="bg-secondary/50 rounded-lg p-4 border border-white/10">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-white/60 text-sm font-mono">Code</span>
                          <div className="flex gap-1">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                        </div>
                        <pre className="text-white/90 text-sm font-mono overflow-x-auto">
                          <code>{example.code}</code>
                        </pre>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center bg-gradient-primary/5 rounded-2xl p-8 border border-primary/20"
              >
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-secondary-light mb-6 max-w-2xl mx-auto">
                  Let&apos;s discuss your {capability.title.toLowerCase()} needs and create something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="btn-primary text-lg px-8 py-4 group"
                  >
                    <span className="flex items-center gap-2">
                      Start Your Project
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-secondary text-lg px-8 py-4"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              
              {/* Technologies Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="sticky top-32"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral/200">
                  <h3 className="text-xl font-bold text-secondary mb-6">
                    Technologies We Use
                  </h3>
                  <div className="space-y-4">
                    {capability.technologies.map((tech) => (
                      <div key={tech.name} className="p-4 bg-neutral/50 rounded-lg">
                        <h4 className="font-semibold text-secondary mb-2">
                          {tech.name}
                        </h4>
                        <p className="text-secondary-light text-sm mb-3">
                          {tech.description}
                        </p>
                        <div className="space-y-1">
                          {tech.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2 text-secondary-light text-xs">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="mt-6 bg-gradient-primary/5 rounded-2xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold text-secondary mb-4">
                    Why Choose Us?
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-secondary">
                      <Star className="w-5 h-5 text-primary" />
                      <span className="text-sm">Proven expertise</span>
                    </div>
                    <div className="flex items-center gap-3 text-secondary">
                      <Zap className="w-5 h-5 text-primary" />
                      <span className="text-sm">Fast delivery</span>
                    </div>
                    <div className="flex items-center gap-3 text-secondary">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-sm">Quality guaranteed</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
