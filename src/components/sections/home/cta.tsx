"use client";
import { motion } from "framer-motion";
import { CTA } from "./data";

export const Cta = () => {
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
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
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.6, 0.8, 0.6],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary-dark to-secondary-light">
        {/* Animated radial gradients for depth */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.1)_0%,transparent_50%)]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(163,230,53,0.08)_0%,transparent_50%)]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-accent/10 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-primary/10 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-accent/8 rounded-full blur-2xl"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div 
          className="text-center max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Ready to Start Badge */}
          <motion.div
            className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30"
            variants={itemVariants}
          >
            <motion.div 
              className="w-2 h-2 bg-accent rounded-full"
              variants={pulseVariants}
              animate="animate"
            />
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Ready to Start?
            </span>
            <motion.div 
              className="w-2 h-2 bg-accent rounded-full"
              variants={pulseVariants}
              animate="animate"
              style={{ animationDelay: "2s" }}
            />
          </motion.div>

          {/* Main Headline */}
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 text-white leading-tight"
            variants={itemVariants}
          >
            <span className="text-white">Have a</span>{" "}
            <span className="text-gradient-primary">Project</span>{" "}
            <span className="text-accent">in Mind?</span>
            <br />
            <span className="text-white">Let's Create Something Amazing Together</span>
          </motion.h2>
          
          {/* Description */}
          <motion.p 
            className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-12"
            variants={itemVariants}
          >
            {CTA.description}
          </motion.p>

          {/* Feature Highlights */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-16"
            variants={itemVariants}
          >
            {[
              { icon: "🌱", text: "Free Consultation" },
              { icon: "🚀", text: "Quick Turnaround" },
              { icon: "⚡", text: "Ongoing Support" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-accent/40 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{feature.icon}</span>
                <span className="text-white font-medium text-sm">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Main CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            variants={itemVariants}
          >
            <motion.button 
              className="group relative px-12 py-5 bg-gradient-to-r from-primary to-accent text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-primary/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                Start Your Project
                <motion.svg 
                  className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </span>
            </motion.button>
            
            <motion.button 
              className="group px-12 py-5 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-xl border-2 border-white/30 hover:border-white/50 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                View My Work
                <motion.svg 
                  className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </motion.svg>
              </span>
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <p className="text-white/70 text-sm mb-8">Trusted by businesses worldwide</p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { number: "4+", label: "Years Experience" },
                { number: "100+", label: "Projects Delivered" },
                { number: "98%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2 group-hover:text-white transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-white/80 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
