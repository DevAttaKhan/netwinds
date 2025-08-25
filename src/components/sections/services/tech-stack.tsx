"use client";
import { motion } from "framer-motion";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiPostgresql,
  SiMongodb,
  SiAmazon,
  SiVercel,
  SiDocker,
  SiGithub,
  SiJavascript,
  SiFramer,
  SiGraphql,
  SiExpress,
  SiFlutter,
  SiWebpack,
  SiLighthouse,
  SiJet,
  SiAuth0
} from "react-icons/si";

const TECH_CATEGORIES = [
  {
    id: 1,
    name: "Frontend",
    icon: SiReact,
    color: "from-blue-500 to-cyan-400",
    technologies: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" }
    ]
  },
  {
    id: 2,
    name: "Backend",
    icon: SiNodedotjs,
    color: "from-emerald-500 to-green-400",
    technologies: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" }
    ]
  },
  {
    id: 3,
    name: "Cloud & DevOps",
    icon: SiAmazon,
    color: "from-purple-500 to-pink-400",
    technologies: [
      { name: "AWS", icon: SiAmazon, color: "#FF9900" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "GitHub Actions", icon: SiGithub, color: "#181717" },
      { name: "CI/CD", icon: SiGithub, color: "#181717" }
    ]
  },
  {
    id: 4,
    name: "Mobile",
    icon: SiReact,
    color: "from-orange-500 to-red-400",
    technologies: [
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Progressive Web Apps", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Mobile-First Design", icon: SiJavascript, color: "#F7DF1E" }
    ]
  },
  {
    id: 5,
    name: "Performance",
    icon: SiWebpack,
    color: "from-yellow-500 to-orange-400",
    technologies: [
      { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" },
      { name: "Lighthouse", icon: SiLighthouse, color: "#F44B21" },
      { name: "Core Web Vitals", icon: SiJavascript, color: "#F7DF1E" },
      { name: "CDN", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Caching", icon: SiJavascript, color: "#F7DF1E" }
    ]
  },
  {
    id: 6,
    name: "Security",
    icon: SiJet,
    color: "from-red-500 to-pink-400",
    technologies: [
      { name: "HTTPS", icon: SiJavascript, color: "#F7DF1E" },
      { name: "JWT", icon: SiJet, color: "#000000" },
      { name: "OAuth", icon: SiAuth0, color: "#FF6600" },
      { name: "Data Encryption", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Security Headers", icon: SiJavascript, color: "#F7DF1E" }
    ]
  }
];

const FEATURED_TECH = [
  { name: "Next.js 15", level: "Expert", icon: SiNextdotjs, color: "#000000" },
  { name: "React 18", level: "Expert", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", level: "Advanced", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", level: "Expert", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", level: "Advanced", icon: SiNodedotjs, color: "#339933" },
  { name: "PostgreSQL", level: "Advanced", icon: SiPostgresql, color: "#4169E1" }
];

export const TechStack = () => {
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 2, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="section-padding bg-gradient-secondary relative overflow-hidden">
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
          style={{ animationDelay: "3s" }}
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
          <span className="inline-block px-4 py-2 bg-gradient-primary/10 rounded-full text-sm font-medium text-accent border border-primary/20 mb-6">
            Our Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Built with <span className="text-gradient-primary">Modern</span> Technologies
          </h2>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            We leverage cutting-edge tools and frameworks to deliver fast, scalable, 
            and maintainable solutions that keep you ahead of the competition.
          </p>
        </motion.div>

        {/* Featured Technologies */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
            Core Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {FEATURED_TECH.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-primary/30 transition-all duration-500 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon 
                    className="w-6 h-6 sm:w-8 sm:h-8" 
                    style={{ color: tech.color }}
                  />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white text-center mb-2">
                  {tech.name}
                </h4>
                <p className="text-xs sm:text-sm text-accent text-center font-medium">
                  {tech.level}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
            Technology Categories
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {TECH_CATEGORIES.map((category) => (
              <motion.div
                key={category.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-primary/30 transition-all duration-500 transform hover:-translate-y-2"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                  {category.name}
                </h4>

                {/* Technologies List */}
                <div className="space-y-3">
                  {category.technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="flex items-center gap-3 text-white/80 text-sm sm:text-base group/tech hover:text-white transition-colors duration-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover/tech:bg-white/20 transition-colors duration-300">
                        <tech.icon 
                          className="w-4 h-4" 
                          style={{ color: tech.color }}
                        />
                      </div>
                      <span className="font-medium">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
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
                Discuss Your Tech Needs
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
