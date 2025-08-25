"use client";
import { motion } from "framer-motion";
import { 
  Lightbulb, 
  Users, 
  Zap, 
  Target, 
  Heart, 
  Star,
  ArrowRight
} from "lucide-react";

const BENEFITS = [
  {
    id: 1,
    icon: Lightbulb,
    title: "Fresh Perspective",
    description: "We bring new ideas and approaches that established agencies might miss. No old habits or outdated methods.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    icon: Users,
    title: "Personal Attention",
    description: "As a new agency, every client gets our full focus. You won't be just another project in a long queue.",
    color: "from-emerald-500 to-green-400"
  },
  {
    id: 3,
    icon: Zap,
    title: "Hungry to Prove",
    description: "We have everything to prove and nothing to lose. This drives us to go above and beyond for every client.",
    color: "from-yellow-500 to-orange-400"
  },
  {
    id: 4,
    icon: Target,
    title: "Latest Technologies",
    description: "We're built on modern tech stacks and current best practices, not legacy systems from years ago.",
    color: "from-purple-500 to-pink-400"
  },
  {
    id: 5,
    icon: Heart,
    title: "Partnership Approach",
    description: "We see your success as our success. We're invested in building a long-term relationship, not just completing a project.",
    color: "from-red-500 to-pink-400"
  },
  {
    id: 6,
    icon: Star,
    title: "Flexible & Adaptable",
    description: "No rigid processes or corporate red tape. We adapt to your needs and pivot when necessary.",
    color: "from-indigo-500 to-purple-400"
  }
];

export const WhyNewAgency = () => {
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
            Why Choose a New Agency?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
            The <span className="text-gradient-primary">Advantages</span> of Fresh
          </h2>
          <p className="text-lg sm:text-xl text-secondary-light leading-relaxed max-w-3xl mx-auto">
            While established agencies have experience, new agencies bring unique advantages 
            that can make all the difference for your project.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {BENEFITS.map((benefit) => (
            <motion.div
              key={benefit.id}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-neutral/20 hover:border-primary/30"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-secondary-light leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-300" />
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
              Schedule a Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
