"use client";
import React from "react";
import { motion } from "framer-motion";
import { SERVICES } from "./data";
import { ServiceCard } from "@/components/common";

export const Services = () => {
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="section-padding bg-gradient-to-br from-white via-neutral/30 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary/10 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-light/10 rounded-full blur-2xl"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-gradient-primary/10 rounded-full border border-primary/20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Our Expertise
            </span>
            <div className="w-2 h-2 bg-accent rounded-full"></div>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-gradient-primary">Services</span> That
            <br />
            <span className="text-secondary">Transform</span> Ideas
          </motion.h2>
          
          <motion.p 
            className="text-xl text-secondary-light leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {SERVICES.subheading}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SERVICES.cards.map((service, index) => (
            <motion.div 
              key={service.id} 
              variants={itemVariants}
              className="group"
            >
              <ServiceCard data={service} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-4">
            <button className="btn-primary text-lg px-8 py-4">
              Explore All Services
            </button>
            <div className="hidden md:flex items-center gap-2 text-secondary-light">
              <span className="text-sm">or</span>
              <button className="text-primary hover:text-primary-dark font-semibold transition-colors duration-300 underline underline-offset-4">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
