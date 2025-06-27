// components/TechSlider.tsx
'use client';
import { Icon } from '@iconify/react';
import { TechStack } from '@/types/about';

interface TechSliderProps {
  techStack: TechStack[];
}

export default function TechSlider({ techStack }: TechSliderProps) {
  // Create multiple copies for seamless infinite scroll
  const duplicatedTechStack = [...techStack, ...techStack, ...techStack];
  
  return (
    <div className="pt-2 mb-20 overflow-hidden">
      <div className="relative">
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
        
        <div className="flex animate-[slide_40s_linear_infinite] hover:pause">
          {duplicatedTechStack.map((tech, index) => (
            <div 
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 mx-3 group"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gray-900/60 hover:bg-gray-800/80 rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <Icon 
                  icon={tech.icon} 
                  className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              <div className="text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-gray-400 font-medium">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}