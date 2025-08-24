import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type Props = {
  data: {
    img: StaticImageData;
    meta: string;
    title: string;
    description: string;
  };
  index?: number;
};

export const ProjectCard: React.FC<Props> = ({
  data: { img, meta, title, description },
  index = 0,
}) => {
  return (
    <motion.div 
      className="group relative cursor-pointer"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110 group-hover:scale-100"></div>
      
      {/* Main card */}
      <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-neutral/20 group-hover:border-primary/30">
        {/* Image container with overlay */}
        <div className="relative overflow-hidden">
          <div className="aspect-[4/3] relative">
            <Image 
              src={img.src} 
              alt={title} 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Project number badge */}
            <div className="absolute top-4 left-4 w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
              {index + 1}
            </div>
            
            {/* Hover action buttons */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="flex gap-3">
                <motion.button 
                  className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-secondary hover:bg-white transition-colors duration-300 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </motion.button>
                <motion.button 
                  className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content section */}
        <div className="p-6">
          {/* Meta tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {meta.split(' | ').map((tag, tagIndex) => (
              <span 
                key={tagIndex}
                className="px-3 py-1 bg-gradient-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-secondary-light text-sm leading-relaxed mb-6 line-clamp-3">
            {description}
          </p>
          
          {/* Action buttons */}
          <div className="flex items-center justify-between">
            <button className="text-primary hover:text-primary-dark font-semibold text-sm transition-colors duration-300 flex items-center gap-2 group/btn">
              View Project
              <motion.svg 
                className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </button>
            
            <button className="px-4 py-2 bg-gradient-primary text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Case Study
            </button>
          </div>
        </div>
        
        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </motion.div>
  );
};
