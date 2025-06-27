// components/StatsSection.tsx
'use client';
import { useEffect, useState } from 'react';
import { Stat } from '@/types/about';

interface StatsSectionProps {
  stats: Stat[];
}

const getStatColorStyles = (color: Stat['color']) => {
  const styles = {
    blue: 'text-blue-400 from-blue-500/20 to-blue-600/20 border-blue-500/30',
    purple: 'text-purple-400 from-purple-500/20 to-purple-600/20 border-purple-500/30',
    green: 'text-green-400 from-green-500/20 to-green-600/20 border-green-500/30',
    yellow: 'text-yellow-400 from-yellow-500/20 to-yellow-600/20 border-yellow-500/30'
  };
  return styles[color];
};

interface AnimatedStatProps {
  stat: Stat;
  index: number;
}

function AnimatedStat({ stat, index }: AnimatedStatProps) {
  const [isVisible, setIsVisible] = useState(false);
  const colorStyles = getStatColorStyles(stat.color);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 200);
    
    return () => clearTimeout(timer);
  }, [index]);
  
  return (
    <div 
      className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${colorStyles} border backdrop-blur-sm p-6 hover:scale-105 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        transitionDelay: `${index * 100}ms`
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-2 right-2 w-1 h-1 bg-current rounded-full animate-pulse"></div>
        <div className="absolute bottom-3 left-3 w-0.5 h-0.5 bg-current rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/4 w-0.5 h-0.5 bg-current rounded-full animate-pulse delay-300"></div>
      </div>
      
      <div className="relative z-10 text-center">
        <div className={`text-3xl md:text-4xl font-bold mb-2 ${colorStyles.split(' ')[0]} transition-all duration-300 group-hover:scale-110`}>
          {stat.value}
        </div>
        <div className="text-sm text-gray-300 font-medium">
          {stat.label}
        </div>
      </div>
      
      {/* Hover glow effect */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${colorStyles} blur-xl`}></div>
    </div>
  );
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-8">
      {stats.map((stat, index) => (
        <AnimatedStat key={stat.label} stat={stat} index={index} />
      ))}
    </div>
  );
}