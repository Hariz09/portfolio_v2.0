"use client";
import React, { useState, useEffect } from "react";

interface ShootingStar {
  id: number;
  startX: number;
  startY: number;
  isVisible: boolean;
}

interface StaticStar {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkle: boolean;
}

interface StarryBackgroundProps {
  backgroundColor?: string;
  staticStarCount?: number;
  shootingStarInterval?: number;
  starColor?: string;
  shootingStarFrequency?: number;
  className?: string;
}

const StarryBackground: React.FC<StarryBackgroundProps> = ({
  backgroundColor = "bg-black",
  staticStarCount = 150,
  shootingStarInterval = 3000,
  starColor = "bg-yellow-400 rounded-full shadow-[0_0_4px_2px_rgba(250,204,21,0.4)] animate-pulse",
  shootingStarFrequency = 2000,
  className = "",
}) => {
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  const [staticStars, setStaticStars] = useState<StaticStar[]>([]);

  useEffect(() => {
    // Generate stars only on client side to avoid hydration mismatch
    const stars = Array.from({ length: staticStarCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      twinkle: Math.random() > 0.7,
    }));

    setStaticStars(stars);

    // Shooting stars animation
    const interval = setInterval(() => {
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
      }, shootingStarFrequency);
    }, shootingStarInterval);

    return () => {
      clearInterval(interval);
    };
  }, [staticStarCount, shootingStarInterval, shootingStarFrequency]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${backgroundColor} ${className}`}>
      {/* Custom CSS for animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
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
        `
      }} />

      {/* Static Stars Background */}
      <div className="absolute inset-0 pointer-events-none">
        {staticStars.map((star) => (
          <div
            key={star.id}
            className={`absolute ${starColor} rounded-full ${
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
                : undefined,
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
                <div className={`w-1 h-1 ${starColor} rounded-full shadow-lg shadow-white/50`}></div>
                <div className="absolute top-0 left-0 w-24 h-0.5 bg-gradient-to-r from-yellow-200 to-transparent origin-left transform -rotate-45"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarryBackground;