"use client";
import { motion } from "framer-motion";
import { 
  Search, 
  Palette, 
  Code2, 
  TestTube, 
  Rocket, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const PROCESS_STEPS = [
  {
    id: 1,
    title: "Discovery & Research",
    description: "We dive deep into understanding your business, goals, target audience, and market landscape to create a solid foundation.",
    icon: Search,
    color: "from-blue-500 to-cyan-400",
    features: ["Business Analysis", "User Research", "Competitor Analysis", "Requirements Gathering"]
  },
  {
    id: 2,
    title: "Design & Strategy",
    description: "Our creative team crafts stunning designs and user experiences that align with your brand and business objectives.",
    icon: Palette,
    color: "from-purple-500 to-pink-400",
    features: ["UI/UX Design", "Brand Integration", "Wireframing", "Prototyping"]
  },
  {
    id: 3,
    title: "Development & Build",
    description: "We bring designs to life with clean, scalable code using the latest technologies and best practices.",
    icon: Code2,
    color: "from-emerald-500 to-green-400",
    features: ["Frontend Development", "Backend Development", "Database Design", "API Integration"]
  },
  {
    id: 4,
    title: "Testing & Quality",
    description: "Rigorous testing ensures your solution works flawlessly across all devices and platforms.",
    icon: TestTube,
    color: "from-orange-500 to-red-400",
    features: ["Cross-browser Testing", "Performance Testing", "Security Testing", "User Acceptance Testing"]
  },
  {
    id: 5,
    title: "Launch & Support",
    description: "We deploy your solution and provide ongoing support to ensure continued success and growth.",
    icon: Rocket,
    color: "from-yellow-500 to-orange-400",
    features: ["Deployment", "Monitoring", "Maintenance", "Ongoing Support"]
  }
];

export const Process = () => {
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
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-primary/5 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 bg-accent/5 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
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
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
            How We <span className="text-gradient-primary">Deliver</span> Excellence
          </h2>
          <p className="text-lg sm:text-xl text-secondary-light leading-relaxed max-w-3xl mx-auto">
            Our proven methodology ensures every project is delivered on time, 
            within budget, and exceeds your expectations.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="space-y-8 sm:space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              className={`flex flex-col lg:flex-row gap-8 sm:gap-12 items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
              variants={itemVariants}
            >
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-gradient-primary/10 rounded-full border border-primary/20">
                  <span className="text-sm font-bold text-primary">Step {String(step.id).padStart(2, '0')}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-base sm:text-lg text-secondary-light leading-relaxed mb-6">
                  {step.description}
                </p>
                
                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {step.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-3 text-sm sm:text-base text-secondary-light"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                    >
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Visual Element */}
              <div className="flex-shrink-0 relative">
                <div className={`w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                  <step.icon className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                </div>
                
                {/* Step Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-primary text-white rounded-full flex items-center justify-center text-sm sm:text-base font-bold shadow-lg">
                  {step.id}
                </div>
              </div>
              
              {/* Connection Line (except for last item) */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-primary/30"></div>
              )}
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
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Download Process Guide
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
