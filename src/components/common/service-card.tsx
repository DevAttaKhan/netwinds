interface Props {
  data: {
    Icon: React.ElementType;
    title: string;
    description: string;
  };
  index?: number;
}

export const ServiceCard: React.FC<Props> = ({
  data: { Icon, title, description },
  index = 0,
}) => {
  return (
    <div className="group relative">
      {/* Background gradient border effect */}
      <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-105 group-hover:scale-100"></div>
      
      <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-neutral/50 hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-primary/20">
        {/* Service number badge */}
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
          {index + 1}
        </div>
        
        {/* Icon container with enhanced styling */}
        <div className="relative mb-6">
          <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
            <Icon className="text-white w-10 h-10" />
          </div>
          
          {/* Decorative accent */}
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-accent rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors duration-300 leading-tight">
            {title}
          </h3>
          <p className="text-secondary-light leading-relaxed text-base">
            {description}
          </p>
        </div>
        
        {/* Hover accent line */}
        <div className="mt-6 h-1 bg-gradient-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        
        {/* Learn more link */}
        <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors duration-300">
            Learn More
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
