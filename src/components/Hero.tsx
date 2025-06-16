import React from 'react';
import { ArrowDown, Code, Zap, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-150"></div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="text-center">
          {/* Greeting */}
          <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 mb-8 shadow-sm">
            <span className="text-2xl">👋</span>
            <span className="text-gray-700 font-medium">Hi there, I'm Sathwik Merugu</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
            Full Stack
            <br />
            Developer
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate software developer with a keen interest in building innovative solutions. 
            I enjoy creating exceptional digital experiences and constantly learning new technologies.
          </p>

          {/* Status Cards */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg px-6 py-3 shadow-sm border border-white/20">
              <div className="flex items-center space-x-2">
                <Code className="text-blue-600" size={20} />
                <span className="text-gray-700">Currently working on <strong>Netaccess-Website</strong></span>
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg px-6 py-3 shadow-sm border border-white/20">
              <div className="flex items-center space-x-2">
                <Zap className="text-purple-600" size={20} />
                <span className="text-gray-700">Learning <strong>DSA</strong></span>
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg px-6 py-3 shadow-sm border border-white/20">
              <div className="flex items-center space-x-2">
                <Heart className="text-red-500" size={20} />
                <span className="text-gray-700">A <strong>Deep Tester</strong></span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToAbout}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>Explore My Work</span>
            <ArrowDown className="group-hover:translate-y-1 transition-transform duration-300" size={20} />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;