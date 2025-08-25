"use client";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Users, 
  Handshake, 
  ArrowRight,
  CheckCircle2,
  Star
} from "lucide-react";

const TRUST_INDICATORS = [
  "Free initial consultation",
  "Transparent pricing",
  "No long-term contracts",
  "Personal project manager",
  "Ongoing support included"
];

const NEXT_STEPS = [
  {
    step: "01",
    title: "Free Consultation",
    description: "We&apos;ll discuss your project, goals, and how we can help you succeed."
  },
  {
    step: "02",
    title: "Project Planning",
    description: "We&apos;ll create a detailed plan tailored to your specific needs and budget."
  },
  {
    step: "03",
    title: "Development & Launch",
    description: "We&apos;ll build your project with regular updates and launch it successfully."
  }
];

export const ClientsCTA = () => {
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
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-56 h-56 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        {/* Geometric Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-3">
          <div className="absolute top-32 left-10 w-1 h-24 bg-gradient-primary transform rotate-45"></div>
          <div className="absolute top-64 right-20 w-1 h-16 bg-accent transform -rotate-12"></div>
          <div className="absolute bottom-32 left-1/4 w-0.5 h-12 bg-primary-light transform rotate-90"></div>
        </div>
      </div>

      <div className="container relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="w-3 h-3 text-accent" />
              <span className="text-xs font-medium text-white/90 uppercase tracking-wider">
                Ready to Start?
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Be Our <span className="text-gradient-primary">First</span> Success Story
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Take a chance on something different. We&apos;re not just another agency — 
              we&apos;re a team that&apos;s hungry to prove ourselves and make you our 
              first amazing success story.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              className="space-y-3 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {TRUST_INDICATORS.map((indicator, index) => (
                <motion.div
                  key={indicator}
                  className="flex items-center gap-3 text-white/90"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-base sm:text-lg">{indicator}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <button className="group relative px-6 py-3 bg-gradient-primary text-white font-semibold rounded-lg shadow-xl hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <span className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-primary rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
              </button>
              
              <button className="group px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <span className="flex items-center gap-2">
                  Schedule Consultation
                  <Handshake className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Next Steps */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="text-center mb-8">
                <Users className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  How We&apos;ll Work Together
                </h3>
                <p className="text-white/80 text-lg">
                  A simple, transparent process designed for your success
                </p>
              </div>

              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {NEXT_STEPS.map((step, index) => (
                  <motion.div
                    key={step.step}
                    className="flex items-start gap-4"
                    variants={itemVariants}
                  >
                    {/* Step Number */}
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>

                    {/* Content */}
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {step.title}
                      </h4>
                      <p className="text-white/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Special Offer */}
              <motion.div
                className="mt-8 p-6 bg-gradient-primary/10 rounded-2xl border border-primary/20 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Star className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white mb-2">
                  Special Launch Offer
                </h4>
                <p className="text-white/80 text-sm">
                  As our first clients, you&apos;ll receive exclusive benefits and 
                  priority support throughout your project.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
