// components/SkillCard.tsx
'use client';
import { Icon } from '@iconify/react';
import { Skill } from '@/types/about';

interface SkillCardProps {
  skill: Skill;
  index: number;
  isExpanded: boolean;
  onToggle: (index: number) => void;
}

const getSkillLevelStyles = (level: Skill['level']) => {
  const styles = {
    Expert: {
      badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      glow: 'group-hover:shadow-emerald-500/20',
      ring: 'ring-emerald-500/30'
    },
    Advanced: {
      badge: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      glow: 'group-hover:shadow-blue-500/20',
      ring: 'ring-blue-500/30'
    },
    Intermediate: {
      badge: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
      glow: 'group-hover:shadow-amber-500/20',
      ring: 'ring-amber-500/30'
    },
    Beginner: {
      badge: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      glow: 'group-hover:shadow-purple-500/20',
      ring: 'ring-purple-500/30'
    }
  };
  return styles[level];
};

const getSubSkillLevelColor = (level: string) => {
  switch (level.toLowerCase()) {
    case 'expert':
      return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
    case 'advanced':
      return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
    case 'intermediate':
      return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
    case 'beginner':
      return 'text-purple-400 bg-purple-500/10 border-purple-500/20';
    default:
      return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
  }
};

export default function SkillCard({ skill, index, isExpanded, onToggle }: SkillCardProps) {
  const styles = getSkillLevelStyles(skill.level);
  
  return (
    <div 
      className={`group bg-gray-900/70 hover:bg-gray-800/70 rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:shadow-lg ${styles.glow} ${isExpanded ? `ring-2 ${styles.ring}` : ''}`}
      style={{ 
        animationDelay: `${index * 150}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      {/* Main Card Content */}
      <div 
        className="p-5 cursor-pointer"
        onClick={() => onToggle(index)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Icon 
                icon={skill.icon} 
                className="w-7 h-7 text-blue-400 group-hover:scale-110 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-200 font-semibold">{skill.name}</span>
              <span className="text-xs text-gray-500 capitalize">{skill.category}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-xs px-3 py-1.5 rounded-full font-semibold border ${styles.badge}`}>
              {skill.level}
            </span>
            <Icon 
              icon={isExpanded ? "mdi:chevron-up" : "mdi:chevron-down"} 
              className="w-5 h-5 text-gray-400 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Expandable Content with Custom Scrolling */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="border-t border-gray-700/50">
          <div 
            className="max-h-80 overflow-y-auto px-5 py-4 space-y-4"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#4b5563 #1f2937',
            }}
          >
            {/* Description */}
            {skill.description && (
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                  <Icon icon="mdi:information-outline" className="w-4 h-4 text-blue-400" />
                  About
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            )}

            {/* Sub-skills */}
            {skill.subSkills && skill.subSkills.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                  <Icon icon="mdi:puzzle-outline" className="w-4 h-4 text-purple-400" />
                  Specialized Areas
                </h4>
                <div className="space-y-2">
                  {skill.subSkills.map((subSkill, subIndex) => (
                    <div key={subIndex} className="flex items-center justify-between p-2 bg-gray-800/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{subSkill.name}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full border ${getSubSkillLevelColor(subSkill.level)}`}>
                        {subSkill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Experience/Achievements */}
            {skill.experience && (
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                  <Icon icon="mdi:trophy-outline" className="w-4 h-4 text-yellow-400" />
                  Experience & Achievements
                </h4>
                <div className="space-y-2">
                  {skill.experience.map((exp, expIndex) => (
                    <div key={expIndex} className="flex items-start gap-2 text-sm text-gray-400">
                      <Icon icon="mdi:check-circle" className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{exp}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Technologies */}
            {skill.relatedTech && skill.relatedTech.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                  <Icon icon="mdi:cog-outline" className="w-4 h-4 text-cyan-400" />
                  Related Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skill.relatedTech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-gray-700/50 text-gray-300 rounded-md border border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}