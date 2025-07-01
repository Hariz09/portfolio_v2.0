'use client'
import React, { useState, useEffect, useRef, JSX, Suspense } from 'react';
import { Canvas, useFrame, useLoader, ThreeElements } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Mail, Linkedin, Github, Send, MessageCircle, Star, Rocket, Phone, Globe, Zap, Satellite } from 'lucide-react';
import StarryBackground from './StarryBackground';

// Earth Component
type MeshProps = ThreeElements['mesh'];

function RotatingEarth(props: MeshProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const texture = useLoader(THREE.TextureLoader, '/world.jpg');

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} {...props}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

function EarthCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
    >
      <Suspense fallback={null}>
        <RotatingEarth />
      </Suspense>
      
      <OrbitControls 
        autoRotate 
        enableZoom={false}
        enablePan={false}
        autoRotateSpeed={1}
        enableDamping={true}
        dampingFactor={0.05}
      />
    </Canvas>
  );
}

interface ContactInfo {
  icon: JSX.Element;
  label: string;
  value: string;
  href: string;
  color: string;
}

export default function Contact(): JSX.Element {
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(false);
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [isContactInfoVisible, setIsContactInfoVisible] = useState<boolean>(false);
  const [isEarthVisible, setIsEarthVisible] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [transmissionStatus, setTransmissionStatus] = useState<string | null>(null);
  
  const headerRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);
  const contactInfoRef = useRef<HTMLDivElement | null>(null);
  const earthRef = useRef<HTMLDivElement | null>(null);

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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === headerRef.current) {
            setIsHeaderVisible(entry.isIntersecting);
          } else if (entry.target === formRef.current) {
            setIsFormVisible(entry.isIntersecting);
          } else if (entry.target === contactInfoRef.current) {
            setIsContactInfoVisible(entry.isIntersecting);
          } else if (entry.target === earthRef.current) {
            setIsEarthVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (formRef.current) observer.observe(formRef.current);
    if (contactInfoRef.current) observer.observe(contactInfoRef.current);
    if (earthRef.current) observer.observe(earthRef.current);

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
    setTransmissionStatus('Establishing connection...');
    
    // Simulate realistic transmission process
    setTimeout(() => setTransmissionStatus('Encoding message...'), 800);
    setTimeout(() => setTransmissionStatus('Transmitting to Earth...'), 1600);
    setTimeout(() => setTransmissionStatus('Message received!'), 2400);
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
    setTransmissionStatus(null);
  };

  return (
    <section id="contact" className="min-h-screen relative overflow-hidden">
      <StarryBackground
      backgroundColor='bg-gradient-to-b from-gray-900 via-blue-900 to-indigo-900'/>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Enhanced Header with Earth */}
        <div 
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            isHeaderVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 max-w-5xl mx-auto shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                  <Satellite className="w-8 h-8 text-cyan-400 animate-pulse" />
                  <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
                    Establish{' '}
                    <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                      Contact
                    </span>
                  </h2>
                  <Globe className="w-8 h-8 text-purple-400 animate-spin" style={{ animationDuration: '8s' }} />
                </div>
                
                <p className="text-sky-100 text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6">
                  Ready to transmit your ideas across the digital cosmos? Let&apos;s connect and create something extraordinary together.
                </p>

                <div className="flex justify-center lg:justify-start">
                  <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                </div>
              </div>

              {/* 3D Earth - Simplified */}
              <div 
                ref={earthRef}
                className={`w-64 h-64 transition-all duration-1000 ${
                  isEarthVisible 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-75'
                }`}
              >
                <div className="relative w-full h-full">
                  <EarthCanvas />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Enhanced Contact Information */}
          <div 
            ref={contactInfoRef}
            className={`transition-all duration-1000 ${
              isContactInfoVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 h-full shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <Rocket className="w-7 h-7 text-cyan-400" />
                <h3 className="text-3xl font-bold text-white">
                  Mission Control
                </h3>
                <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
              </div>
              
              <p className="text-sky-200 mb-8 text-lg leading-relaxed">
                Whether you&apos;re looking to build the next breakthrough app, need a coding companion for your startup journey, or want to explore the frontiers of technology - I&apos;m here to help navigate your digital expedition.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="group flex items-center p-4 backdrop-blur-sm bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-2xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/15 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/20"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-semibold text-lg group-hover:text-cyan-300 transition-colors duration-300">
                        {info.label}
                      </p>
                      <p className="text-sky-200 group-hover:text-sky-100 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                    
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                      <Star className="w-5 h-5 text-cyan-400 animate-spin" />
                    </div>
                  </a>
                ))}
              </div>

              {/* Enhanced Status Indicators */}
              <div className="mt-8 p-4 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 border border-emerald-400/30 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-300 font-medium">System Online</span>
                  <div className="ml-auto flex gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div 
            ref={formRef}
            className={`transition-all duration-1000 ${
              isFormVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 h-full shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <Send className="w-7 h-7 text-purple-400" />
                <h3 className="text-3xl font-bold text-white">
                  Send Transmission
                </h3>
                <MessageCircle className="w-6 h-6 text-cyan-400 animate-bounce" />
              </div>

              {/* Transmission Status */}
              {transmissionStatus && (
                <div className="mb-6 p-4 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border border-cyan-400/30 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-cyan-300 font-medium">{transmissionStatus}</span>
                  </div>
                </div>
              )}

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
                      placeholder="Commander Name"
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
                      placeholder="command@spacecraft.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sky-200 font-medium mb-3 text-sm uppercase tracking-wider">
                    Mission Codename
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-sky-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 backdrop-blur-sm hover:bg-white/15"
                    placeholder="Project Apollo or Web Revolution"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sky-200 font-medium mb-3 text-sm uppercase tracking-wider">
                    Transmission Data
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-sky-300 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none backdrop-blur-sm hover:bg-white/15"
                    placeholder="Describe your mission objectives, technical requirements, or simply establish first contact..."
                    required
                  ></textarea>
                </div>

                <div
                  onClick={handleSubmit}
                  className="group w-full py-4 px-8 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-size-200 hover:bg-pos-100 text-white rounded-2xl font-semibold transition-all duration-500 shadow-xl hover:shadow-cyan-500/30 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3 cursor-pointer relative overflow-hidden"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-pink-600/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                  
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Transmitting...</span>
                      <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      <span>Launch Transmission</span>
                      <div className="w-2 h-2 bg-white rounded-full animate-ping group-hover:animate-pulse"></div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Quote */}
        <div className="text-center mt-20">
          <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl">
            <div className="flex items-center justify-center gap-4 mb-4">
              <p className="text-sky-100 text-xl italic">
                &quot;The best way to predict future is to create it together.&quot;
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-400"></div>
              <Star className="w-4 h-4 text-cyan-400 animate-pulse" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}