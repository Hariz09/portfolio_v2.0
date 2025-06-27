// components/About.tsx
'use client';
import { Icon } from '@iconify/react';
import { aboutData } from '@/data/about';
import TechSlider from './TechSlider';
import StatsSection from './StatsSection';
import SkillCard from './SkillCard';
import { useState, useEffect } from 'react';
import { ShootingStar, StaticStar } from '@/types/project';

// Animated background component
function AnimatedBackground() {
  const particles = [
    { id: 1, size: 'w-2 h-2', color: 'bg-blue-500/20', position: 'top-20 left-10', animation: 'animate-pulse' },
    { id: 2, size: 'w-1 h-1', color: 'bg-purple-500/30', position: 'top-40 right-20', animation: 'animate-ping' },
    { id: 3, size: 'w-1.5 h-1.5', color: 'bg-green-500/25', position: 'bottom-32 left-1/4', animation: 'animate-pulse' },
    { id: 4, size: 'w-1 h-1', color: 'bg-yellow-500/20', position: 'bottom-20 right-1/3', animation: 'animate-ping' },
    { id: 5, size: 'w-3 h-3', color: 'bg-cyan-500/15', position: 'top-1/2 left-1/2', animation: 'animate-bounce' },
    { id: 6, size: 'w-1.5 h-1.5', color: 'bg-pink-500/25', position: 'top-16 right-1/4', animation: 'animate-pulse delay-1000' },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/5"></div>
      
      {/* Animated particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute ${particle.size} ${particle.color} ${particle.position} ${particle.animation} rounded-full`}
        ></div>
      ))}
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/6 w-20 h-20 border border-blue-500/10 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-1/4 right-1/6 w-16 h-16 border border-purple-500/10 rotate-45 animate-pulse"></div>
    </div>
  );
}

export default function About() {
  const { bio, skills, stats, techStack } = aboutData;

  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  const [staticStars, setStaticStars] = useState<StaticStar[]>([]);
  
  const handleCardToggle = (index: number) => {
    // If clicking on the already expanded card, close it
    // Otherwise, open the clicked card and close any other
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };

  useEffect(() => {
    // Generate stars only on client side to avoid hydration mismatch
    const stars = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      twinkle: Math.random() > 0.7,
    }));

    setStaticStars(stars);

    // Shooting stars animation - less frequent
    const shootingStarInterval = setInterval(() => {
      const newStar: ShootingStar = {
        id: Date.now(),
        startX: Math.random() * 100,
        startY: Math.random() * 50, // Keep in upper half
        isVisible: true,
      };

      setShootingStars((prev) => [...prev, newStar]);

      // Remove star after animation completes
      setTimeout(() => {
        setShootingStars((prev) =>
          prev.filter((star) => star.id !== newStar.id)
        );
      }, 2000);
    }, 3000); // Every 3 seconds

    return () => {
      clearInterval(shootingStarInterval);
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Static Stars Background */}
      <div className="absolute inset-0 pointer-events-none">
        {staticStars.map((star) => (
          <div
            key={star.id}
            className={`absolute bg-white rounded-full ${
              star.twinkle ? "animate-pulse" : ""
            }`}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDuration: star.twinkle
                ? `${Math.random() * 3 + 2}s`
                : "none",
            }}
          />
        ))}
      </div>

      {/* Shooting Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {shootingStars.map((star) => (
          <div
            key={star.id}
            className="absolute"
            style={{
              left: `${star.startX}%`,
              top: `${star.startY}%`,
            }}
          >
            {star.isVisible && (
              <div className="animate-shooting">
                <div className="w-1 h-1 bg-white rounded-full shadow-lg shadow-white/50"></div>
                <div className="absolute top-0 left-0 w-24 h-0.5 bg-gradient-to-r from-white to-transparent origin-left transform -rotate-45"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      <AnimatedBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center my-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text">
            {bio.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {bio.description}
          </p>
        </div>

        {/* Tech Stack Slider */}
        <TechSlider techStack={techStack} />
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Biography Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Icon icon="mdi:account-star" className="w-8 h-8 text-blue-400" />
                </div>
                My Journey
              </h3>
              
              <div className="space-y-6">
                {bio.paragraphs.map((paragraph, index) => (
                  <p 
                    key={index}
                    className="text-gray-300 leading-relaxed text-lg"
                    style={{
                      animationDelay: `${index * 200}ms`,
                      opacity: 0,
                      animation: 'fadeInUp 0.8s ease-out forwards'
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            {/* Stats Section */}
            <StatsSection stats={stats} />
          </div>
          
          {/* Skills Section */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Icon icon="mdi:brain" className="w-8 h-8 text-purple-400" />
              </div>
              Skills & Expertise
            </h3>
            
            <div className="grid gap-4">
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
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes shooting {
          0% {
            transform: translateX(0) translateY(0) scale(0);
            opacity: 0;
          }
          10% {
            transform: translateX(0) translateY(0) scale(1);
            opacity: 1;
          }
          90% {
            transform: translateX(-600px) translateY(600px) scale(1);
            opacity: 0.3;
          }
          100% {
            transform: translateX(-800px) translateY(800px) scale(0);
            opacity: 0;
          }
        }

        .animate-shooting {
          animation: shooting 2s ease-out forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}