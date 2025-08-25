"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Calendar, CheckCircle2 } from "lucide-react";

export const ServicesCTA = () => {
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

  const benefits = [
    "Free consultation and project assessment",
    "Transparent pricing with no hidden costs",
    "Dedicated project manager throughout",
    "Post-launch support and maintenance"
  ];

  return (
    <section className="section-padding bg-gradient-secondary relative overflow-hidden">
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

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-primary/10 rounded-full text-sm font-medium text-accent border border-primary/20 mb-6">
              Ready to Start?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Let&apos;s Build Something
              <span className="text-gradient-primary block">Amazing Together</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8">
              Ready to transform your digital presence? Our team is here to help you 
              achieve your goals with cutting-edge solutions and exceptional service.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-3 text-white/90"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-base sm:text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
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

          {/* Right Content - Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Card 1 */}
            <motion.div
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-primary/30 transition-all duration-500 transform hover:-translate-y-2"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Quick Chat</h3>
                  <p className="text-white/80 text-sm sm:text-base mb-4">
                    Have a quick question? Send us a message and we&apos;ll get back to you within 2 hours.
                  </p>
                  <button className="text-accent hover:text-primary font-semibold text-sm transition-colors duration-300">
                    Send Message →
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Contact Card 2 */}
            <motion.div
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-primary/30 transition-all duration-500 transform hover:-translate-y-2"
              whileHover={{ scale: 1.02 }}
              style={{ animationDelay: "0.1s" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Free Consultation</h3>
                  <p className="text-white/80 text-sm sm:text-base mb-4">
                    Book a 30-minute consultation to discuss your project requirements and get expert advice.
                  </p>
                  <button className="text-accent hover:text-primary font-semibold text-sm transition-colors duration-300">
                    Book Now →
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="text-center pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-white/60 text-sm mb-3">Trusted by 50+ businesses worldwide</p>
              <div className="flex justify-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-white/60 text-xs">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">150+</div>
                  <div className="text-white/60 text-xs">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-white/60 text-xs">Support Available</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
