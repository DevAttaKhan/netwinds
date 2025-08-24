"use client";
import { motion } from "framer-motion";
import { WORK_PROCESS } from "./data";
import { 
  Target, 
  PencilRuler, 
  Code2, 
  TestTube, 
  Rocket, 
  RefreshCw,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export const WorkProcess = () => {
  const iconMap = {
    Target,
    PencilRuler,
    Code2,
    TestTube,
    Rocket,
    RefreshCw
  };

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

  return (
    <section className="section-padding bg-gradient-to-br from-white via-neutral/10 to-white relative overflow-hidden">
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
        {/* Two Column Layout with working sticky positioning */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Sidebar - Sticky Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:sticky lg:top-32"
          >
            <motion.div 
              className="max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-primary/10 rounded-full border border-primary/20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Our Process
                </span>
                <div className="w-2 h-2 bg-accent rounded-full"></div>
              </motion.div>

              {/* Main Heading */}
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <span className="text-gradient-primary">How We Bring</span> Your
                <br />
                <span className="text-secondary">Vision to Life</span>
              </motion.h2>
              
              {/* Subheading */}
              <motion.p 
                className="text-xl text-secondary-light leading-relaxed mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                {WORK_PROCESS.subheading}
              </motion.p>

              {/* Key Benefits */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                <div className="flex items-center gap-3 text-secondary-light">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>Proven methodology with 100+ successful projects</span>
                </div>
                <div className="flex items-center gap-3 text-secondary-light">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>Transparent communication at every step</span>
                </div>
                <div className="flex items-center gap-3 text-secondary-light">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>On-time delivery with quality assurance</span>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
              >
                <button className="btn-primary text-lg px-8 py-4 group">
                  <span className="flex items-center gap-2">
                    Let&apos;s Discuss Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Scrollable Process Cards */}
          <div className="order-2 space-y-8">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {WORK_PROCESS.steps.map((step, index) => {
                const IconComponent = iconMap[step.icon as keyof typeof iconMap];
                
                return (
                  <motion.div
                    key={step.id}
                    className="group relative"
                    variants={itemVariants}
                  >
                    {/* Process Card - Redesigned to match image */}
                    <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral/20 hover:border-primary/30 group-hover:scale-[1.02]">
                      
                      {/* Step Number Badge */}
                      <div className="absolute -top-4 left-8 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {String(step.id).padStart(2, '0')}
                      </div>
                      
                      {/* Icon positioned to the right */}
                      <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {IconComponent && (
                          <IconComponent className="w-6 h-6 text-primary" />
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="pr-20">
                        <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>
                        
                        <p className="text-secondary-light leading-relaxed mb-6">
                          {step.description}
                        </p>
                        
                        {/* Learn More Link */}
                        <div className="flex items-center gap-2 text-accent hover:text-primary font-semibold transition-colors duration-300 cursor-pointer group/link">
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                      
                      {/* Hover Accent Line */}
                      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      
                      {/* Corner Accent */}
                      <div className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
                    </div>
                    
                    {/* Connection Arrow (except for last item) */}
                    {index < WORK_PROCESS.steps.length - 1 && (
                      <div className="flex justify-center mt-6">
                        <motion.div
                          className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white shadow-lg"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
