'use client'
import React, { useState, useEffect, useRef, JSX } from 'react';
import { Mail, Linkedin, Github, Send, MessageCircle, Sparkles, Star, Rocket, Phone } from 'lucide-react';
import { ShootingStar, StaticStar } from '@/types/project';

interface ContactInfo {
  icon: JSX.Element;
  label: string;
  value: string;
  href: string;
  color: string;
}

export default function Contact(): JSX.Element {
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  const [staticStars, setStaticStars] = useState<StaticStar[]>([]);
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(false);
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [isContactInfoVisible, setIsContactInfoVisible] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
  const headerRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);
  const contactInfoRef = useRef<HTMLDivElement | null>(null);

  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'hello@yourname.com',
      href: 'mailto:hello@yourname.com',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: '/in/yourprofile',
      href: 'https://linkedin.com/in/yourprofile',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: '/yourusername',
      href: 'https://github.com/yourusername',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      color: 'from-emerald-400 to-teal-500'
    }
  ];

  useEffect(() => {
    // Generate stars identical to projects component
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === headerRef.current) {
            setIsHeaderVisible(entry.isIntersecting);
          } else if (entry.target === formRef.current) {
            setIsFormVisible(entry.isIntersecting);
          } else if (entry.target === contactInfoRef.current) {
            setIsContactInfoVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (formRef.current) observer.observe(formRef.current);
    if (contactInfoRef.current) observer.observe(contactInfoRef.current);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 via-blue-900 to-sky-600">
      {/* Static Stars Background - Same as Projects */}
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

      {/* Shooting Stars - Same as Projects */}
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

      

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Enhanced Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            isHeaderVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MessageCircle className="w-8 h-8 text-cyan-400 animate-bounce" />
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
                Let&apos;s{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-pulse">
                  Connect
                </span>
              </h2>
              <Sparkles className="w-8 h-8 text-purple-400 animate-spin" style={{ animationDuration: '3s' }} />
            </div>
            
            <p className="text-sky-100 text-xl max-w-3xl mx-auto leading-relaxed mb-6">
              Ready to launch your next digital adventure? Let&apos;s explore the possibilities together across the cosmic web
            </p>

            <div className="flex justify-center">
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div 
            ref={contactInfoRef}
            className={`transition-all duration-1000 ${
              isContactInfoVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 h-full">
              <div className="flex items-center gap-3 mb-8">
                <Rocket className="w-7 h-7 text-cyan-400 animate-bounce" />
                <h3 className="text-3xl font-bold text-white">
                  Mission Control
                </h3>
              </div>
              
              <p className="text-sky-200 mb-8 text-lg leading-relaxed">
                Whether you&apos;re looking to build the next breakthrough app, need a coding companion for your startup journey, or just want to chat about the latest in tech - I&apos;m here and ready to help make your vision a reality.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="group flex items-center p-4 backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-lg group-hover:text-cyan-300 transition-colors duration-300">
                        {info.label}
                      </p>
                      <p className="text-sky-200 group-hover:text-sky-100 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                    
                    {/* Sparkle Effect */}
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Star className="w-5 h-5 text-cyan-400 animate-spin" />
                    </div>
                  </a>
                ))}
              </div>

              {/* Floating Elements */}
              <div className="relative mt-8">
                <div className="absolute -top-2 -left-2 w-6 h-6 opacity-20">
                  <Sparkles className="w-full h-full text-cyan-400 animate-pulse" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 opacity-30">
                  <Star className="w-full h-full text-purple-400 animate-bounce" />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            ref={formRef}
            className={`transition-all duration-1000 ${
              isFormVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 h-full">
              <div className="flex items-center gap-3 mb-8">
                <Send className="w-7 h-7 text-purple-400 animate-pulse" />
                <h3 className="text-3xl font-bold text-white">
                  Send Transmission
                </h3>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sky-200 font-medium mb-3 text-sm uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-sky-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 backdrop-blur-sm hover:bg-white/15"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sky-200 font-medium mb-3 text-sm uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-sky-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 backdrop-blur-sm hover:bg-white/15"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sky-200 font-medium mb-3 text-sm uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-sky-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 backdrop-blur-sm hover:bg-white/15"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sky-200 font-medium mb-3 text-sm uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-sky-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none backdrop-blur-sm hover:bg-white/15"
                    placeholder="Tell me about your project, ideas, or just say hello..."
                    required
                  ></textarea>
                </div>

                <div
                  onClick={handleSubmit}
                  className="group w-full py-4 px-8 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-size-200 hover:bg-pos-100 text-white rounded-2xl font-semibold transition-all duration-500 shadow-xl hover:shadow-cyan-500/30 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      <span>Launch Message</span>
                      <div className="w-2 h-2 bg-white rounded-full animate-ping group-hover:animate-pulse"></div>
                    </>
                  )}
                </div>
              </div>

              {/* Corner Sparkle Effect */}
              <div className="absolute top-4 right-4 w-6 h-6 opacity-30">
                <Sparkles className="w-full h-full text-pink-400 animate-spin" style={{ animationDuration: '4s' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-20">
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 max-w-3xl mx-auto">
            <p className="text-sky-100 text-lg italic mb-4">
              &quot;The best way to predict the future is to create it together.&quot;
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-cyan-400"></div>
              <Star className="w-4 h-4 text-cyan-400 animate-pulse" />
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-cyan-400"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations - Same as Projects */}
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

        .animate-shooting {
          animation: shooting 2s ease-out forwards;
        }

        .bg-size-200 {
          background-size: 200% 200%;
        }
        
        .bg-pos-100 {
          background-position: 100% 0;
        }
      `}</style>
    </section>
  );
}