// types.ts
export interface SubSkill {
  name: string;
  level: 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';
}

export interface Skill {
  name: string;
  level: 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';
  icon: string;
  percentage: number;
  category?: 'frontend' | 'backend' | 'database' | 'design' | 'devops' | 'mobile' | 'tools';
  description?: string;
  subSkills?: SubSkill[];
  experience?: string[];
  relatedTech?: string[];
}

export interface Stat {
  value: string;
  label: string;
  color: 'blue' | 'purple' | 'green' | 'yellow';
}

export interface TechStack {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'tools' | 'design';
}

export type SkillLevel = 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';

export interface AboutData {
  skills: Skill[];
  stats: Stat[];
  techStack: TechStack[];
  bio: {
    title: string;
    description: string;
    paragraphs: string[];
  };
}