'use client'
import React, { useState, useEffect } from 'react';
import { StaticStar, ShootingStar } from '@/types/project';

interface StarBackgroundProps {
  className?: string;
}

export default function StarBackground({ className = '' }: StarBackgroundProps) {
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  const [staticStars, setStaticStars] = useState<StaticStar[]>([]);

  useEffect(() => {
    // Generate static stars
    const stars = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      twinkle: Math.random() > 0.7,
    }));

    setStaticStars(stars);

    // Shooting stars animation
    const shootingStarInterval = setInterval(() => {
      const newStar: ShootingStar = {
        id: Date.now(),
        startX: Math.random() * 100,
        startY: Math.random() * 50,
        isVisible: true,
      };

      setShootingStars((prev) => [...prev, newStar]);

      setTimeout(() => {
        setShootingStars((prev) =>
          prev.filter((star) => star.id !== newStar.id)
        );
      }, 2000);
    }, 4000);

    return () => {
      clearInterval(shootingStarInterval);
    };
  }, []);

  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Static Stars */}
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

      {/* Moon */}
      <div className="absolute top-16 right-16 pointer-events-none">
        <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full shadow-2xl shadow-yellow-200/20">
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <div className="absolute top-3 left-5 w-2 h-2 bg-yellow-300/30 rounded-full"></div>
            <div className="absolute top-6 right-6 w-1.5 h-1.5 bg-yellow-300/40 rounded-full"></div>
            <div className="absolute bottom-4 left-6 w-3 h-3 bg-yellow-300/20 rounded-full"></div>
          </div>
        </div>
        <div className="absolute inset-0 w-28 h-28 -top-4 -left-4 bg-yellow-200/10 rounded-full blur-xl"></div>
      </div>
    </div>
  );
}