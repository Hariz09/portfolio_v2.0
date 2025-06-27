export interface ShootingStar {
  id: number;
  startX: number;
  startY: number;
  isVisible: boolean;
}

export interface StaticStar {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    twinkle: boolean;
  }