'use client';
import { Icon } from '@iconify/react';
import { TechStack } from '@/types/about';

interface TechSliderProps {
  techStack: TechStack[];
}

export default function TechSlider({ techStack }: TechSliderProps) {
  return (
    <div className="pt-2 mb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            Tech Stack
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Professional masonry-style layout */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-5">
          {techStack.map((tech, index) => (
            <div 
              key={tech.name}
              className="group flex flex-col items-center min-w-[70px] md:min-w-[80px]"
              style={{ 
                animationDelay: `${index * 0.05}s`
              }}
            >
              {/* Icon container */}
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 flex items-center justify-center bg-gray-900/40 hover:bg-gray-800/60 rounded-lg border border-gray-800/50 hover:border-gray-600/80 transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-gray-900/30 animate-[fadeInUp_0.5s_ease-out_forwards] opacity-0 backdrop-blur-sm">
                <Icon 
                  icon={tech.icon} 
                  className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 transition-all duration-300 group-hover:scale-110 text-gray-300 group-hover:text-white" 
                />
              </div>
              
              {/* Tech name - always visible */}
              <div className="text-center mt-1.5 md:mt-2">
                <span className="text-[10px] md:text-xs text-gray-500 group-hover:text-gray-300 font-medium transition-colors duration-300 leading-tight">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Section divider */}
        <div className="mt-12 flex items-center justify-center">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent w-full max-w-md"></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}