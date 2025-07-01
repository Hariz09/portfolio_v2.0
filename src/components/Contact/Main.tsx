'use client'
import React, { useState, useEffect, useRef, JSX } from 'react';
import { Star, Rocket, Code, Terminal, Coffee, Globe } from 'lucide-react';
import { Icon } from '@iconify/react';
import EarthCanvas from './Earth';
import { socialPlatforms } from '@/data/social';
import { SocialPlatform } from '@/types/social';
import Link from 'next/link';
import ContactForm from './Form';

interface ContactInfo {
  icon: JSX.Element;
  label: string;
  value: string;
  href: string;
}

export default function Contact(): JSX.Element {
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(false);
  const [isContactInfoVisible, setIsContactInfoVisible] = useState<boolean>(false);
  const [isEarthVisible, setIsEarthVisible] = useState<boolean>(false);
  
  const headerRef = useRef<HTMLDivElement | null>(null);
  const contactInfoRef = useRef<HTMLDivElement | null>(null);
  const earthRef = useRef<HTMLDivElement | null>(null);

  // Map social platforms
  const contactInfo: ContactInfo[] = [
    ...socialPlatforms.map((platform: SocialPlatform) => ({
      icon: <Icon icon={platform.icon} className="w-8 h-8" />,
      label: platform.platform,
      value: platform.username,
      href: platform.url,
    }))
  ];

  const skills = [
    { icon: <Code className="w-4 h-4" />, name: 'Full Stack Development' },
    { icon: <Terminal className="w-4 h-4" />, name: 'DevOps & Cloud' },
    { icon: <Globe className="w-4 h-4" />, name: 'Web Applications' },
    { icon: <Coffee className="w-4 h-4" />, name: 'Always Learning' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === headerRef.current) {
            setIsHeaderVisible(entry.isIntersecting);
          } else if (entry.target === contactInfoRef.current) {
            setIsContactInfoVisible(entry.isIntersecting);
          } else if (entry.target === earthRef.current) {
            setIsEarthVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (contactInfoRef.current) observer.observe(contactInfoRef.current);
    if (earthRef.current) observer.observe(earthRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <footer id="contact" className="min-h-screen relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Professional Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isHeaderVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-left">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Let&apos;s Build Something{' '}
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
                      Amazing
                    </span>
                  </h2>
                </div>
                
                <p className="text-slate-300 text-lg max-w-2xl mb-6 leading-relaxed">
                  Full-stack developer passionate about creating scalable, user-focused applications. 
                  Ready to turn your ideas into powerful digital solutions.
                </p>

                {/* Skills showcase */}
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-slate-300">
                      {skill.icon}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3D Earth with Credit */}
              <div 
                ref={earthRef}
                className={`relative transition-all duration-1000 ${
                  isEarthVisible 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95'
                }`}
              >
                <div className="relative w-56 h-56 lg:w-64 lg:h-64">
                  <EarthCanvas />
                  {/* NASA Credit */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <p className="text-xs text-slate-400 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                      Image courtesy of NASA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div 
            ref={contactInfoRef}
            className={`transition-all duration-1000 ${
              isContactInfoVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="w-6 h-6 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">Get In Touch</h3>
              </div>
              
              <p className="text-slate-300 mb-8 leading-relaxed">
                I&apos;m always interested in new opportunities, challenging projects, and meaningful collaborations. 
                let&apos;s discuss how we can work together.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Link
                    key={index}
                    href={info.href}
                    target="_blank"
                    className="group flex items-center p-4 bg-white/5 border border-white/10 rounded-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 group-hover:scale-105 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium group-hover:text-cyan-300 transition-colors duration-300">
                        {info.label}
                      </p>
                      <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Status */}
              <div className="mt-8 p-4 bg-emerald-400/10 border border-emerald-400/20 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-emerald-300 text-sm font-medium">Available for new projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Now using the separated component */}
          <ContactForm />
        </div>

        {/* Professional Footer */}
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <p className="text-slate-400 text-sm">
              &copy; 2025 M. Hariz A.
            </p>
            <p className='font-style: italic; text-slate-400 text-sm mb-4'> &quot;The best way to predict the future is to create it together.&quot; </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-400"></div>
              <Star className="w-3 h-3 text-cyan-400" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-400"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}