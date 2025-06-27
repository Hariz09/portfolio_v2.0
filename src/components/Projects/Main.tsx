'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Github, Star, Sparkles } from 'lucide-react';
import StarBackground from './StarBackground';
import ProjectCard from './Card';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set());
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.target === headerRef.current) {
            setIsHeaderVisible(entry.isIntersecting);
          } else {
            const index: number = projectRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleProjects((prev: Set<number>) => {
                const newSet = new Set(prev);
                if (entry.isIntersecting) {
                  newSet.add(index);
                } else {
                  newSet.delete(index);
                }
                return newSet;
              });
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    projectRefs.current.forEach((ref: HTMLDivElement | null) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleCardHover = (index: number | null) => {
    setHoveredCardIndex(index);
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-t from-gray-900 via-blue-900 to-black">
      <StarBackground />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Enhanced Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            isHeaderVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-cyan-400" />
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
                Featured Projects
              </h2>
              <Star className="w-8 h-8 text-yellow-400" />
            </div>
            
            <p className="text-sky-100 text-xl max-w-3xl mx-auto leading-relaxed mb-6">
              Crafting digital experiences that push the boundaries of innovation and creativity
            </p>

            <div className="flex justify-center">
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Projects Grid with Enhanced Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              ref={(el: HTMLDivElement | null) => { projectRefs.current[index] = el; }}
              project={project}
              index={index}
              isVisible={visibleProjects.has(index)}
              isAnyCardHovered={hoveredCardIndex !== null}
              isThisCardHovered={hoveredCardIndex === index}
              onHover={handleCardHover}
            />
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-20">
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 max-w-2xl mx-auto">
            <p className="text-sky-200 mb-6 text-lg">
              Explore the complete constellation of my work
            </p>
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-size-200 hover:bg-pos-100 text-white rounded-full font-semibold transition-all duration-500 shadow-xl hover:shadow-cyan-500/30 hover:scale-110 hover:animate-none">
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>View All Projects</span>
              <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}