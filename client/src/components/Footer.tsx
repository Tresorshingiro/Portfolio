import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Tresor Shingiro</h3>
            <p className="text-gray-300">Full Stack Developer passionate about creating innovative solutions and beautiful user experiences.</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-emerald-400 transition-colors">Projects</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-emerald-400 transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Tresorshingiro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-gray-800"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/tresor-shingiro-5706042ab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-gray-800"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:tresorshingiro26@gmail.com"
                className="text-gray-300 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-gray-800"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <p className="text-center text-gray-400 flex items-center justify-center space-x-1">
            <span>© {currentYear} Tresor Shingiro</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
