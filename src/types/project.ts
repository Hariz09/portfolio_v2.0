// Technology interface for individual tech stack items
export interface Technology {
  name: string;      // Display name of the technology (e.g., "React", "Next.js")
  icon: string;      // Iconify icon name (e.g., "logos:react", "devicon:nextjs")
}

// Main Project interface
export interface Project {
  id: number;                    // Unique identifier for the project
  title: string;                 // Project title/name
  category: string;              // Project category (e.g., "Web Application", "Mobile App")
  description: string;           // Detailed project description
  iconPath: string;              // Path to project icon image
  liveUrl: string;               // URL to live/deployed project
  docsUrl?: string;              // Optional: URL to project documentation
  githubUrl: string;             // GitHub repository URL
  technologies: Technology[];    // Array of technologies used
  highlights: string[];          // Array of key achievements/features
}