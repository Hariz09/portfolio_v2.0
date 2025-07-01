'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Github, Code, Smartphone, Globe, Database } from 'lucide-react';
import StarryBackground from './StarryBackground';

const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform with AI Recommendations",
      category: "Full Stack Development",
      icon: <Globe className="w-6 h-6" />,
      technologies: ["React", "Node.js", "PostgreSQL", "Python", "TensorFlow"],
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/hariz/ecommerce-ai",
      description: "A comprehensive e-commerce solution that revolutionizes online shopping through intelligent product recommendations and seamless user experience. This platform combines modern web technologies with machine learning algorithms to create a personalized shopping journey for each user. The frontend is built with React and styled with Tailwind CSS, featuring a responsive design that works flawlessly across all devices. The backend architecture utilizes Node.js with Express framework, implementing RESTful APIs and GraphQL endpoints for efficient data fetching. The recommendation engine, powered by TensorFlow and Python, analyzes user behavior patterns, purchase history, and product similarities to suggest relevant items with remarkable accuracy. Key features include real-time inventory management, secure payment processing through Stripe integration, advanced search functionality with filters and sorting options, user authentication with JWT tokens, order tracking system, and an admin dashboard for comprehensive store management. The database design uses PostgreSQL with optimized queries and indexing for handling large-scale data operations. Security measures include input validation, SQL injection prevention, and secure cookie handling. The platform also incorporates Redis for caching frequently accessed data, improving response times significantly. Performance optimization techniques such as code splitting, lazy loading, and image compression ensure fast loading times even on slower connections.",
      highlights: [
        "40% increase in user engagement",
        "Real-time inventory management", 
        "ML-powered product recommendations",
        "99.9% uptime with AWS deployment"
      ]
    },
    {
      id: 2,
      title: "Real-Time Collaboration Tool",
      category: "Web Application",
      icon: <Code className="w-6 h-6" />,
      technologies: ["Next.js", "Socket.io", "MongoDB", "Redis", "Docker"],
      liveUrl: "https://collab-tool-demo.com",
      githubUrl: "https://github.com/hariz/realtime-collab",
      description: "An innovative real-time collaboration platform designed to enhance team productivity and streamline remote work processes. This comprehensive solution enables teams to work together seamlessly regardless of their physical location, providing tools for document editing, project management, and instant communication. Built with Next.js for optimal performance and SEO benefits, the application features server-side rendering and static site generation capabilities. The real-time functionality is powered by Socket.io, enabling instant synchronization of changes across all connected clients with minimal latency. The backend infrastructure utilizes MongoDB for flexible document storage and Redis for session management and real-time data caching. Key features include collaborative document editing with operational transformation algorithms ensuring conflict-free synchronization, integrated video calling capabilities using WebRTC technology, project management tools with Kanban boards and Gantt charts, file sharing with drag-and-drop functionality, role-based access control for secure collaboration, and comprehensive activity tracking and analytics. The platform supports multiple document formats including text, spreadsheets, and presentations, with real-time cursor tracking and user presence indicators. Advanced features include version history with rollback capabilities, comment and suggestion systems, integration with popular third-party services like Google Drive and Slack, and customizable workspace themes. The application is containerized using Docker for consistent deployment across different environments and includes comprehensive unit and integration testing suites.",
      highlights: [
        "Sub-100ms synchronization latency",
        "Support for 1000+ concurrent users",
        "Advanced conflict resolution algorithms",
        "Comprehensive audit trail system"
      ]
    },
    {
      id: 3,
      title: "Mobile Fitness Tracking App",
      category: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ["React Native", "Firebase", "Node.js", "ML Kit", "AWS"],
      liveUrl: "https://fittrack-app.com",
      githubUrl: "https://github.com/hariz/fitness-tracker",
      description: "A comprehensive mobile fitness application that transforms how users approach their health and wellness journey through intelligent tracking and personalized insights. This cross-platform solution, developed with React Native, delivers native performance on both iOS and Android devices while maintaining a single codebase for efficient development and maintenance. The app leverages device sensors and machine learning capabilities to provide accurate fitness tracking, workout recommendations, and health insights. Firebase serves as the backend infrastructure, providing real-time database synchronization, user authentication, cloud storage for workout videos and images, and push notifications for motivation and reminders. The machine learning components, implemented using Google's ML Kit and TensorFlow Lite, enable features such as exercise form analysis through computer vision, automatic workout detection, and personalized training plan generation based on user progress and goals. Key features include comprehensive workout tracking with GPS route mapping for outdoor activities, heart rate monitoring integration with wearable devices, nutrition logging with barcode scanning and macro tracking, social features allowing users to share achievements and compete with friends, detailed progress analytics with customizable charts and reports, and offline functionality ensuring the app works even without internet connectivity. The app also includes guided workout videos with form correction feedback, meal planning with grocery list generation, integration with popular health platforms like Apple Health and Google Fit, and gamification elements including achievement badges and streaks to maintain user engagement.",
      highlights: [
        "500K+ active monthly users",
        "AI-powered form correction",
        "Offline-first architecture",
        "Integration with 50+ fitness devices"
      ]
    },
    {
      id: 4,
      title: "Enterprise Data Analytics Dashboard",
      category: "Data Visualization",
      icon: <Database className="w-6 h-6" />,
      technologies: ["Vue.js", "D3.js", "Python", "Apache Kafka", "Elasticsearch"],
      liveUrl: "https://analytics-dashboard-demo.com",
      githubUrl: "https://github.com/hariz/enterprise-analytics",
      description: "A sophisticated enterprise-grade analytics dashboard that transforms complex business data into actionable insights through interactive visualizations and real-time monitoring capabilities. This comprehensive platform serves as a central hub for data-driven decision making, enabling organizations to track key performance indicators, identify trends, and optimize operations across multiple departments and business units. The frontend is built with Vue.js, leveraging its reactive architecture and component-based structure to create a highly interactive and responsive user interface. D3.js powers the advanced data visualization components, enabling the creation of custom charts, graphs, and interactive elements that provide deep insights into complex datasets. The backend architecture utilizes Python with FastAPI for high-performance API development, Apache Kafka for real-time data streaming and event processing, and Elasticsearch for lightning-fast search and aggregation capabilities across massive datasets. Key features include real-time data ingestion from multiple sources including databases, APIs, and file uploads, customizable dashboard layouts with drag-and-drop functionality, advanced filtering and drilling capabilities for detailed analysis, automated alert systems for threshold breaches and anomaly detection, role-based access control with customizable permissions, and comprehensive export options including PDF reports and CSV data dumps. The platform supports various data sources including SQL databases, NoSQL databases, cloud storage services, and third-party APIs, with built-in data transformation and cleansing capabilities. Advanced analytics features include predictive modeling using machine learning algorithms, statistical analysis tools, and time series forecasting.",
      highlights: [
        "Processing 10TB+ data daily",
        "Sub-second query response times",
        "99.99% system availability",
        "Custom ML model integration"
      ]
    }
  ];

  const toggleProject = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      <StarryBackground 
        backgroundColor="bg-gradient-to-b from-black to-gray-900"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions that blend cutting-edge technology with exceptional user experience. 
            Each project represents a unique challenge conquered through creative problem-solving and technical excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Project Header */}
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-300 rounded-lg transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-500/20 hover:bg-gray-500/30 text-gray-300 rounded-lg transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {project.highlights.map((highlight, index) => (
                    <div key={index} className="bg-gray-700/30 rounded-lg p-3 text-center">
                      <span className="text-sm text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Expand Button */}
                <button
                  onClick={() => toggleProject(project.id)}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 group-hover:shadow-lg"
                >
                  <span>{expandedProject === project.id ? 'Hide Details' : 'View Details'}</span>
                  {expandedProject === project.id ? 
                    <ChevronUp className="w-4 h-4" /> : 
                    <ChevronDown className="w-4 h-4" />
                  }
                </button>
              </div>

              {/* Expanded Content */}
              {expandedProject === project.id && (
                <div className="px-8 pb-8 border-t border-gray-700/30 bg-gray-800/20">
                  <div className="pt-6">
                    <h4 className="text-xl font-semibold text-white mb-4">Project Overview</h4>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-300 leading-relaxed text-justify">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-8">
            Interested in collaborating or learning more about these projects?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1">
            Let&apos;s Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;