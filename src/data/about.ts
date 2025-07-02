// data/about.data.ts
import { AboutData, AcademicRecord, Certification } from '../types/about';

export const aboutData: AboutData = {
  bio: {
    title: "About Me",
    description: "I'm a passionate full-stack developer who thrives on creating innovative solutions and exceptional user experiences that make a meaningful impact.",
    paragraphs: [
      "I'm an undergraduate student with over a year of hands-on experience in full-stack web development, driven by a passion for solving complex real-world problems. I recently completed a significant project using Next.js, Supabase (PostgreSQL & Auth), and AWS S3, showcasing my proficiency in modern web technologies and cloud services. I believe in crafting code that's not only functional but also clean and maintainable. Beyond my current projects focused on skill enhancement, I also bring a strong foundation in competitive programming."
    ]
  },
  
  skills: [
    { 
      name: 'Competitive Programming', 
      level: 'Advanced', 
      icon: 'mdi:code-tags',
      category: 'others',
      description: "I've been doing competitive programming for 3 years and completed 1000+ problem sets, achieving Specialist rating on Codeforces with consistent performance in contests.",
      subSkills: [
        { name: 'Data Structures (Arrays, Linked Lists, Stacks, Queues)', level: 'Advanced' },
        { name: 'Advanced Data Structures (Trees, Heaps, Hash Tables)', level: 'Intermediate' },
        { name: 'Graph Algorithms (DFS, BFS, Shortest Path)', level: 'Advanced' },
        { name: 'Dynamic Programming', level: 'Advanced' },
        { name: 'Greedy Algorithms', level: 'Advanced' },
        { name: 'Binary Search & Two Pointers', level: 'Advanced' },
        { name: 'Sorting & Searching Algorithms', level: 'Advanced' },
        { name: 'Contest Strategy & Time Management', level: 'Advanced' },
        { name: 'String Algorithms & Pattern Matching', level: 'Intermediate' },
        { name: 'Number Theory & Mathematical Algorithms', level: 'Beginner' },
        { name: 'Combinatorics & Probability', level: 'Beginner' },
        { name: 'Segment Trees & Fenwick Trees', level: 'Beginner' },
      ],
      experience: [
        'Achieved Specialist rating (1400+) on Codeforces',
        'Solved 1000+ problems across various platforms',
        'Participated in 21 contests',
        'Mentored junior programmers in algorithmic problem solving'
      ],
      relatedTech: ['C++', 'Python', 'Java', 'Algorithms', 'Data Structures']
    },
    {
      name: 'React & Next.js', 
      level: 'Intermediate', 
      icon: 'logos:react',
      category: 'frontend',
      description: "Extensive experience building modern, scalable React applications with Next.js, focusing on performance optimization and user experience.",
      subSkills: [
        { name: 'React Hooks', level: 'Intermediate' },
        { name: 'State Management (Redux/Zustand)', level: 'Intermediate' },
        { name: 'Server Components', level: 'Beginner' },
        { name: 'Performance Optimization', level: 'Beginner' },
        { name: '3D Object Creation (Three.js)', level: 'Intermediate' },
        { name: 'Node-based Editor (ReactFlow)', level: 'Beginner' }
      ],
      experience: [
        'Built a production React applications',
        'Optimized app performance resulting in faster load times',
        'Created reusable component libraries'
      ],
      relatedTech: ['TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Query', 'Three.js', 'ReactFlow']
    },
    { 
      name: 'TypeScript', 
      level: 'Intermediate', 
      icon: 'logos:typescript-icon',
      category: 'frontend',
      description: "Strong foundation in TypeScript for building type-safe React applications, with experience in advanced type patterns and modern development workflows.",
      subSkills: [
        { name: 'Type Definitions & Interfaces', level: 'Intermediate' },
        { name: 'Generic Types', level: 'Intermediate' },
        { name: 'React with TypeScript', level: 'Intermediate' },
        { name: 'Advanced Type Patterns', level: 'Beginner' },
        { name: 'Type Guards & Assertions', level: 'Beginner' },
        { name: 'Module Declaration', level: 'Beginner' }
      ],
      experience: [
        'Developed type-safe React components and hooks',
        'Implemented complex type definitions for API responses',
        'Migrated JavaScript projects to TypeScript',
        'Created reusable typed utility functions'
      ],
      relatedTech: ['React', 'Next.js', 'ESLint', 'Prettier', 'Vite', 'Jest']
    },
    { 
      name: 'Database Design', 
      level: 'Intermediate', 
      icon: 'mdi:database',
      category: 'database',
      description: "Strong foundation in relational database design and SQL development, with experience in PostgreSQL and modern database-as-a-service platforms.",
      subSkills: [
        { name: 'Relational Database Design', level: 'Intermediate' },
        { name: 'SQL Query Writing & Optimization', level: 'Intermediate' },
        { name: 'PostgreSQL Administration', level: 'Intermediate' },
        { name: 'Database Schema Design', level: 'Intermediate' },
        { name: 'Redis Caching Strategies', level: 'Beginner' },
        { name: 'Supabase Integration', level: 'Beginner' }
      ],
      experience: [
        'Designed normalized PostgreSQL schemas for web applications',
        'Wrote complex SQL queries with joins and subqueries',
        'Implemented Redis caching for improved application performance',
        'Built applications using Supabase as backend-as-a-service',
      ],
      relatedTech: ['PostgreSQL', 'Redis', 'Supabase', 'SQL', 'Prisma']
    },
    {
      name: 'Next.js Development',
      level: 'Intermediate',
      icon: 'logos:nextjs-icon',
      category: 'frontend',
      description: "Full-stack React framework development with focus on performance optimization and modern web development patterns.",
      subSkills: [
        { name: 'App Router & Server Components', level: 'Intermediate' },
        { name: 'API Routes Development', level: 'Intermediate' },
        { name: 'SSR/SSG Implementation', level: 'Intermediate' },
        { name: 'Next.js Performance Optimization', level: 'Intermediate' },
        { name: 'Middleware & Edge Functions', level: 'Beginner' },
        { name: 'Vercel Deployment', level: 'Intermediate' }
      ],
      experience: [
        'Built full-stack applications using Next.js App Router',
        'Implemented server-side rendering for improved SEO',
        'Created API endpoints with Next.js API routes',
        'Optimized performance with code splitting and lazy loading'
      ],
      relatedTech: ['React', 'TypeScript', 'Vercel', 'Tailwind CSS']
    },
    { 
      name: 'AWS & Cloud Services', 
      level: 'Beginner', 
      icon: 'skill-icons:aws-dark', 
      category: 'devops',
      description: "Experience with cloud infrastructure, deployment, and management using AWS services and modern DevOps practices.",
      subSkills: [
        { name: 'S3 & CloudFront', level: 'Beginner' },
      ],
      experience: [
        'Deployed application on AWS infrastructure',
        'Implemented auto-scaling for applications handling traffic spikes'
      ],
      relatedTech: ['AWS S3', 'GitHub Actions']
    },
  ],
  
  stats: [
    { value: '5', label: 'Projects Completed', color: 'blue' },
    { value: '3+', label: 'Years Experience', color: 'purple' },
    { value: '∞', label: 'Lines of Code', color: 'yellow' }
  ],
  
  techStack: [
    { name: 'React', icon: 'logos:react', category: 'frontend' },
    { name: 'Next.js', icon: 'logos:nextjs-icon', category: 'frontend' },
    { name: 'TypeScript', icon: 'logos:typescript-icon', category: 'frontend' },
    { name: 'Flutter', icon: 'devicon:flutter', category: 'frontend' },
    { name: 'Dart', icon: 'logos:dart', category: 'frontend' },
    { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon', category: 'frontend' },
    
    { name: 'Node.js', icon: 'logos:nodejs-icon', category: 'backend' },
    { name: 'Python', icon: 'logos:python', category: 'backend' },
    { name: 'JavaScript', icon: 'logos:javascript', category: 'backend' },
    
    { name: 'PostgreSQL', icon: 'logos:postgresql', category: 'database' },
    { name: 'Firebase', icon: 'logos:firebase', category: 'database' },
    { name: 'Redis', icon: 'devicon:redis', category: 'database'},
    { name: 'Supabase', icon: 'skill-icons:supabase-light', category: 'database'},
    
    { name: 'AWS', icon: 'skill-icons:aws-dark', category: 'cloud' },
    { name: 'Resend', icon: 'simple-icons:resend', category: 'cloud'},
    { name: 'Vercel', icon: 'skill-icons:vercel-light', category: 'cloud' },
    { name: 'Netlify', icon: 'logos:netlify-icon', category: 'others'},
    { name: 'Vite', icon: 'logos:vitejs', category: 'others'},
    
    { name: 'Git', icon: 'logos:git-icon', category: 'tools' },
    { name: 'Figma', icon: 'logos:figma', category: 'design' },
    { name: 'Canva', icon: 'devicon:canva', category: 'design'},
    { name: "Shadcn", icon: 'simple-icons:shadcnui', category: 'design'},

    { name: 'Replit', icon: 'devicon:replit', category: 'others'},
    { name: 'Docusaurus', icon: 'logos:docusaurus', category: 'others'},
    { name: 'C++', icon: 'simple-icons:cplusplus', category: 'others'},
    { name: 'C#', icon: 'arcticons:csharp', category: 'others'},
    { name: 'Java', icon: 'logos:java', category: 'others'},
  ]
};


export const academicData = {
  education: [
    {
      id: 1,
      degree: "Bachelor of Computer Science (in progress)",
      institution: "Universitas Indonesia",
      period: "2024 - present",
      imageUrl: "/logos/logo-ui.png",
    }
  ] as AcademicRecord[],
  
  certifications: [
    {
      id: 1,
      name: "The Complete SQL Bootcamp",
      issuer: "Udemy",
      date: "2025",
      credentialUrl: "https://ude.my/UC-aa84fd8c-5cb2-4fc8-be90-bfa36d6c7e94",
      icon: "logos:udemy-icon",
    },
    {
      id: 2,
      name: "Python Introduction",
      issuer: "Udemy",
      date: "2024",
      credentialUrl: "https://www.udemy.com/certificate/UC-3d579acc-4377-4189-856d-f5536c9bcefe/",
      icon: "logos:udemy-icon",
    },
    {
      id: 3,
      name: "Foundations: Data, Data, Everywhere",
      issuer: "Google",
      date: "2023",
      credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/C8EHCR67SU9Q",
      icon: "devicon:google",
    },
  ] as Certification[]
};