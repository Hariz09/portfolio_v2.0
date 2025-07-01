// components/Main.tsx
"use client";
import { Icon } from "@iconify/react";
import { aboutData } from "@/data/about";
import TechSlider from "./TechSlider";
import SkillCard from "./SkillCard";
import AcademicSection from "./Academic";
import { useState } from "react";
import { Sparkles } from "lucide-react";

export default function About() {
  const { skills, techStack } = aboutData;
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null);

  const handleCardToggle = (index: number) => {
    // If clicking on the already expanded card, close it
    // Otherwise, open the clicked card and close any other
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };

  return (
    <section id="about" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
          </div>
          <div className="flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-700 to-transparent w-full max-w-md"></div>
          </div>
        </div>

        {/* Tech Stack Slider */}
        <TechSlider techStack={techStack} />

        {/* Main Content - Vertical Layout */}
        <div className="space-y-12 mt-12">
          {/* Skills Section - Full width, compact grid */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Icon icon="mdi:brain" className="w-8 h-8 text-purple-400" />
              </div>
              Skills & Expertise
            </h3>

            {/* Skills in a responsive grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
              {skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  skill={skill}
                  index={index}
                  isExpanded={expandedCardIndex === index}
                  onToggle={handleCardToggle}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Academic Section - Full Width */}
        <div className="mt-16">
          <AcademicSection />
        </div>
      </div>
    </section>
  );
}
