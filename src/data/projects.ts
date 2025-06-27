import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with real-time inventory management, secure payments, and advanced analytics dashboard.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL'],
    github: '#',
    demo: '#',
    docs: '#',
    image: '/project_2_seamulator.jpg',
    color: 'from-emerald-500 to-teal-600',
    featured: true
  },
  {
    title: 'AI Task Manager',
    description: 'Intelligent task management with AI-powered scheduling, team collaboration, and productivity insights.',
    tech: ['React', 'Python', 'OpenAI', 'FastAPI', 'Redis'],
    github: '#',
    demo: '#',
    docs: '#',
    image: '/project_2_seamulator.jpg',
    color: 'from-purple-500 to-pink-600',
    featured: true
  },
  {
    title: 'Real-time Chat App',
    description: 'Scalable messaging platform with end-to-end encryption, file sharing, and video call integration.',
    tech: ['Socket.io', 'Node.js', 'MongoDB', 'WebRTC', 'Docker'],
    github: '#',
    demo: '#',
    docs: '#',
    image: '/project_2_seamulator.jpg',
    color: 'from-blue-500 to-cyan-600'
  },
];