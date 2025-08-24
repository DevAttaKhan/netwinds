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
    <section className="section-padding bg-gradient-to-br from-white via-neutral/10 to-white relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
          
          {/* Left Content - Sticky */}
          <div className="order-1 lg:sticky lg:top-32 self-start h-fit">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
            className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-gradient-primary/10 rounded-full border border-primary/20"
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

              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                How We Bring Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary">
                  Vision to Life
                </span>
              </motion.h2>

              <motion.p 
                className="text-base sm:text-lg text-secondary-light leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                Our proven design process ensures every project delivers exceptional results. From initial concept to final launch, 
                we guide you through each step with transparency, collaboration, and attention to detail.
              </motion.p>

              <motion.p 
                className="text-base sm:text-lg text-secondary-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                Each phase builds upon the previous one, creating a solid foundation for success. We believe in iterative design 
                and continuous feedback to ensure the final product exceeds your expectations.
              </motion.p>
            </motion.div>
          </div>

          {/* Right Cards */}
          <div className="order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {WORK_PROCESS.steps.map((step, index) => {
                const IconComponent = iconMap[step.icon as keyof typeof iconMap];
                
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.15, 
                      ease: "easeOut" 
                    }}
                    className="group relative p-6 lg:p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-neutral/20 hover:border-primary/30"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Step Number Badge */}
                    <div className="absolute z-10 -top-3 -right-3 w-8 h-8 bg-gradient-primary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {String(step.id).padStart(2, '0')}
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-primary mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {IconComponent && (
                        <IconComponent className="w-6 h-6 text-white" />
                      )}
                    </div>

                    {/* Content */}
                    <h3 className="font-bold text-xl text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-secondary-light text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2">
                      {step.details?.map((detail, detailIndex) => (
                        <motion.div
                          key={detail}
                          className="flex items-center gap-2 text-sm text-secondary-light"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.4, 
                            delay: (index * 0.15) + (detailIndex * 0.1) + 0.3, 
                            ease: "easeOut" 
                          }}
                        >
                          <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                          <span>{detail}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-300" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
