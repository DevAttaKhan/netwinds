"use client";
import { motion } from "framer-motion";
import { PROJECTS } from "./data";
import { ProjectCard } from "@/components/common/project-card";

export const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
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

  return (
    <section className="section-padding bg-gradient-to-br from-white via-neutral/20 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-primary/5 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-accent/5 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-light/5 rounded-full blur-2xl"
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
            className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-gradient-primary/10 rounded-full border border-primary/20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Our Portfolio
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
            <span className="text-gradient-primary">Projects</span> That
            <br />
            <span className="text-secondary">Inspire</span> & Deliver
          </motion.h2>
          
          <motion.p 
            className="text-xl text-secondary-light leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {PROJECTS.subheading}
          </motion.p>
        </motion.div>

        {/* Projects Grid with Enhanced Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {PROJECTS.projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              variants={itemVariants}
              className="group"
            >
              <ProjectCard data={project} index={index} />
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
          <div className="inline-flex flex-col sm:flex-row items-center gap-6">
            <button className="btn-primary text-lg px-8 py-4 group">
              <span className="flex items-center gap-2">
                View All Projects
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
            
            <div className="flex items-center gap-4 text-secondary-light">
              <span className="text-sm">or</span>
              <button className="text-primary hover:text-primary-dark font-semibold transition-colors duration-300 underline underline-offset-4">
                Start Your Project
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
