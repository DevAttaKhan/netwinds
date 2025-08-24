"use client";
import { motion } from "framer-motion";
import { BANNER } from "./data";
import { ArrowRight, Sparkles, Zap, Code2, Rocket } from "lucide-react";

export const Banner = () => {
  return (
    <section className="relative min-h-screen bg-gradient-secondary overflow-hidden pt-20">
      {/* Animated Background Elements */}
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

      {/* Main Content - Single Column Centered */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto relative">
          
          {/* Floating Elements Around Text */}
          {/* Top Left */}
          <motion.div
            className="absolute -top-16 -left-16 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg"
            animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Zap className="w-6 h-6 text-secondary" />
          </motion.div>

          {/* Top Right */}
          <motion.div
            className="absolute -top-12 -right-20 w-10 h-10 bg-primary-light rounded-full flex items-center justify-center shadow-lg"
            animate={{ y: [10, -10, 10], rotate: [360, 180, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <Code2 className="w-5 h-5 text-white" />
          </motion.div>

          {/* Bottom Left */}
          <motion.div
            className="absolute -bottom-16 -left-20 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
            animate={{ x: [-8, 8, -8], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
          </motion.div>

          {/* Bottom Right */}
          <motion.div
            className="absolute -bottom-12 -right-16 w-6 h-6 bg-accent/80 rounded-full"
            animate={{ y: [0, -12, 0], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />

          {/* Left Side */}
          <motion.div
            className="absolute top-1/2 -left-24 w-5 h-5 bg-primary-light/80 rounded-full"
            animate={{ y: [0, 12, 0], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />

          {/* Right Side */}
          <motion.div
            className="absolute top-1/3 -right-28 w-7 h-7 bg-white/30 rounded-full flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
          >
            <div className="w-1 h-1 bg-accent rounded-full"></div>
          </motion.div>

          {/* Center Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="inline-flex items-center gap-2 mb-10 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            >
              <Sparkles className="w-3 h-3 text-accent" />
              <span className="text-xs font-medium text-white/90 uppercase tracking-wider">
                Award-Winning Digital Agency
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <span className="text-gradient-primary">Empowering</span> Your
              <br />
              <span className="text-accent">Digital Presence</span>
              <br />
              <span className="text-white">with Cutting-Edge</span>
              <br />
              <span className="text-gradient-primary">Web Solutions</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              {BANNER.subheading}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <button className="group relative px-6 py-3 bg-gradient-primary text-white font-semibold rounded-lg shadow-xl hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-primary rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
              </button>
              
              <button className="group px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <span className="flex items-center gap-2">
                  View Our Work
                  <Rocket className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap items-center gap-8 justify-center text-white/60"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2">
                <Zap className="w-3 h-3 text-accent" />
                <span className="text-xs">Fast & Reliable</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-3 h-3 text-primary-light" />
                <span className="text-xs">Modern Tech</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                <span className="text-xs">24/7 Support</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.8 }}
      />
    </section>
  );
};
