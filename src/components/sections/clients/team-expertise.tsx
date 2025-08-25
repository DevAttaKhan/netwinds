"use client";
import { motion } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Smartphone, 
  Zap, 
  Database, 
  Cloud,
  Shield,
  Rocket,
  CheckCircle2
} from "lucide-react";

const EXPERTISE_AREAS = [
  {
    id: 1,
    icon: Code2,
    title: "Full-Stack Development",
    description: "Modern web applications built with React, Next.js, Node.js, and cutting-edge technologies.",
    skills: ["React 18", "Next.js 15", "TypeScript", "Node.js", "PostgreSQL"],
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that prioritize user experience and conversion optimization.",
    skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping", "Design Systems"],
    color: "from-purple-500 to-pink-400"
  },
  {
    id: 3,
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile solutions that work seamlessly across all devices.",
    skills: ["React Native", "Progressive Web Apps", "Mobile-First Design", "Performance Optimization"],
    color: "from-orange-500 to-red-400"
  },
  {
    id: 4,
    icon: Zap,
    title: "Performance & SEO",
    description: "Lightning-fast websites that rank well in search engines and provide exceptional user experience.",
    skills: ["Core Web Vitals", "Lighthouse", "SEO Optimization", "CDN", "Caching"],
    color: "from-yellow-500 to-orange-400"
  },
  {
    id: 5,
    icon: Database,
    title: "Backend & APIs",
    description: "Robust, scalable backend systems with secure APIs and efficient database design.",
    skills: ["REST APIs", "GraphQL", "Database Design", "Authentication", "Security"],
    color: "from-emerald-500 to-green-400"
  },
  {
    id: 6,
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Reliable deployment and hosting solutions with continuous integration and monitoring.",
    skills: ["AWS", "Vercel", "Docker", "CI/CD", "Monitoring"],
    color: "from-indigo-500 to-purple-400"
  }
];

const TEAM_HIGHLIGHTS = [
  "5+ years combined experience in web development",
  "Certified in modern technologies and best practices",
  "Background in both startups and enterprise solutions",
  "Continuous learning and skill development",
  "Passionate about creating exceptional digital experiences"
];

export const TeamExpertise = () => {
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
          <span className="inline-block px-4 py-2 bg-gradient-primary/10 rounded-full text-sm font-medium text-accent border border-primary/20 mb-6">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Proven <span className="text-gradient-primary">Skills</span> & Experience
          </h2>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            While we&apos;re a new agency, our team brings years of combined experience 
            in modern web development and design.
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {EXPERTISE_AREAS.map((area) => (
            <motion.div
              key={area.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-primary/30 transition-all duration-500 transform hover:-translate-y-2"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <area.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                {area.title}
              </h3>
              <p className="text-white/80 leading-relaxed mb-6">
                {area.description}
              </p>

              {/* Skills */}
              <div className="space-y-2">
                {area.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="flex items-center gap-2 text-white/70 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="w-3 h-3 text-accent flex-shrink-0" />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Team Highlights */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <Rocket className="w-16 h-16 text-accent mx-auto mb-4" />
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Why Our Team Stands Out
            </h3>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              We may be new as an agency, but our individual expertise and passion 
              for excellence make us a formidable team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_HIGHLIGHTS.map((highlight, index) => (
              <motion.div
                key={highlight}
                className="flex items-center gap-3 text-white/90"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                <span className="text-base sm:text-lg">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
