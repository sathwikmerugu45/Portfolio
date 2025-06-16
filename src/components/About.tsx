import React from 'react';
import { Rocket, Lightbulb, MessageCircle, Palette } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Rocket className="text-blue-600" size={24} />,
      title: "Full Stack Developer",
      description: "Passionate about building end-to-end solutions with modern technologies"
    },
    {
      icon: <Lightbulb className="text-yellow-500" size={24} />,
      title: "Problem Solver",
      description: "Love tackling complex challenges and finding innovative solutions"
    },
    {
      icon: <MessageCircle className="text-green-500" size={24} />,
      title: "Team Player",
      description: "Enjoy collaborating with teams and sharing knowledge"
    },
    // {
    //   icon: <Palette className="text-purple-600" size={24} />,
    //   title: "UI/UX Designer",
    //   description: "Design beautiful interfaces on Figma with attention to detail"
    // }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate software developer with a keen interest in Full Stack development. 
            I enjoy building innovative solutions and constantly learning new technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">My Journey</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                As a Full Stack Developer, I specialize in creating seamless digital experiences 
                from frontend interfaces to backend architectures. My expertise spans across 
                React.js, Node.js, JavaScript, TypeScript, and Express.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I believe in writing clean, maintainable code and always strive to deliver 
                high-quality solutions that make a difference. When I'm not coding, you'll 
                find me exploring new technologies or designing beautiful interfaces on Figma.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Fun Facts</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>A Deep Tester - I love ensuring quality in every detail</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Design enthusiast who brings ideas to life on Figma</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  <span>Always learning and staying updated with latest tech trends</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;