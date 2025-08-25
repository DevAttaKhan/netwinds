"use client";
import { motion } from "framer-motion";
import { 
  Building2, 
  Rocket, 
  Store, 
  GraduationCap, 
  Heart, 
  Globe,
  TrendingUp,
  Users,
  ArrowRight
} from "lucide-react";

const CLIENT_TYPES = [
  {
    id: 1,
    icon: Building2,
    title: "Startups & Scale-ups",
    description: "Fast-moving companies that need rapid development and innovative solutions to stay ahead of the competition.",
    benefits: ["Quick turnaround", "Flexible processes", "Cost-effective solutions", "Innovation focus"],
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    icon: Store,
    title: "Small Businesses",
    description: "Local businesses looking to establish a strong online presence and compete with larger competitors.",
    benefits: ["Personal attention", "Local market understanding", "Affordable packages", "Ongoing support"],
    color: "from-emerald-500 to-green-400"
  },
  {
    id: 3,
    icon: Rocket,
    title: "E-commerce Brands",
    description: "Online retailers who need high-converting websites and seamless shopping experiences.",
    benefits: ["Conversion optimization", "Mobile-first design", "Performance focus", "SEO expertise"],
    color: "from-orange-500 to-red-400"
  },
  {
    id: 4,
    icon: GraduationCap,
    title: "Educational Institutions",
    description: "Schools, universities, and training providers modernizing their digital learning platforms.",
    benefits: ["User experience focus", "Accessibility compliance", "Modern design", "Scalable solutions"],
    color: "from-purple-500 to-pink-400"
  },
  {
    id: 5,
    icon: Heart,
    title: "Healthcare & Wellness",
    description: "Medical practices and wellness businesses building trust through professional online presence.",
    benefits: ["HIPAA compliance", "Trust-building design", "Patient experience", "Professional appearance"],
    color: "from-red-500 to-pink-400"
  },
  {
    id: 6,
    icon: Globe,
    title: "Non-Profit Organizations",
    description: "Charities and NGOs creating impactful websites to reach donors and beneficiaries.",
    benefits: ["Cost-effective solutions", "Impact-focused design", "Donor engagement", "Accessibility"],
    color: "from-indigo-500 to-purple-400"
  }
];

const INDUSTRIES = [
  "Technology & SaaS",
  "Healthcare & Medical",
  "Education & Training",
  "E-commerce & Retail",
  "Professional Services",
  "Real Estate",
  "Food & Beverage",
  "Fitness & Wellness",
  "Creative & Design",
  "Finance & Fintech"
];

export const ClientTypes = () => {
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
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-primary/5 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-20 w-24 h-24 bg-accent/5 rounded-full blur-3xl"
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
            Ideal Client Types
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
            Who <span className="text-gradient-primary">Thrives</span> With New Agencies
          </h2>
          <p className="text-lg sm:text-xl text-secondary-light leading-relaxed max-w-3xl mx-auto">
            We&apos;re particularly well-suited for businesses that value innovation, 
            personal attention, and fresh perspectives in their digital transformation.
          </p>
        </motion.div>

        {/* Client Types Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {CLIENT_TYPES.map((type) => (
            <motion.div
              key={type.id}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-neutral/20 hover:border-primary/30"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <type.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                {type.title}
              </h3>
              <p className="text-secondary-light leading-relaxed mb-6">
                {type.description}
              </p>

              {/* Benefits */}
              <div className="space-y-2">
                {type.benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center gap-2 text-secondary-light text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Industries Section */}
        <motion.div
          className="bg-gradient-primary/5 rounded-3xl p-8 sm:p-12 border border-primary/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <TrendingUp className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">
              Industries We Serve
            </h3>
            <p className="text-secondary-light text-lg max-w-2xl mx-auto">
              Our expertise spans across various industries, and we&apos;re always excited 
              to learn about new sectors and challenges.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {INDUSTRIES.map((industry, index) => (
              <motion.div
                key={industry}
                className="flex items-center gap-2 text-secondary-light hover:text-primary transition-colors duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-1.5 h-1.5 bg-accent rounded-full group-hover:bg-primary transition-colors duration-300"></div>
                <span className="text-sm sm:text-base">{industry}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-secondary-light mb-6">
              Don&apos;t see your industry? We&apos;re always excited to learn and adapt!
            </p>
            <button className="btn-primary text-lg px-8 py-4 group">
              <span className="flex items-center gap-2">
                Let&apos;s Discuss Your Industry
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
