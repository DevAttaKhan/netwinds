"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Clock, DollarSign, Monitor, Tablet, Smartphone } from "lucide-react";
import Link from "next/link";
import { DesignConcept } from "./design-concepts-data";

interface Props {
  concept: DesignConcept;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const DesignConceptPage = ({ concept }: Props) => {
  return (
    <>
      {/* Hero Section */}
      <section className={`relative min-h-[60vh] bg-gradient-to-r ${concept.color} overflow-hidden pt-20`}>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 h-[60vh] flex items-center">
          <div className="max-w-4xl">
            <Link 
              href="/portfolio" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
            
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                {concept.industry}
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                {concept.category}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {concept.title}
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-3xl">
              {concept.description}
            </p>
          </div>
        </div>
        
        {/* Floating decorative elements */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 right-10 w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-20 left-10 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm"
          style={{ animationDelay: "1s" }}
        />
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Overview */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-slate-900">Overview</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {concept.overview}
                </p>
              </motion.div>

              {/* Mockups Showcase */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-slate-900">Design Mockups</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Monitor className="w-5 h-5" />
                      <span className="font-medium">Desktop</span>
                    </div>
                    <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg border border-slate-200 flex items-center justify-center">
                      <span className="text-slate-500 text-sm">Desktop Mockup</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Tablet className="w-5 h-5" />
                      <span className="font-medium">Tablet</span>
                    </div>
                    <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg border border-slate-200 flex items-center justify-center">
                      <span className="text-slate-500 text-sm">Tablet Mockup</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Smartphone className="w-5 h-5" />
                      <span className="font-medium">Mobile</span>
                    </div>
                    <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg border border-slate-200 flex items-center justify-center">
                      <span className="text-slate-500 text-sm">Mobile Mockup</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Design Principles */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-slate-900">Design Principles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {concept.designPrinciples.map((principle, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-start gap-3 p-4 bg-gradient-to-r from-emerald-50 to-lime-50 rounded-lg border border-emerald-100"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{principle}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* User Experience */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-slate-900">User Experience</h2>
                <div className="space-y-4">
                  {concept.userExperience.map((experience, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      <span className="text-slate-700">{experience}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Technical Features */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-slate-900">Technical Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {concept.technicalFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="p-4 bg-slate-50 rounded-lg border border-slate-200"
                    >
                      <span className="text-slate-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Deliverables */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-slate-900">What You&apos;ll Get</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {concept.deliverables.map((deliverable, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-center gap-3 p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg border border-slate-200"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span className="text-slate-700">{deliverable}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-32 space-y-8">
                {/* Project Info Card */}
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white"
                >
                  <h3 className="text-xl font-bold mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-lime-400" />
                      <div>
                        <p className="text-sm text-slate-300">Timeline</p>
                        <p className="font-medium">{concept.timeline}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <DollarSign className="w-5 h-5 text-lime-400" />
                      <div>
                        <p className="text-sm text-slate-300">Investment</p>
                        <p className="font-medium">{concept.pricing}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Features Card */}
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Key Features</h3>
                  <div className="space-y-3">
                    {concept.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* CTA Card */}
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-emerald-600 to-lime-400 rounded-2xl p-6 text-white text-center"
                >
                  <h3 className="text-xl font-bold mb-3">Ready to Get Started?</h3>
                  <p className="text-emerald-50 mb-4">
                    Let&apos;s discuss how we can bring this design concept to life for your project.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-slate-50 transition-colors duration-300"
                  >
                    Start Your Project
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
