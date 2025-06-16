import React from 'react';
import { Code, Database } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="text-blue-600" size={32} />,
      skills: [
        { name: "React.js", level: 90, color: "bg-blue-500" },
        { name: "TypeScript", level: 85, color: "bg-blue-600" },
        { name: "JavaScript", level: 95, color: "bg-yellow-500" },
        { name: "Tailwind CSS", level: 90, color: "bg-cyan-500" },
        { name: "HTML5/CSS3", level: 95, color: "bg-orange-500" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database className="text-green-600" size={32} />,
      skills: [
        { name: "Node.js", level: 88, color: "bg-green-500" },
        { name: "Express.js", level: 85, color: "bg-gray-700" },
        { name: "Python", level: 80, color: "bg-blue-500" },
        { name: "RESTful APIs", level: 90, color: "bg-purple-500" },
        { name: "MongoDB", level: 75, color: "bg-green-600" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gray-50 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Git', 'Docker', 'Figma', 'RESTful APIs', 'Responsive Design', 'Version Control'].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 rounded-full font-medium hover:shadow-md transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;