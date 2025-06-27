'use client'
import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
// Types
interface Point {
  x: number;
  y: number;
}

interface MovingBorderProps {
  children?: React.ReactNode;
  duration?: number;
  className?: string;
}

interface MovingBorderButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
  isActive?: boolean;
}

interface NavItem {
  href: string;
  label: string;
}

// Moving Border Component
const MovingBorder: React.FC<MovingBorderProps> = ({ 
  duration = 2000, 
  className = "" 
}) => {
  const pathRef = useRef<SVGRectElement>(null);
  const [progress, setProgress] = useState<number>(0);
  const [pathLength, setPathLength] = useState<number>(0);

  useEffect(() => {
    const updatePathLength = () => {
      if (pathRef.current) {
        try {
          const length = pathRef.current.getTotalLength();
          setPathLength(length);
        } catch (error) {
          // Fallback calculation for rect perimeter
          const rect = pathRef.current.getBoundingClientRect();
          const perimeter = 2 * (rect.width + rect.height);
          setPathLength(perimeter);
          console.log(error)
        }
      }
    };

    // Wait for the element to be rendered
    const timer = setTimeout(updatePathLength, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!pathLength) return;

    let animationId: number;
    let startTime: number | null = null;

    const animate = (timestamp: number): void => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      const newProgress = (elapsed * pathLength / duration) % pathLength;
      setProgress(newProgress);
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [duration, pathLength]);

  const getPoint = useCallback((): Point => {
    if (!pathRef.current || !pathLength) return { x: 0, y: 0 };
    
    try {
      return pathRef.current.getPointAtLength(progress);
    } catch (error) {
      console.log(error)
      // Fallback calculation for rect path
      const rect = pathRef.current.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const perimeter = 2 * (w + h);
      const normalizedProgress = (progress % perimeter) / perimeter;
      
      if (normalizedProgress < 0.25) {
        // Top edge
        return { x: normalizedProgress * 4 * w, y: 0 };
      } else if (normalizedProgress < 0.5) {
        // Right edge
        return { x: w, y: (normalizedProgress - 0.25) * 4 * h };
      } else if (normalizedProgress < 0.75) {
        // Bottom edge
        return { x: w - (normalizedProgress - 0.5) * 4 * w, y: h };
      } else {
        // Left edge
        return { x: 0, y: h - (normalizedProgress - 0.75) * 4 * h };
      }
    }
  }, [progress, pathLength]);

  const point = getPoint();

  return (
    <div className="absolute inset-0 overflow-hidden rounded-xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
      >
        <rect
          fill="none"
          stroke="none"
          width="100%"
          height="100%"
          rx="12"
          ry="12"
          ref={pathRef}
        />
      </svg>
      <div
        className={`absolute w-6 h-6 rounded-full ${className}`}
        style={{
          left: `${point.x}px`,
          top: `${point.y}px`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(147, 51, 234, 0.8) 50%, transparent 70%)',
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(147, 51, 234, 0.4)',
        }}
      />
    </div>
  );
};

// Moving Border Button Component
const MovingBorderButton: React.FC<MovingBorderButtonProps> = ({ 
  children, 
  href, 
  onClick, 
  className = "", 
  isActive = false 
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (onClick) onClick(e);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl p-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent">
        {(isHovered || isActive) && (
          <MovingBorder 
            duration={1500} 
            className="opacity-100"
          />
        )}
        <a
          href={href}
          onClick={handleClick}
          className={`
            relative flex items-center justify-center px-6 py-3 rounded-xl
            bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl
            border border-white/30 dark:border-gray-700/30
            text-gray-700 dark:text-gray-300
            font-medium text-sm
            transition-all duration-500 ease-out
            group-hover:text-gray-900 dark:group-hover:text-white
            group-hover:bg-white/90 dark:group-hover:bg-gray-800/90
            group-hover:border-blue-500/50 dark:group-hover:border-purple-500/50
            group-hover:shadow-lg group-hover:shadow-blue-500/25 dark:group-hover:shadow-purple-500/25
            ${isActive ? 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20' : ''}
            ${className}
          `}
        >
          <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
            {children}
          </span>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500" />
        </a>
      </div>
    </div>
  );
};

// Main Header Component
const ModernHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('about');

  const navItems: NavItem[] = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (section: string): void => {
    setActiveSection(section);
  };

  const handleMobileNavClick = (section: string): void => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  const toggleMobileMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-white/60 dark:bg-gray-900/60 border-b border-white/20 dark:border-gray-700/20 shadow-xl shadow-black/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="group relative text-2xl font-bold transition-all duration-500"
            >
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 transition-all duration-500">
                Muhammad Hariz Albaari
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-2">
              {navItems.map((item: NavItem) => (
                <MovingBorderButton
                  key={`${item.href}-${item.label}`}
                  href={item.href}
                  isActive={activeSection === item.href.slice(1)}
                  onClick={() => handleNavClick(item.href.slice(1))}
                >
                  {item.label}
                </MovingBorderButton>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <MovingBorderButton
              onClick={toggleMobileMenu}
              className="p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </MovingBorderButton>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 ease-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="py-4 space-y-3">
            {navItems.map((item: NavItem) => (
              <MovingBorderButton
                key={`mobile-${item.href}-${item.label}`}
                href={item.href}
                isActive={activeSection === item.href.slice(1)}
                onClick={() => handleMobileNavClick(item.href.slice(1))}
                className="w-full text-center"
              >
                {item.label}
              </MovingBorderButton>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default ModernHeader;