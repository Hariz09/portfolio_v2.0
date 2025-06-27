export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  docs: string
  image: string;
  color: string;
  featured?: boolean;
}

export interface ShootingStar {
  id: number;
  startX: number;
  startY: number;
  isVisible: boolean;
}

export interface MousePosition {
  x: number;
  y: number;
}

export interface AnimationStyle {
  animationDelay: string;
}

export interface StaticStar {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkle: boolean;
}