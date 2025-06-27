// data/about.data.ts
import { AboutData } from '../types/about';

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
      name: 'React & Next.js', 
      level: 'Expert', 
      icon: 'logos:react', 
      percentage: 95,
      category: 'frontend',
      description: "Extensive experience building modern, scalable React applications with Next.js, focusing on performance optimization and user experience.",
      subSkills: [
        { name: 'React Hooks', level: 'Expert' },
        { name: 'State Management (Redux/Zustand)', level: 'Expert' },
        { name: 'Server Components', level: 'Advanced' },
        { name: 'Performance Optimization', level: 'Advanced' },
        { name: 'Testing (Jest/RTL)', level: 'Intermediate' }
      ],
      experience: [
        'Built 15+ production React applications',
        'Optimized app performance resulting in 40% faster load times',
        'Implemented complex state management for enterprise applications',
        'Created reusable component libraries used by 5+ teams'
      ],
      relatedTech: ['TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Query', 'Webpack', 'Vite']
    },
    { 
      name: 'TypeScript', 
      level: 'Expert', 
      icon: 'logos:typescript-icon', 
      percentage: 90,
      category: 'frontend',
      description: "Deep expertise in TypeScript for building type-safe, maintainable applications with advanced type system features.",
      subSkills: [
        { name: 'Advanced Types', level: 'Expert' },
        { name: 'Generics & Utility Types', level: 'Expert' },
        { name: 'Decorators', level: 'Advanced' },
        { name: 'Module System', level: 'Advanced' },
        { name: 'Type Guards', level: 'Intermediate' }
      ],
      experience: [
        'Migrated 5+ JavaScript codebases to TypeScript',
        'Created complex type definitions for third-party libraries',
        'Reduced runtime errors by 60% through strict typing',
        'Established TypeScript best practices for development teams'
      ],
      relatedTech: ['JavaScript', 'Node.js', 'React', 'Express', 'Prisma', 'GraphQL']
    },
    { 
      name: 'Node.js & Express', 
      level: 'Advanced', 
      icon: 'logos:nodejs-icon', 
      percentage: 85,
      category: 'backend',
      description: "Proficient in building robust backend APIs and microservices using Node.js and Express with focus on scalability and security.",
      subSkills: [
        { name: 'RESTful APIs', level: 'Expert' },
        { name: 'Authentication & Authorization', level: 'Advanced' },
        { name: 'Database Integration', level: 'Advanced' },
        { name: 'Microservices Architecture', level: 'Intermediate' },
        { name: 'WebSocket Implementation', level: 'Intermediate' }
      ],
      experience: [
        'Built 10+ REST APIs serving 1M+ requests daily',
        'Implemented JWT authentication for secure applications',
        'Optimized database queries reducing response time by 50%',
        'Deployed scalable microservices using Docker and Kubernetes'
      ],
      relatedTech: ['Express.js', 'Fastify', 'MongoDB', 'PostgreSQL', 'Redis', 'JWT', 'Passport.js']
    },
    { 
      name: 'Database Design', 
      level: 'Advanced', 
      icon: 'mdi:database', 
      percentage: 82,
      category: 'database',
      description: "Experienced in designing efficient database schemas and optimizing queries for both SQL and NoSQL databases.",
      subSkills: [
        { name: 'SQL Query Optimization', level: 'Advanced' },
        { name: 'Database Normalization', level: 'Advanced' },
        { name: 'Indexing Strategies', level: 'Intermediate' },
        { name: 'NoSQL Design Patterns', level: 'Intermediate' },
        { name: 'Database Migrations', level: 'Advanced' }
      ],
      experience: [
        'Designed databases for 8+ production applications',
        'Optimized queries resulting in 70% performance improvement',
        'Managed database migrations for applications with 1M+ records',
        'Implemented caching strategies reducing database load by 40%'
      ],
      relatedTech: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Mongoose', 'SQL', 'Database Indexing']
    },
    { 
      name: 'Competitive Programming', 
      level: 'Advanced', 
      icon: 'mdi:code-tags', 
      percentage: 80,
      category: 'backend',
      description: "I've been doing competitive programming for 3 years and completed 1000+ problem sets, achieving Specialist rating on Codeforces with consistent performance in contests.",
      subSkills: [
        { name: 'Brute Force', level: 'Expert' },
        { name: 'Divide and Conquer', level: 'Expert' },
        { name: 'Two Pointers', level: 'Expert' },
        { name: 'Dynamic Programming', level: 'Advanced' },
        { name: 'Graph Algorithms (BFS, DFS)', level: 'Intermediate' },
        { name: 'Tree Algorithms', level: 'Beginner' }
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
      name: 'Python & FastAPI', 
      level: 'Advanced', 
      icon: 'logos:python', 
      percentage: 80,
      category: 'backend',
      description: "Proficient in Python development with FastAPI for building high-performance APIs and data processing applications.",
      subSkills: [
        { name: 'FastAPI Development', level: 'Advanced' },
        { name: 'Async Programming', level: 'Advanced' },
        { name: 'Data Processing', level: 'Intermediate' },
        { name: 'Machine Learning', level: 'Beginner' },
        { name: 'Web Scraping', level: 'Intermediate' }
      ],
      experience: [
        'Built 5+ FastAPI applications with automatic documentation',
        'Processed datasets with 100K+ records using Pandas',
        'Implemented async endpoints serving 500+ concurrent requests',
        'Created data pipelines for real-time analytics'
      ],
      relatedTech: ['FastAPI', 'Pandas', 'NumPy', 'SQLAlchemy', 'Pydantic', 'Asyncio', 'BeautifulSoup']
    },
    { 
      name: 'UI/UX Design', 
      level: 'Intermediate', 
      icon: 'mdi:palette', 
      percentage: 75,
      category: 'design',
      description: "Solid understanding of design principles with hands-on experience in creating user-centered interfaces and experiences.",
      subSkills: [
        { name: 'Figma Design', level: 'Intermediate' },
        { name: 'Prototyping', level: 'Intermediate' },
        { name: 'User Research', level: 'Beginner' },
        { name: 'Responsive Design', level: 'Advanced' },
        { name: 'Design Systems', level: 'Intermediate' }
      ],
      experience: [
        'Designed interfaces for 10+ web applications',
        'Created design systems used across multiple projects',
        'Conducted user testing sessions for 3+ applications',
        'Improved user engagement by 35% through design optimizations'
      ],
      relatedTech: ['Figma', 'Adobe XD', 'Sketch', 'Tailwind CSS', 'Material-UI', 'Framer Motion']
    },
    { 
      name: 'AWS & Cloud Services', 
      level: 'Intermediate', 
      icon: 'logos:aws', 
      percentage: 72,
      category: 'devops',
      description: "Experience with cloud infrastructure, deployment, and management using AWS services and modern DevOps practices.",
      subSkills: [
        { name: 'EC2 & Load Balancing', level: 'Intermediate' },
        { name: 'S3 & CloudFront', level: 'Advanced' },
        { name: 'Lambda Functions', level: 'Intermediate' },
        { name: 'RDS & DynamoDB', level: 'Beginner' },
        { name: 'CI/CD Pipelines', level: 'Intermediate' }
      ],
      experience: [
        'Deployed 8+ applications on AWS infrastructure',
        'Set up CI/CD pipelines reducing deployment time by 60%',
        'Managed cloud costs saving 30% through optimization',
        'Implemented auto-scaling for applications handling traffic spikes'
      ],
      relatedTech: ['AWS EC2', 'AWS S3', 'AWS Lambda', 'Docker', 'GitHub Actions', 'Terraform', 'Nginx']
    },
    { 
      name: 'React Native', 
      level: 'Beginner', 
      icon: 'mdi:cellphone', 
      percentage: 65,
      category: 'mobile',
      description: "Learning mobile development with React Native, focusing on cross-platform app development and native integrations.",
      subSkills: [
        { name: 'Cross-platform Development', level: 'Beginner' },
        { name: 'Native Modules', level: 'Beginner' },
        { name: 'App Store Deployment', level: 'Beginner' },
        { name: 'Push Notifications', level: 'Beginner' }
      ],
      experience: [
        'Built 2 mobile applications with React Native',
        'Integrated native device features like camera and GPS',
        'Published 1 app to Google Play Store',
        'Currently learning iOS development and App Store guidelines'
      ],
      relatedTech: ['React Native', 'Expo', 'React Navigation', 'Native Base', 'Firebase', 'Android Studio']
    }
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
    { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon', category: 'frontend' },
    
    { name: 'Node.js', icon: 'logos:nodejs-icon', category: 'backend' },
    { name: 'Python', icon: 'logos:python', category: 'backend' },
    { name: 'JavaScript', icon: 'logos:javascript', category: 'backend' },
    
    { name: 'PostgreSQL', icon: 'logos:postgresql', category: 'database' },
    { name: 'Firebase', icon: 'logos:firebase', category: 'database' },
    { name: 'Redis', icon: 'devicon:redis', category: 'database'},
    { name: 'Supabase', icon: 'skill-icons:supabase-light', category: 'database'},
    
    { name: 'AWS', icon: 'skill-icons:aws-dark', category: 'cloud' },
    { name: 'Vercel', icon: 'skill-icons:vercel-light', category: 'cloud' },
    { name: 'Resend', icon: 'simple-icons:resend', category: 'cloud'},
    
    { name: 'Git', icon: 'logos:git-icon', category: 'tools' },
    { name: 'Figma', icon: 'logos:figma', category: 'design' },
    { name: 'Canva', icon: 'devicon:canva', category: 'design'},
  ]
};