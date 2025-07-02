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
      { name: 'Docusaurus', icon: 'logos:docusaurus'},
    ],
    highlights: [
      "Implemented secure role-based authentication system with multi-level access control",
      "Developed interactive family tree visualization with dynamic node positioning and relationships",
      "Built scalable image management system using AWS S3 for family member photos",
      "Created responsive design supporting seamless experience across desktop and mobile devices",
      "Integrated real-time data synchronization using Supabase",
      "Implemented comprehensive user documentation using Docusaurus by Meta",
    ]
  },
  {
 id: 2,
 title: "Seamulator",
 category: "Game Development",
 description: "A comprehensive fishing simulation game developed in vanilla C++ that features diverse fish species, equipment, maps, gacha mechanics, and storylines. The game includes a dashboard, library system, marketplace, and map navigation, all built without external frameworks.",
 iconPath: "/logos/logo-seamulator.png",
 liveUrl: "https://replit.com/@MuhammadHariz/Seamulator-V33-Game?v=1&c=647550",
 githubUrl: "https://github.com/Hariz09/Seamulator",
 technologies: [
   { name: "C++", icon: "logos:c-plusplus" },
   { name: "Repl.it", icon: "devicon:replit" }
 ],
 highlights: [
   "Implemented gacha system for collecting rare fishing equipment and items",
   "Created interactive map system with multiple fishing locations and environments",
   "Built comprehensive inventory management system for bait, equipment, and catches",
   "Designed library system for tracking fishing statistics and achievements",
   "Recognized as #37 in Repl.it's creator funds program among 50 selected projects in August 2022"
 ]
}
];