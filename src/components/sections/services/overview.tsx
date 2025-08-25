"use client";
import { motion } from "framer-motion";
import { ServiceCard } from "@/components/common";
import { SERVICES } from "@/components/sections/home/data";

export const ServicesOverview = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
        <motion.div
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-gradient-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20 mb-6">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
            Comprehensive <span className="text-gradient-primary">Digital Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-secondary-light leading-relaxed max-w-3xl mx-auto">
            {SERVICES.subheading}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SERVICES.cards.map((card, index) => (
            <motion.div
              key={card.id}
              variants={itemVariants}
              className="group"
            >
              <ServiceCard data={card} index={index} />
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
                Start Your Project
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Schedule a Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
