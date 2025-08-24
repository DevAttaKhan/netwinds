"use client";
import { motion } from "framer-motion";
import { WHY_US } from "./data";

export const WhyUs = () => {
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
      y: [-15, 15, -15],
      rotate: [0, 3, 0],
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
      {/* Clean dark background with subtle animated radial gradient */}
      <div className="absolute inset-0 bg-gradient-secondary">
        {/* Animated radial gradient with lighter versions of the same dark colors */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,41,59,0.3)_0%,transparent_50%)]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(30,41,59,0.2)_0%,transparent_50%)]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(51,65,85,0.15)_0%,transparent_70%)]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      {/* Simple floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-24 h-24 bg-white/5 rounded-full blur-2xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/5 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-5xl mx-auto mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="w-3 h-3 bg-accent rounded-full"
              variants={pulseVariants}
              animate="animate"
            />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">
              Why Choose Us
            </span>
            <motion.div 
              className="w-3 h-3 bg-accent rounded-full"
              variants={pulseVariants}
              animate="animate"
              style={{ animationDelay: "2s" }}
            />
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-gradient-primary">Trusted</span> by
            <br />
            <span className="text-accent">Innovative</span> Businesses
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {WHY_US.subheading}
          </motion.p>
        </motion.div>

        {/* Features Grid with Enhanced Layout */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {WHY_US.features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="group relative"
              variants={itemVariants}
            >
              {/* Card with clean styling */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-accent/30 transition-all duration-500 group-hover:scale-105 shadow-xl hover:shadow-2xl">
                {/* Content */}
                <div className="relative z-10 flex items-start gap-6">
                  {/* Icon container */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <feature.Icon className="text-white w-8 h-8" />
                    </div>
                    
                    {/* Decorative elements */}
                    <motion.div 
                      className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-primary-light rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Text content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed text-base group-hover:text-white/90 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
              </div>
              
              {/* Connection line for visual flow */}
              {index < WHY_US.features.length - 1 && (
                <div className="hidden lg:block absolute top-full left-1/2 w-px h-8 bg-gradient-to-b from-accent/50 to-transparent transform -translate-x-1/2"></div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6">
            <button className="btn-accent text-lg px-8 py-4 group shadow-xl hover:shadow-2xl">
              <span className="flex items-center gap-2">
                Start Your Project
                <motion.svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </span>
            </button>
            
            <div className="flex items-center gap-4 text-white/60">
              <span className="text-sm">or</span>
              <button className="text-accent hover:text-white font-semibold transition-colors duration-300 underline underline-offset-4">
                Schedule a Free Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
