// components/SkillsSection.tsx or wherever you're using SkillCard
'use client';
import { useState } from 'react';
import SkillCard from './SkillCard';
import { Skill } from '@/types/about';

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null);

  const handleCardToggle = (index: number) => {
    // If clicking on the already expanded card, close it
    // Otherwise, open the clicked card and close any other
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
}