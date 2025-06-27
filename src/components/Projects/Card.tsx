'use client'
import React, { useState, useEffect } from 'react';
import { Github, Star, Sparkles, Rocket, ExternalLink, FileText } from 'lucide-react';
import { Project, AnimationStyle } from '@/types/project';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
  ref?: React.RefObject<HTMLDivElement>;
  isAnyCardHovered?: boolean;
  isThisCardHovered?: boolean;
  onHover?: (index: number | null) => void;
}

interface StarPosition {
  top: number;
  left: number;
  delay: number;
  duration: number;
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ project, index, isVisible, isAnyCardHovered = false, isThisCardHovered = false, onHover }, ref) => {
    const [stars, setStars] = useState<StarPosition[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      // Generate stars only on client side to avoid hydration mismatch
      const generatedStars = Array.from({ length: 12 }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 2
      }));
      
      setStars(generatedStars);
      setMounted(true);
    }, []);

    const getTechAnimationStyle = (techIndex: number): AnimationStyle => ({
      animationDelay: `${techIndex * 100}ms`
    });

    const getProjectAnimationStyle = (index: number): React.CSSProperties => ({
      transitionDelay: `${index * 150}ms`
    });

    const handleMouseEnter = () => {
      onHover?.(index);
    };

    const handleMouseLeave = () => {
      onHover?.(null);
    };

    // Determine opacity based on hover state
    const getCardOpacity = () => {
      if (!isAnyCardHovered) return 'opacity-100';
      if (isThisCardHovered) return 'opacity-100';
      return 'opacity-40';
    };

    return (
      <div
        ref={ref}
        className={`group relative transition-all duration-700 ease-out ${
          isVisible
            ? `translate-y-0 scale-100 ${getCardOpacity()}`
            : 'opacity-0 translate-y-16 scale-95'
        }`}
        style={getProjectAnimationStyle(index)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Night Sky Background with Stars */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900"></div>
          {/* Client-side generated stars */}
          <div className="absolute inset-0">
            {mounted && stars.map((star, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  top: `${star.top}%`,
                  left: `${star.left}%`,
                  animationDelay: `${star.delay}s`,
                  animationDuration: `${star.duration}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative backdrop-blur-xl bg-gradient-to-br from-slate-800/40 via-blue-900/20 to-slate-800/40 border border-slate-700/50 rounded-3xl overflow-hidden transition-all duration-500 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-3 group-hover:scale-[1.02]">
          
          {/* Enhanced Glow Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
          
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full text-xs font-bold text-slate-900 shadow-lg">
              <Star className="w-3 h-3 fill-current" />
              FEATURED
            </div>
          )}

          {/* Constellation Lines Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <line x1="20" y1="30" x2="80" y2="70" stroke="rgb(59 130 246)" strokeWidth="0.5" className="animate-pulse" />
              <line x1="10" y1="60" x2="90" y2="40" stroke="rgb(59 130 246)" strokeWidth="0.5" className="animate-pulse" style={{animationDelay: '0.5s'}} />
            </svg>
          </div>
          
          {/* Project Image with Night Sky Overlay */}
          <div className="relative overflow-hidden h-56">
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-slate-900/20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-cyan-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Enhanced Hover Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div className="p-3 bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-600/50 hover:border-blue-400/50 hover:bg-slate-700/80 transition-all duration-300 cursor-pointer group/icon">
                  <Github className="w-5 h-5 text-slate-300 group-hover/icon:text-white group-hover/icon:scale-110 transition-all duration-300" />
                </div>
                <div className="p-3 bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-600/50 hover:border-blue-400/50 hover:bg-slate-700/80 transition-all duration-300 cursor-pointer group/icon">
                  <ExternalLink className="w-5 h-5 text-slate-300 group-hover/icon:text-white group-hover/icon:scale-110 transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Content */}
          <div className="p-6 relative z-10">
            {/* Enhanced Title with Higher Hierarchy on Hover */}
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-3xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-cyan-400 group-hover:to-indigo-400 group-hover:bg-clip-text group-hover:drop-shadow-lg group-hover:scale-105 transition-all duration-500 transform-gpu">
              {project.title}
            </h3>
            
            <p className="text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors duration-300 text-sm line-clamp-3">
              {project.description}
            </p>

            {/* Night Sky Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech: string, techIndex: number) => (
                <span
                  key={techIndex}
                  className="px-3 py-1.5 text-xs font-medium bg-slate-800/60 text-slate-300 rounded-full border border-slate-600/50 hover:border-blue-400/50 hover:text-blue-300 hover:bg-slate-700/60 transition-all duration-300 hover:scale-105 cursor-default backdrop-blur-sm shadow-sm hover:shadow-blue-500/20"
                  style={getTechAnimationStyle(techIndex)}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Enhanced Action Buttons with DOCS */}
            <div className="grid grid-cols-3 gap-2">
              <a
                href={project.github}
                className="flex items-center gap-2 px-3 py-2.5 bg-slate-800/60 hover:bg-slate-700/60 text-slate-300 hover:text-white rounded-xl transition-all duration-300 text-sm font-medium border border-slate-600/50 hover:border-slate-500/50 hover:shadow-lg hover:shadow-slate-900/50 hover:scale-105 group/btn backdrop-blur-sm justify-center"
              >
                <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                <span className="hidden sm:inline">Code</span>
              </a>
              
              <a
                href={project.demo}
                className="flex items-center gap-2 px-3 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 hover:shadow-lg hover:shadow-blue-500/30 text-white rounded-xl transition-all duration-300 text-sm font-medium hover:scale-105 group/btn justify-center"
              >
                <Rocket className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                <span className="hidden sm:inline">Live</span>
              </a>

              {project.docs && (
                <a
                  href={project.docs}
                  className="flex items-center gap-2 px-3 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 hover:shadow-lg hover:shadow-indigo-500/30 text-white rounded-xl transition-all duration-300 text-sm font-medium hover:scale-105 group/btn justify-center"
                >
                  <FileText className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                  <span className="hidden sm:inline">Docs</span>
                </a>
              )}
            </div>
          </div>

          {/* Enhanced Corner Constellation Effect */}
          <div className="absolute top-3 right-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-700">
            <div className="relative w-full h-full">
              <Sparkles className="w-full h-full text-blue-400" />
              <div className="absolute inset-0 w-full h-full text-cyan-400">
                <Sparkles className="w-full h-full" />
              </div>
            </div>
          </div>

          {/* Bottom Glow */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;