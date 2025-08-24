"use client";
import { motion } from "framer-motion";
import { 
  Users, 
  Target, 
  Award, 
  Zap, 
  Shield, 
  CheckCircle2,
  ArrowRight,
  Star,
  Clock
} from "lucide-react";

const VALUES = [
  {
    id: 1,
    title: "Innovation First",
    desc: "We push boundaries and embrace cutting-edge technologies to deliver solutions that set you apart.",
    icon: Zap,
    color: "bg-gradient-to-br from-emerald-500 to-lime-400"
  },
  {
    id: 2,
    title: "Client Partnership",
    desc: "We believe in building lasting relationships, not just delivering projects. Your success is our success.",
    icon: Users,
    color: "bg-gradient-to-br from-blue-500 to-cyan-400"
  },
  {
    id: 3,
    title: "Quality Craftsmanship",
    desc: "Every line of code, every pixel, every interaction is crafted with precision and care.",
    icon: Award,
    color: "bg-gradient-to-br from-purple-500 to-pink-400"
  },
  {
    id: 4,
    title: "Transparency",
    desc: "Clear communication, honest feedback, and complete visibility into our process and progress.",
    icon: Shield,
    color: "bg-gradient-to-br from-orange-500 to-red-400"
  }
];

const STORY_STEPS = [
  {
    id: 1,
    year: "2020",
    title: "The Beginning",
    desc: "Founded with a vision to bridge creativity and technology in web development."
  },
  {
    id: 2,
    year: "2021",
    title: "First Breakthrough",
    desc: "Delivered our first major project, establishing our reputation for quality and innovation."
  },
  {
    id: 3,
    year: "2022",
    title: "Growth & Expansion",
    desc: "Expanded our team and services, working with clients across multiple industries."
  },
  {
    id: 4,
    year: "2023",
    title: "Industry Recognition",
    desc: "Received awards and recognition for our innovative approach and client satisfaction."
  },
  {
    id: 5,
    year: "2024",
    title: "Future Forward",
    desc: "Continuing to push boundaries and deliver exceptional digital experiences."
  }
];

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Founder & Lead Developer",
    expertise: "Full-Stack Development, UI/UX Design",
    avatar: "/api/placeholder/100/100"
  },
  {
    id: 2,
    name: "Sarah Kim",
    role: "Creative Director",
    expertise: "Brand Strategy, Visual Design",
    avatar: "/api/placeholder/100/100"
  },
  {
    id: 3,
    name: "Marcus Rodriguez",
    role: "Senior Developer",
    expertise: "Frontend Architecture, Performance",
    avatar: "/api/placeholder/100/100"
  }
];

const STATS = [
  { id: 1, number: "150+", label: "Projects Completed", icon: CheckCircle2 },
  { id: 2, number: "98%", label: "Client Satisfaction", icon: Star },
  { id: 3, number: "24/7", label: "Support Available", icon: Clock },
  { id: 4, number: "50+", label: "Happy Clients", icon: Users }
];

export default function AboutPage() {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-secondary flex items-center justify-center overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-gradient-primary/10 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-20 right-20 w-24 h-24 bg-accent/10 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "2s" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-light/10 rounded-full blur-2xl"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "4s" }}
          />
        </div>

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-primary/10 rounded-full border border-primary/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                About Us
              </span>
              <div className="w-2 h-2 bg-accent rounded-full"></div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-gradient-primary">Building Digital</span>
              <br />
              <span className="text-white">Experiences That</span>
              <br />
              <span className="text-gradient-primary">Matter</span>
            </motion.h1>
            
            {/* Subheading */}
            <motion.p 
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              At BeetleBytes, we&apos;re more than just developers and designers. 
              We&apos;re digital craftsmen, problem solvers, and your partners in growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button className="btn-primary text-lg px-8 py-4 group">
                <span className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-gradient-to-br from-white via-neutral/10 to-white">
        <div className="container">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 bg-gradient-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20 mb-6">
                Our Mission
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-8">
                Empowering Businesses Through
                <span className="text-gradient-primary block">Digital Innovation</span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                We believe that every business deserves a digital presence that not only looks stunning 
                but also drives real results. Our mission is to transform your vision into powerful, 
                scalable web solutions that help you connect with your audience and achieve your goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-white/80">Custom solutions tailored to your needs</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-white/80">Cutting-edge technology and best practices</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-white/80">Ongoing support and maintenance</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="relative z-10 bg-gradient-primary rounded-3xl p-8 lg:p-12 text-white">
                <div className="text-center">
                  <Target className="w-16 h-16 mx-auto mb-6 text-white/80" />
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-white/90 leading-relaxed">
                    To be the leading force in digital transformation, creating web experiences 
                    that inspire, engage, and drive measurable business growth for our clients.
                  </p>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-primary/20 rounded-3xl blur-2xl -z-10"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-gradient-secondary relative overflow-hidden">
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
            style={{ animationDelay: "3s" }}
          />
        </div>

        <div className="container relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-primary/10 rounded-full text-sm font-medium text-accent border border-primary/20 mb-6">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              The <span className="text-gradient-primary">BeetleBytes</span> Story
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              From humble beginnings to becoming a trusted partner for businesses worldwide, 
              our journey has been driven by passion, innovation, and unwavering commitment to excellence.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Timeline */}
            <div className="space-y-8">
              {STORY_STEPS.map((step, index) => (
                <motion.div
                  key={step.id}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  variants={itemVariants}
                >
                  <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-gradient-primary/10 rounded-full border border-primary/20">
                      <span className="text-sm font-bold text-primary">{step.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-white/80 leading-relaxed">{step.desc}</p>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {String(step.id).padStart(2, '0')}
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center lg:text-right">
                    {/* Connection line */}
                    {index < STORY_STEPS.length - 1 && (
                      <div className="hidden lg:block w-px h-16 bg-gradient-primary/30 mx-auto"></div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-br from-white via-neutral/10 to-white">
        <div className="container">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20 mb-6">
              What Drives Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
              Our Core <span className="text-gradient-primary">Values</span>
            </h2>
            <p className="text-xl text-secondary-light leading-relaxed">
              These principles guide everything we do, from the smallest design decisions 
              to the biggest strategic choices we make with our clients.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {VALUES.map((value) => (
              <motion.div
                key={value.id}
                className="group relative text-secondary-light  rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-neutral/20 hover:border-primary/30"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${value.color}`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-secondary-light leading-relaxed">
                  {value.desc}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gradient-secondary relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-primary/5 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
          />
        </div>

        <div className="container relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-primary/10 rounded-full text-sm font-medium text-accent border border-primary/20 mb-6">
              Meet Our Team
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              The <span className="text-gradient-primary">Minds</span> Behind the Magic
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Our diverse team of experts brings together creativity, technical excellence, 
              and business acumen to deliver exceptional results for our clients.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {TEAM_MEMBERS.map((member) => (
              <motion.div
                key={member.id}
                className="group relative text-secondary-light /5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-500 transform hover:-translate-y-2"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                {/* Avatar */}
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-accent font-semibold mb-3">{member.role}</p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {member.expertise}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-br from-white via-neutral/10 to-white">
        <div className="container">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.id}
                className="text-center group"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                  {stat.number}
                </div>
                <p className="text-white/80 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-secondary relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-gradient-primary/10 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-20 right-20 w-24 h-24 bg-accent/10 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Ready to Start Your
              <span className="text-gradient-primary block">Digital Journey?</span>
            </h2>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-12">
              Let&apos;s discuss your project and explore how we can help you achieve your goals. 
              Our team is ready to bring your vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4 group">
                <span className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Schedule a Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
