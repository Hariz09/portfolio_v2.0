'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { Icon } from '@iconify/react';
import StarryBackground from './StarryBackground';
import { projects } from '../data/projects';

// Type definitions
interface Technology {
  name: string;
  icon: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  iconPath: string;
  gifUrl?: string;
  liveUrl: string;
  githubUrl: string;
  technologies: Technology[];
  highlights: string[];
}

// Props interface for the component (if needed for future props)
interface ProjectsSectionProps {}

const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProject = (projectId: number): void => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      <StarryBackground 
        backgroundColor="bg-gradient-to-b from-black to-gray-900"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions that blend cutting-edge technology with exceptional user experience. 
            Each project represents a unique challenge conquered through creative problem-solving and technical excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {projects.map((project: Project) => (
            <div
              key={project.id}
              className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Project Header */}
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white flex items-center justify-center">
                      <Image
                        src={project.iconPath}
                        alt={`${project.title} icon`}
                        width={30}
                        height={30}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-300 rounded-lg transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-500/20 hover:bg-gray-500/30 text-gray-300 rounded-lg transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon 
                        icon={"iconoir:github"} 
                        className="w-4 h-4 group-hover/tech:scale-110 transition-transform" 
                      />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  </div>
                </div>

                {/* Technologies with Icons */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech: Technology, index: number) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-3 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-full text-sm font-medium transition-colors group/tech"
                    >
                      <Icon 
                        icon={tech.icon} 
                        className="w-4 h-4 group-hover/tech:scale-110 transition-transform" 
                      />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {project.highlights.map((highlight: string, index: number) => (
                    <div key={index} className="bg-gray-700/30 rounded-lg p-3 text-center hover:bg-gray-700/40 transition-colors">
                      <span className="text-sm text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Expand Button */}
                <button
                  onClick={() => toggleProject(project.id)}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 group-hover:shadow-lg"
                  type="button"
                  aria-expanded={expandedProject === project.id}
                  aria-controls={`project-details-${project.id}`}
                >
                  <span>{expandedProject === project.id ? 'Hide Details' : 'View Details'}</span>
                  {expandedProject === project.id ? 
                    <ChevronUp className="w-4 h-4" /> : 
                    <ChevronDown className="w-4 h-4" />
                  }
                </button>
              </div>

              {/* Expanded Content */}
              {expandedProject === project.id && (
                <div 
                  className="px-8 pb-8 border-t border-gray-700/30 bg-gray-800/20"
                  id={`project-details-${project.id}`}
                >
                  <div className="pt-6">
                    <h4 className="text-xl font-semibold text-white mb-4">Project Overview</h4>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-300 leading-relaxed text-justify">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Additional Technical Details */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-700/20 rounded-lg p-4">
                        <h5 className="text-lg font-semibold text-white mb-3">Tech Stack</h5>
                        <div className="space-y-2">
                          {project.technologies.map((tech: Technology, index: number) => (
                            <div key={index} className="flex items-center gap-3 text-gray-300">
                              <Icon icon={tech.icon} className="w-5 h-5 text-blue-400" />
                              <span className="text-sm">{tech.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-gray-700/20 rounded-lg p-4">
                        <h5 className="text-lg font-semibold text-white mb-3">Key Achievements</h5>
                        <div className="space-y-2">
                          {project.highlights.map((highlight: string, index: number) => (
                            <div key={index} className="flex items-center gap-3 text-gray-300">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <span className="text-sm">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-8">
            Interested in collaborating or learning more about these projects?
          </p>
          <button 
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1"
            type="button"
          >
            Let&apos;s Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;