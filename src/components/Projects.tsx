"use client";
import React from "react";
import Image from "next/image";
import { ExternalLink, Sparkles, BookOpen } from "lucide-react";
import { Icon } from "@iconify/react";
import { projects } from "../data/projects";
import { Project, Technology } from "@/types/project";

const ProjectsSection: React.FC = () => {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Cosmic decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />
            <h2 className="pb-4 text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
              Projects
            </h2>
            <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
            Each project represents a unique challenge conquered through
            creative problem-solving and technical excellence.
          </p>
          <div className="flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-700 to-transparent w-full max-w-md"></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-12 lg:gap-16">
          {projects.map((project: Project, index: number) => (
            <div
              key={project.id}
              className={`group relative ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } flex flex-col lg:flex lg:items-center lg:gap-12`}
            >
              {/* Project Card */}
              <div className="lg:w-1/2 relative">
                <div className="relative bg-gradient-to-br from-gray-800/40 via-gray-800/30 to-purple-900/20 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 group-hover:scale-105">
                  {/* Cosmic glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div className="relative p-8">
                    {/* Project Header */}
                    <div className="flex items-start gap-6 mb-8">
                      <div className="relative">
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
                          <Image
                            src={project.iconPath}
                            alt={`${project.title} icon`}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/20">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Project Description */}
                    <div className="mb-8">
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map(
                          (tech: Technology, techIndex: number) => (
                            <div
                              key={techIndex}
                              className="group/tech flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 text-purple-300 rounded-full text-sm font-medium transition-all duration-300 border border-purple-500/20 hover:border-purple-400/40 hover:scale-105"
                            >
                              <Icon
                                icon={tech.icon}
                                className="w-4 h-4 group-hover/tech:scale-110 group-hover/tech:text-white transition-all"
                              />
                              <span className="group-hover/tech:text-white transition-colors">
                                {tech.name}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={project.liveUrl}
                        className="group/btn flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 transform hover:-translate-y-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                        <span>Web</span>
                      </a>
                      {project.docsUrl && (
                        <a
                          href={project.docsUrl}
                          className="group/btn flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BookOpen className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                          <span>Docs</span>
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        className="group/btn flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25 transform hover:-translate-y-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon
                          icon="iconoir:github"
                          className="w-5 h-5 group-hover/btn:scale-110 transition-transform"
                        />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Highlights */}
              <div className="lg:w-1/2 mt-8 lg:mt-0">
                <div className="relative">
                  <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
                    Key Achievements
                  </h4>
                  <div className="space-y-4">
                    {project.highlights.map(
                      (highlight: string, highlightIndex: number) => (
                        <div
                          key={highlightIndex}
                          className="group/highlight relative overflow-hidden bg-gradient-to-r from-gray-800/30 to-gray-700/20 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/10"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover/highlight:opacity-100 transition-opacity duration-500"></div>
                          <div className="relative flex items-center gap-4">
                            <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full animate-pulse flex-shrink-0"></div>
                            <span className="text-gray-300 group-hover/highlight:text-white transition-colors font-medium">
                              {highlight}
                            </span>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Connecting line for cosmic effect */}
              {index < projects.length - 1 && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 w-px h-16 bg-gradient-to-b from-cyan-500/50 to-transparent hidden lg:block"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
