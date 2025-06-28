"use client";
import React, { useState, useEffect, JSX } from "react";
import { Icon } from "@iconify/react";
import { ShootingStar, StaticStar } from "@/types/project";

interface SocialPlatform {
  name: string;
  icon: string;
  url: string;
}

interface StatusOption {
  text: string;
  color: string;
  pulseColor: string;
  icon: string;
  description: string;
}

export default function Hero(): JSX.Element {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  const [staticStars, setStaticStars] = useState<StaticStar[]>([]);
  const [currentStatusIndex, setCurrentStatusIndex] = useState<number>(0);

  const statusOptions: StatusOption[] = [
    {
      text: "Available for new projects",
      color: "bg-green-400",
      pulseColor: "group-hover/status:bg-green-300",
      icon: "mdi:rocket-launch",
      description: "Ready to launch your next idea"
    },
    {
      text: "Currently on holiday",
      color: "bg-amber-400",
      pulseColor: "group-hover/status:bg-amber-300",
      icon: "mdi:palm-tree",
      description: "Exploring new galaxies"
    },
    {
      text: "In deep work mode",
      color: "bg-purple-400",
      pulseColor: "group-hover/status:bg-purple-300",
      icon: "mdi:brain",
      description: "Crafting digital experiences"
    },
    {
      text: "Open to collaborations",
      color: "bg-blue-400",
      pulseColor: "group-hover/status:bg-blue-300",
      icon: "mdi:handshake",
      description: "Let's build something together"
    }
  ];

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
    setIsLoaded(true);

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

    // Cycle through status options
    const statusInterval = setInterval(() => {
      setCurrentStatusIndex((prev) => (prev + 1) % statusOptions.length);
    }, 4000); // Change every 4 seconds

    return () => {
      clearInterval(shootingStarInterval);
      clearInterval(statusInterval);
    };
  }, [statusOptions.length]);

  const socialPlatforms: SocialPlatform[] = [
    {
      name: "GitHub",
      icon: "logos:github-icon",
      url: "https://github.com/Hariz09",
    },
    {
      name: "LinkedIn",
      icon: "logos:linkedin-icon",
      url: "https://www.linkedin.com/in/m-hariz/",
    },
    {
      name: "Gmail",
      icon: "logos:google-gmail",
      url: "mailto:harizof@gmail.com",
    },
  ];

  const currentStatus = statusOptions[currentStatusIndex];

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-purple-900 via-purple-600 to-black">
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

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Glassmorphism card */}
          <div
            className={`group backdrop-blur-lg bg-white/20 border border-white/40 rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl transition-all duration-1000 hover:bg-white/30 hover:border-white/60 hover:shadow-cyan-400/20 hover:shadow-2xl hover:scale-[1.02] ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Greeting text */}
            <div
              className={`transition-all duration-700 delay-300 group-hover:scale-105 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <p
                className="text-xs sm:text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-4 transition-all duration-500 relative"
                style={{
                  background: 'linear-gradient(45deg, #e0e7ff, #c7d2fe, #a5b4fc, #818cf8)',
                  backgroundSize: '300% 300%',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  animation: 'cosmic-text 4s ease-in-out infinite',
                  textShadow: '0 0 20px rgba(129, 140, 248, 0.5)',
                  filter: 'drop-shadow(0 0 8px rgba(129, 140, 248, 0.3))'
                }}
              >
                Welcome to my digital space
                <span className="absolute -inset-1 bg-gradient-to-r from-indigo-400/20 via-purple-400/20 to-cyan-400/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></span>
              </p>
            </div>

            {/* Name */}
            <div
              className={`transition-all duration-700 delay-500 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-black mb-6 leading-tight group-hover:scale-105 transition-transform duration-500">
                <span 
                  className="hover:scale-105 transition-all duration-300 relative inline-block"
                  style={{
                    background: 'linear-gradient(135deg, #f8fafc, #e2e8f0, #cbd5e1)',
                    backgroundSize: '200% 200%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    animation: 'shimmer 3s ease-in-out infinite',
                    textShadow: '0 0 30px rgba(248, 250, 252, 0.5)',
                    filter: 'drop-shadow(0 0 10px rgba(248, 250, 252, 0.3))'
                  }}
                >
                  Hi, I&apos;m{" "}
                </span>
                <span 
                  className="pl-2 relative inline-block hover:scale-110 transition-all duration-500"
                  style={{
                    background: 'linear-gradient(135deg, #8b5cf6, #06b6d4, #3b82f6, #8b5cf6)',
                    backgroundSize: '400% 400%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    animation: 'cosmic-gradient 4s ease-in-out infinite',
                    textShadow: '0 0 30px rgba(139, 92, 246, 0.7)',
                    filter: 'drop-shadow(0 0 15px rgba(139, 92, 246, 0.4))'
                  }}
                >
                  Hariz
                  <span className="absolute -inset-2 bg-gradient-to-r from-violet-400/30 via-sky-400/30 to-blue-400/30 rounded-xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500 -z-10"></span>
                </span>
              </h1>
            </div>

            {/* Title */}
            <div
              className={`transition-all duration-700 delay-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <h2 
                className="text-lg sm:text-xl md:text-3xl mb-8 font-light hover:scale-105 transition-all duration-500 relative"
                style={{
                  background: 'linear-gradient(90deg, #7dd3fc, #93c5fd, #a5b4fc, #c4b5fd)',
                  backgroundSize: '300% 300%',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  animation: 'wave-text 5s ease-in-out infinite',
                  textShadow: '0 0 20px rgba(125, 211, 252, 0.5)',
                  filter: 'drop-shadow(0 0 8px rgba(125, 211, 252, 0.3))'
                }}
              >
                Full Stack Developer
                <span className="absolute -inset-1 bg-gradient-to-r from-sky-300/20 via-blue-300/20 to-indigo-300/20 rounded-lg blur-sm opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"></span>
              </h2>
            </div>

            {/* Description */}
            <div
              className={`transition-all duration-700 delay-900 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <p 
                className="text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed hover:scale-[1.02] transition-all duration-500 relative"
                style={{
                  background: 'linear-gradient(45deg, #f1f5f9, #e2e8f0, #cbd5e1, #94a3b8)',
                  backgroundSize: '300% 300%',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  animation: 'subtle-glow 6s ease-in-out infinite',
                  textShadow: '0 0 15px rgba(241, 245, 249, 0.4)',
                  filter: 'drop-shadow(0 0 6px rgba(241, 245, 249, 0.2))'
                }}
              >
                I build complete digital solutions, from front-end user
                experiences to back-end systems. Let&apos;s create something
                extraordinary together!
                <span className="absolute -inset-2 bg-gradient-to-r from-slate-300/10 via-slate-200/10 to-slate-300/10 rounded-xl blur-md opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"></span>
              </p>
            </div>

            {/* Mobile/Tablet Social Links */}
            <div
              className={`flex justify-center gap-4 mb-8 lg:hidden transition-all duration-700 delay-1100 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {socialPlatforms.map((social: SocialPlatform) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-12 h-12 backdrop-blur-lg bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/25 hover:border-white/40 transition-all duration-300 cursor-pointer group/social hover:scale-125 transform-gpu"
                  title={social.name}
                  style={{
                    boxShadow: `
                      0 0 20px rgba(251, 146, 60, 0.5),
                      0 0 40px rgba(251, 146, 60, 0.3),
                      0 0 60px rgba(251, 146, 60, 0.2),
                      inset 0 0 15px rgba(255, 255, 255, 0.1)
                    `,
                    filter: 'drop-shadow(0 0 8px rgba(251, 146, 60, 0.4))'
                  }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-300/70 via-amber-300/60 to-amber-300/50 blur-md animate-pulse"></div>
                  <div className="absolute -inset-4 rounded-full bg-gradient-radial from-amber-200/25 via-amber-200/15 to-transparent opacity-80 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-amber-100/30 via-amber-200/25 to-amber-300/20 opacity-70"></div>
                  
                  <Icon
                    icon={social.icon}
                    className="relative z-10 w-5 h-5 text-orange-100 group-hover/social:scale-110 group-hover/social:rotate-12 group-hover/social:text-orange-50 transition-all duration-300"
                    style={{
                      filter: 'drop-shadow(0 0 4px rgba(251, 146, 60, 0.8))',
                      textShadow: '0 0 8px rgba(251, 146, 60, 0.7)'
                    }}
                  />
                  
                  <div className="absolute -inset-4 rounded-full bg-gradient-radial from-orange-400/25 via-orange-400/15 to-transparent opacity-0 group-hover/social:opacity-100 transition-all duration-300 blur-md"></div>
                </a>
              ))}
            </div>

            {/* Mobile/Tablet Status indicator */}
            <div
              className={`mb-8 lg:hidden transition-all duration-700 delay-1200 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-4 hover:bg-white/15 hover:border-white/30 transition-all duration-300 cursor-pointer group/status hover:scale-105 max-w-sm mx-auto">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className={`w-3 h-3 ${currentStatus.color} rounded-full animate-pulse ${currentStatus.pulseColor} group-hover/status:scale-125 transition-all duration-300`} />
                  <Icon 
                    icon={currentStatus.icon} 
                    className="w-4 h-4 text-sky-200 group-hover/status:text-white group-hover/status:scale-110 transition-all duration-300" 
                  />
                  <span 
                    className="text-sm font-medium group-hover/status:scale-105 transition-all duration-300 text-center"
                    style={{
                      background: 'linear-gradient(45deg, #e0e7ff, #c7d2fe, #a5b4fc)',
                      backgroundSize: '200% 200%',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      animation: 'status-glow 3s ease-in-out infinite'
                    }}
                  >
                    {currentStatus.text}
                  </span>
                </div>
                <p 
                  className="text-xs opacity-70 group-hover/status:opacity-100 transition-opacity duration-300 text-center"
                  style={{
                    color: '#e2e8f0',
                    textShadow: '0 0 10px rgba(226, 232, 240, 0.3)'
                  }}
                >
                  {currentStatus.description}
                </p>
              </div>
            </div>
            
            {/* Scroll indicator */}
            <div
              className={`transition-all duration-700 delay-1300 hover:scale-110 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex flex-col items-center cursor-pointer group/scroll">
                <span 
                  className="text-xs mb-2 tracking-[0.2em] uppercase group-hover/scroll:scale-105 transition-all duration-300 relative"
                  style={{
                    background: 'linear-gradient(45deg, #22d3ee, #06b6d4, #0891b2)',
                    backgroundSize: '200% 200%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    animation: 'glow-pulse 3s ease-in-out infinite',
                    textShadow: '0 0 15px rgba(34, 211, 238, 0.5)',
                    filter: 'drop-shadow(0 0 6px rgba(34, 211, 238, 0.3))'
                  }}
                >
                  Scroll to explore
                </span>
                <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center group-hover/scroll:border-white group-hover/scroll:shadow-lg group-hover/scroll:shadow-cyan-300/50 transition-all duration-300 relative">
                  <div className="w-1 h-3 bg-cyan-300 rounded-full mt-2 animate-bounce group-hover/scroll:bg-white" />
                  <div className="absolute -inset-1 bg-gradient-to-t from-cyan-400/20 to-transparent rounded-full blur-sm opacity-50 group-hover/scroll:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop floating social links */}
          <div
            className={`absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-4 transition-all duration-700 delay-1500 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
          >
            {socialPlatforms.map((social: SocialPlatform) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-12 h-12 backdrop-blur-lg bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/25 hover:border-white/40 transition-all duration-300 cursor-pointer group/social hover:scale-125 hover:-translate-x-2 transform-gpu"
                title={social.name}
                style={{
                  boxShadow: `
                    0 0 20px rgba(251, 146, 60, 0.5),
                    0 0 40px rgba(251, 146, 60, 0.3),
                    0 0 60px rgba(251, 146, 60, 0.2),
                    inset 0 0 15px rgba(255, 255, 255, 0.1)
                  `,
                  filter: 'drop-shadow(0 0 8px rgba(251, 146, 60, 0.4))'
                }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-300/70 via-amber-300/60 to-amber-300/50 blur-md animate-pulse"></div>
                <div className="absolute -inset-4 rounded-full bg-gradient-radial from-amber-200/25 via-amber-200/15 to-transparent opacity-80 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-amber-100/30 via-amber-200/25 to-amber-300/20 opacity-70"></div>
                
                <Icon
                  icon={social.icon}
                  className="relative z-10 w-5 h-5 text-orange-100 group-hover/social:scale-110 group-hover/social:rotate-12 group-hover/social:text-orange-50 transition-all duration-300"
                  style={{
                    filter: 'drop-shadow(0 0 4px rgba(251, 146, 60, 0.8))',
                    textShadow: '0 0 8px rgba(251, 146, 60, 0.7)'
                  }}
                />
                
                <div className="absolute -inset-4 rounded-full bg-gradient-radial from-orange-400/25 via-orange-400/15 to-transparent opacity-0 group-hover/social:opacity-100 transition-all duration-300 blur-md"></div>
              </a>
            ))}
          </div>

          {/* Desktop Status indicator */}
          <div
            className={`absolute left-8 bottom-8 hidden lg:block transition-all duration-700 delay-1700 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4"
            }`}
          >
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-4 hover:bg-white/15 hover:border-white/30 transition-all duration-300 cursor-pointer group/status hover:scale-105">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-3 h-3 ${currentStatus.color} rounded-full animate-pulse ${currentStatus.pulseColor} group-hover/status:scale-125 transition-all duration-300`} />
                <Icon 
                  icon={currentStatus.icon} 
                  className="w-4 h-4 text-sky-200 group-hover/status:text-white group-hover/status:scale-110 transition-all duration-300" 
                />
                <span 
                  className="text-sm font-medium group-hover/status:scale-105 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(45deg, #e0e7ff, #c7d2fe, #a5b4fc)',
                    backgroundSize: '200% 200%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    animation: 'status-glow 3s ease-in-out infinite'
                  }}
                >
                  {currentStatus.text}
                </span>
              </div>
              <p 
                className="text-xs opacity-70 group-hover/status:opacity-100 transition-opacity duration-300"
                style={{
                  color: '#e2e8f0',
                  textShadow: '0 0 10px rgba(226, 232, 240, 0.3)'
                }}
              >
                {currentStatus.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom animations */}
      <style jsx>{`
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

        @keyframes cosmic-text {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes shimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes cosmic-gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 200% 50%;
          }
          75% {
            background-position: 300% 50%;
          }
        }

        @keyframes wave-text {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes subtle-glow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes status-glow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-shooting {
          animation: shooting 2s ease-out forwards;
        }
      `}</style>
    </section>
  );
}