import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Mail, Linkedin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Sathwik Merugu
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/sathwikmerugu45" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:sathwikmerugu69@gmail.com"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/sathwik45/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Contact
              </button>
              
              <div className="flex items-center space-x-4 pt-4">
                <a 
                  href="https://github.com/sathwikmerugu45" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="mailto:sathwikmerugu69@gmail.com"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Mail size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/sathwik45/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;