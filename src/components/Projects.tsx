import React from 'react';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
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
      description: "A full-stack competition and submission platform where users can register, log in, and participate in various events. Once registered, user data and submissions are managed by the backend team, ensuring a seamless and secure user experience. Built with user management and backend coordination in mind.",
      technologies: ["React", "Node.js", "Express","PostgreSQL"],
      github: "https://github.com/sathwikmerugu45/Spark-Portal",
      live: "",
      status: "Completed",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      title: "Sampark Portal",
      description: "A social campaign website created for Shaastra, IIT Madras' annual tech fest. The portal allows users to apply for the Campus Ambassador program and get involved in promotional activities. The website handles registrations and showcases the initiative's goals and impact.",
      technologies: ["React", "TypeScript", "Node.js","Tailwind CSS"],
      github: "https://github.com/ShaastraWebops/sampark-portal-frontend-2025",
      live: "#",
      status: "Completed",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      title: "JMT Portal",
      description: "A team-based competition platform designed for the Junior Make-a-thon (JMT). Teams register, collaborate, and submit projects through this portal. The site manages multi-user access, team creation, and OTP-based authentication for secure participation.",
      technologies: ["React", "JavaScript", "Express","Node.js","Tailwind CSS"],
      github: "https://github.com/sathwikmerugu45/jmt-portal",
      live: "#",
      status: "Completed",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      title: "Netaccess",
      description: "A network authentication system that grants internet access to users based on MAC address registration. Users verify their identity via OTP sent to their institutional email, register their device, and gain access to the network. This portal enforces device-level authorization and enhances network security.",
      technologies: ["React", "Node.js","Flask", "PostgreSQL","Tailwind CSS"],
      github: "https://github.com/sathwikmerugu45/netaccess",
      live: "#",
      status: "Completed",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      title: "E-commerce Platform",
      description: "A simple yet functional e-commerce site where users can browse products, add them to cart, and proceed through a full payment workflow. Designed to simulate a real shopping experience, it handles product display, user interaction, and secure checkout flow.",
      technologies: ["React", "Node.js", "Express","Tailwind CSS"],
      github: "https://github.com/sathwikmerugu45/E-commerce",
      live: "https://e-commerce-pearl-one-24.vercel.app/",
      status: "Live",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      title: "CEA-Fest Portal Frontend",
      description: "A comprehensive event registration platform built for CEA Fest, the Civil Engineering Department's annual fest. Users can register, explore events, participate in workshops, and stay updated with schedules and announcements. It centralizes all fest-related interactions in one accessible portal.",
      technologies: ["React", "Node.js", "Express"],
      github: "https://github.com/sathwikmerugu45/ceafest-portal-frontend-2024",
      live: "#",
      status: "Live",
      statusColor: "bg-green-100 text-green-800"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've been working on. Each one represents a unique challenge and learning experience.
          </p>
        </div>

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
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
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

              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
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