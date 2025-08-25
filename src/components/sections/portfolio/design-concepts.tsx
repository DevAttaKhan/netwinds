"use client";
import { motion } from "framer-motion";
import { 
  Palette, 
  Smartphone, 
  Monitor, 
  Tablet, 
  Eye,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { DESIGN_CONCEPTS } from "./design-concepts-data";

const DEVICE_MOCKUPS = [
  { name: "Desktop", icon: Monitor, size: "w-16 h-16" },
  { name: "Tablet", icon: Tablet, size: "w-14 h-14" },
  { name: "Mobile", icon: Smartphone, size: "w-12 h-12" }
];

export const DesignConcepts = () => {
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
    <section className="section-padding bg-gradient-to-br from-white via-neutral/10 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-primary/5 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-20 w-24 h-24 bg-accent/5 rounded-full blur-3xl"
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
          <span className="inline-block px-4 py-2 bg-gradient-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20 mb-6">
            Design Concepts
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
            <span className="text-gradient-primary">Visual</span> Design Concepts
          </h2>
          <p className="text-lg sm:text-xl text-secondary-light leading-relaxed max-w-3xl mx-auto">
            Explore our design thinking and visual concepts that demonstrate our creative approach 
            and understanding of modern user experience principles.
          </p>
        </motion.div>

        {/* Device Mockup Showcase */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-secondary mb-8">
            Multi-Device Design Approach
          </h3>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
            {DEVICE_MOCKUPS.map((device, index) => (
              <motion.div
                key={device.name}
                className="flex flex-col items-center gap-4 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`${device.size} bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <device.icon className="w-1/2 h-1/2 text-white" />
                </div>
                <span className="text-secondary font-medium">{device.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Design Concepts Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {DESIGN_CONCEPTS.map((concept) => (
            <motion.div
              key={concept.id}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-neutral/20 hover:border-primary/30 overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Mockup Placeholder */}
              <div className={`w-full h-48 bg-gradient-to-r ${concept.color} rounded-xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 text-center">
                  <Eye className="w-12 h-12 text-white mx-auto mb-3" />
                  <p className="text-white font-semibold text-sm">{concept.title}</p>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-white/20 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/30 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-white/20 rounded-full"></div>
              </div>

              {/* Category Badge */}
              <span className="inline-block px-3 py-1 bg-gradient-primary/10 rounded-full text-xs font-medium text-primary border border-primary/20 mb-4">
                {concept.category}
              </span>

              {/* Content */}
              <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                {concept.title}
              </h3>
              <p className="text-secondary-light leading-relaxed mb-6">
                {concept.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {concept.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center gap-2 text-secondary-light text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* View Concept Button */}
                          <Link
              href={`/portfolio/design/${concept.slug}`}
              className="w-full group/btn flex items-center justify-center gap-2 px-4 py-2 bg-gradient-primary/10 text-primary font-medium rounded-lg border border-primary/20 hover:bg-gradient-primary hover:text-white transition-all duration-300"
            >
              <span>View Concept</span>
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
                Start Your Design Project
                <Palette className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </span>
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Schedule Design Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
