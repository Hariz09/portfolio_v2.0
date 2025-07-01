"use client";
import React, { useState, useEffect, JSX } from "react";
import { Icon } from "@iconify/react";
import { statusOptions } from "@/data/status";
import { socialPlatforms } from "@/data/social";
import { SocialPlatform } from "@/types/social";
import Link from "next/link";

export default function Hero(): JSX.Element {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [currentStatusIndex, setCurrentStatusIndex] = useState<number>(0);
  
  useEffect(() => {
    setIsLoaded(true);

    // Cycle through status options
    const statusInterval = setInterval(() => {
      setCurrentStatusIndex((prev) => (prev + 1) % statusOptions.length);
    }, 4000); // Change every 4 seconds

    return () => {
      clearInterval(statusInterval);
    };
  }, []);

  const currentStatus = statusOptions[currentStatusIndex];

  return (
    <section className="min-h-screen relative overflow-hidden">
      
      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Greeting text */}
            <div
              className={`transition-all duration-700 delay-300 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <p className="text-xs sm:text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-4 text-slate-300 hover:text-white transition-colors duration-300">
                Welcome to my digital space
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
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-black mb-6 leading-tight">
                <span className="text-white hover:text-slate-100 transition-colors duration-300">
                  Hi, I&apos;m{" "}
                </span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-400 hover:to-cyan-300 transition-all duration-500">
                  Hariz
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
              <h2 className="text-lg sm:text-xl md:text-3xl mb-8 font-light text-slate-200 hover:text-white transition-colors duration-300">
                Full Stack Developer
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
              <p className="text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-slate-300 hover:text-slate-100 transition-colors duration-300">
                I build complete digital solutions, from front-end user
                experiences to back-end systems. Let&apos;s create something
                extraordinary together!
              </p>
            </div>

            {/* Mobile/Tablet Social Links */}
            <div
              className={`flex justify-center gap-4 mb-8 lg:hidden transition-all duration-700 delay-1100 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {socialPlatforms.map((social: SocialPlatform) => (
                <Link
                  key={social.username}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800/50 border border-slate-600 rounded-full flex items-center justify-center hover:bg-slate-700/50 hover:border-slate-500 transition-all duration-300 group hover:scale-110"
                  title={social.username}
                >
                  <Icon
                    icon={social.icon}
                    className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors duration-300"
                  />
                </Link>
              ))}
            </div>

            {/* Mobile/Tablet Status indicator */}
            <div
              className={`mb-8 lg:hidden transition-all duration-700 delay-1200 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="bg-slate-800/30 border border-slate-600 rounded-2xl p-4 hover:bg-slate-800/50 hover:border-slate-500 transition-all duration-300 group max-w-sm mx-auto">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className={`w-3 h-3 ${currentStatus.color} rounded-full animate-pulse`} />
                  <Icon 
                    icon={currentStatus.icon} 
                    className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors duration-300" 
                  />
                  <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors duration-300">
                    {currentStatus.text}
                  </span>
                </div>
                <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-300 text-center">
                  {currentStatus.description}
                </p>
              </div>
            </div>
            
            {/* Scroll indicator */}
            <div
              className={`transition-all duration-700 delay-1300 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex flex-col items-center cursor-pointer group">
                <span className="text-xs mb-4 tracking-[0.2em] uppercase text-slate-400 group-hover:text-slate-200 transition-colors duration-300">
                  Scroll to explore
                </span>
                <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center group-hover:border-slate-300 transition-colors duration-300">
                  <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-bounce group-hover:bg-slate-200 transition-colors duration-300" />
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
                key={social.username}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/50 border border-slate-600 rounded-full flex items-center justify-center hover:bg-slate-700/50 hover:border-slate-500 transition-all duration-300 group hover:scale-110 hover:-translate-x-2"
                title={social.username}
              >
                <Icon
                  icon={social.icon}
                  className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors duration-300"
                />
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
            <div className="bg-slate-800/30 border border-slate-600 rounded-2xl p-4 hover:bg-slate-800/50 hover:border-slate-500 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-3 h-3 ${currentStatus.color} rounded-full animate-pulse`} />
                <Icon 
                  icon={currentStatus.icon} 
                  className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors duration-300" 
                />
                <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors duration-300">
                  {currentStatus.text}
                </span>
              </div>
              <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                {currentStatus.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}