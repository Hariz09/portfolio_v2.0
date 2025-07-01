export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform with AI Recommendations",
    category: "Full Stack Development",
    iconPath: "/favicon.ico",
    technologies: [
      { name: "React", icon: "logos:react" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "Python", icon: "logos:python" },
      { name: "TensorFlow", icon: "logos:tensorflow" }
    ],
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
    iconPath: "/favicon.ico",
    technologies: [
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Socket.io", icon: "logos:socket-io" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "Redis", icon: "logos:redis" },
      { name: "Docker", icon: "logos:docker-icon" }
    ],
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
    iconPath: "/favicon.ico",
    technologies: [
      { name: "React Native", icon: "logos:react" },
      { name: "Firebase", icon: "logos:firebase" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "ML Kit", icon: "logos:google-icon" },
      { name: "AWS", icon: "logos:aws" }
    ],
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
    iconPath: "/favicon.ico",
    technologies: [
      { name: "Vue.js", icon: "logos:vue" },
      { name: "D3.js", icon: "logos:d3" },
      { name: "Python", icon: "logos:python" },
      { name: "Apache Kafka", icon: "logos:apache-kafka-icon" },
      { name: "Elasticsearch", icon: "logos:elasticsearch" }
    ],
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