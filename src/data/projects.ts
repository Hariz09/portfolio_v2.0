import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "HisTree",
    category: "Full Stack Web App",
    description: "This application provides a secure, role-based authenticated platform for constructing and visualizing family trees. Users can easily add family members and associated images, with data presented through an intuitive and visually appealing tree interface.",
    iconPath: "/logos/logo-histree.png",
    liveUrl: "https://histree.id",
    githubUrl: "https://github.com/Hariz09/histree",
    docsUrl: "https://docs.histree.id/",
    technologies: [
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: 'React', icon: 'logos:react'},
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "Supabase", icon: "logos:supabase-icon" },
      { name: "AWS S3", icon : "skill-icons:aws-dark"},
      { name: 'Netlify', icon: 'logos:netlify-icon'},
      { name: "Shadcn", icon: 'simple-icons:shadcnui'},
    ],
    highlights: [
      "Implemented secure role-based authentication system with multi-level access control",
      "Developed interactive family tree visualization with dynamic node positioning and relationships",
      "Built scalable image management system using AWS S3 for family member photos",
      "Created responsive design supporting seamless experience across desktop and mobile devices",
      "Integrated real-time data synchronization using Supabase",
      "Implemented comprehensive user documentation",
    ]
  },
];