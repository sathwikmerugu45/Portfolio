import React from 'react';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

const Projects: React.FC = () => {
  const currentProjects = [
    {
      title: "ConnectLive",
      description: `Developed free open-source platform for campus with intelligent search and 1:1 call booking, enabling tutor-student matching
• Built peer-to-peer video platform using React.js, WebRTC, & Node.js for cross-platform video calling with chat functionality
• Designed the frontend with WebRTC data channels for video, audio and WebSockets for real-time chat with low-latency
• Optimized backend with MongoDB and REST APIs for user authentication, session management, and real-time data sync`,
      technologies: ["React", "WebRTC", "Node.js", "MongoDB", "REST APIs"],
      github: "https://github.com/sathwikmerugu45/ConnectLive",
      live: "#",
      status: "In Progress",
      statusColor: "bg-yellow-100 text-yellow-800",
      featured: true,
    },
    {
      title: "AI Help Desk",
      description: `Built AI-powered ticket system with Google Gemini API reducing response time by 70% through automated categorization
• Enforced role-based access control with JWT and MongoDB, supporting 3 user roles with secure skill-based ticket routing
• Integrated Inngest for async workflows with 5-step automation, enabling automated emails and AI-generated resolution notes
• Established a robust CI/CD pipeline for automated testing and seamless deployment, ensuring consistent & reliable performance`,
      technologies: ["React", "Node.js", "MongoDB", "JWT", "Inngest", "Google Gemini API"],
      github: "https://github.com/sathwikmerugu45/AI-Help-Desk",
      live: "#",
      status: "In Progress",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
    {
      title: "Freelance Hub",
      description: `Developed secure authentication, authorization with JSON Web Token, regulating backend types for enhanced system integrity
• Established REST APIs on the backend to efficiently facilitate communication with the frontend using Node.js, and Express.js
• Improved loading performance by using useCallback for function result memoization, reducing latency by 20-30% overall`,
      technologies: ["React", "Node.js", "Express", "JWT", "REST APIs"],
      github: "https://github.com/sathwikmerugu45/Freelance-Hub",
      live: "#",
      status: "In Progress",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
  ];

  const featuredProjects = [
    {
      title: "Shaastra Main Portal",
      description: "Official website for Shaastra, IIT Madras's annual technical festival. A comprehensive platform featuring event management, registration systems, and interactive user experiences.",
      technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL","Razorpay"],
      github: "#",
      live: "https://shaastra.org",
      status: "Live",
      statusColor: "bg-green-100 text-green-800",
      featured: true
    },
    {
      title: "Spark Portal",
      description: "A full-stack competition and submission platform where users can register, log in, and participate in various events...",
      technologies: ["React", "Node.js", "Express","PostgreSQL"],
      github: "https://github.com/sathwikmerugu45/Spark-Portal",
      live: "",
      status: "Completed",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      title: "Sampark Portal",
      description: "A social campaign website created for Shaastra, IIT Madras' annual tech fest...",
      technologies: ["React", "TypeScript", "Node.js","Tailwind CSS"],
      github: "https://github.com/ShaastraWebops/sampark-portal-frontend-2025",
      live: "#",
      status: "Completed",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      title: "JMT Portal",
      description: "A team-based competition platform designed for the Junior Make-a-thon (JMT)...",
      technologies: ["React", "JavaScript", "Express","Node.js","Tailwind CSS"],
      github: "https://github.com/sathwikmerugu45/jmt-portal",
      live: "#",
      status: "Completed",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      title: "Netaccess",
      description: "A network authentication system that grants internet access to users based on MAC address registration...",
      technologies: ["React", "Node.js","Flask", "PostgreSQL","Tailwind CSS"],
      github: "https://github.com/sathwikmerugu45/netaccess",
      live: "#",
      status: "Completed",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      title: "E-commerce Platform",
      description: "A simple yet functional e-commerce site...",
      technologies: ["React", "Node.js", "Express","Tailwind CSS"],
      github: "https://github.com/sathwikmerugu45/E-commerce",
      live: "https://e-commerce-pearl-one-24.vercel.app/",
      status: "Live",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      title: "CEA-Fest Portal Frontend",
      description: "A comprehensive event registration platform built for CEA Fest...",
      technologies: ["React", "Node.js", "Express"],
      github: "https://github.com/sathwikmerugu45/ceafest-portal-frontend-2024",
      live: "#",
      status: "Live",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      title: "Shipment Delivery Application",
      description: "A logistics and shipment management application...",
      technologies: ["React", "Node.js", "Express", "Tailwind CSS"],
      github: "https://github.com/sathwikmerugu45/Shipment-Delivery-Application",
      live: "https://shipment-delivery-application-gamma.vercel.app/",
      status: "Live",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      title: "E-Commerce Website",
      description: "A modern e-commerce website with cart functionality and secure payments...",
      technologies: ["React", "Node.js", "Express", "Tailwind CSS"],
      github: "https://github.com/sathwikmerugu45/E-Commerce-Website",
      live: "https://e-commerce-website-self-ten.vercel.app/",
      status: "Live",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      title: "Expat HOME",
      description: "A community-focused portal for expatriates...",
      technologies: ["React", "Node.js", "Express", "Tailwind CSS"],
      github: "https://github.com/sathwikmerugu45/Expat-HOME",
      live: "https://expat-home-frontend.onrender.com/",
      status: "Live",
      statusColor: "bg-green-100 text-green-800"
    }
  ];

  const alreadyLive = [
    {
      title: "Automated Netaccess (Chrome Extension)",
      description: `Developed a Chrome extension with over 600+ users, to automate the login and session approval process for a network portal
• Created a seamless, one-click authentication experience that greatly improved user convenience using JavaScript content scripts`,
      technologies: ["JavaScript", "Chrome API", "Content Scripts"],
      github: "https://chromewebstore.google.com/detail/automated-netaccess/fiifgfockecfbaclfcilpoifhgdkelpe",
      live: "https://chromewebstore.google.com/detail/automated-netaccess/fiifgfockecfbaclfcilpoifhgdkelpe",
      status: "Live",
      statusColor: "bg-green-100 text-green-800",
      featured: true,
    }
  ];

  const renderProjects = (projects: typeof featuredProjects) => (
    <div className="grid lg:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 ${
            project.featured ? 'lg:col-span-2' : ''
          }`}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${project.statusColor}`}>
                {project.status}
              </span>
            </div>
            <div className="flex space-x-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <Github size={20} className="text-gray-700" />
              </a>
              {project.live !== '#' && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors"
                >
                  <ExternalLink size={20} className="text-blue-700" />
                </a>
              )}
            </div>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed whitespace-pre-line">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, techIndex) => (
              <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Star size={16} />
                <span>{Math.floor(Math.random() * 50) + 10}</span>
              </div>
              <div className="flex items-center space-x-1">
                <GitFork size={16} />
                <span>{Math.floor(Math.random() * 20) + 5}</span>
              </div>
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              <span>View Code</span>
              <Github size={16} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Current Projects */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
            Currently Working On
          </h2>
        </div>
        {renderProjects(currentProjects)}

        {/* Featured Projects */}
        <div className="text-center mt-20 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </div>
        {renderProjects(featuredProjects)}

        {/* Already Live */}
        <div className="text-center mt-20 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
            Already Live
          </h2>
        </div>
        {renderProjects(alreadyLive)}

        <div className="text-center mt-12">
          <a
            href="https://github.com/sathwikmerugu45"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
