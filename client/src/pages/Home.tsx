import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { projectsApi } from '../services/api';
import { Project } from '../types';
import profileImage from '../assets/profile.jpg';
import resumePdf from '../assets/Tresor Shingiro Nkurunziza resume (1).pdf';

const Home: React.FC = () => {
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProjects = async () => {
      try {
        const response = await projectsApi.getFeatured();
        setFeaturedProjects(response.data.slice(0, 3)); // Show only 3 featured projects
      } catch (error) {
        console.error('Error fetching featured projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProjects();
  }, []);

  const skills = [
    'React', 'TypeScript', 'Node.js', 'MongoDB', 'Express.js', 'Python',
    'PostgreSQL', 'AWS', 'Docker', 'Git', 'Supabase', 'Firebase', 'Flutter'
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Tresor_Shingiro_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-emerald-50 pt-16 md:pt-18 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-12 items-center min-h-[calc(100vh-4rem)]">
            <motion.div
              className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 text-center lg:text-left order-1 py-2 md:py-4 lg:py-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Tresor Shingiro</span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700">Full Stack Developer</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I am a passionate software developer driven by curiosity, creativity, and the desire to solve real-world problems. From building AI-powered solutions to designing sleek web applications, My journey is fueled by continuous learning, hands-on experimentation, and a vision to create technology that makes life better one project at a time.
              </p>
            
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start pt-1 sm:pt-2 lg:pt-4">
                <Link 
                  to="/projects" 
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-teal-700 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-sm md:text-base"
                >
                  View My Work <ArrowRight size={18} className="md:w-5 md:h-5" />
                </Link>
                <button 
                  onClick={handleDownloadCV}
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-transparent text-emerald-600 font-semibold border-2 border-emerald-600 rounded-xl hover:bg-emerald-600 hover:text-white transform hover:-translate-y-1 transition-all duration-300 text-sm md:text-base"
                >
                  <Download size={18} className="md:w-5 md:h-5" /> Download CV
                </button>
              </div>

              <div className="flex space-x-4 justify-center lg:justify-start pt-0.5 sm:pt-1 lg:pt-2">
                <a 
                  href="https://github.com/Tresorshingiro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-emerald-600 transition-colors p-2 rounded-lg hover:bg-emerald-50"
                >
                  <Github size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/tresor-shingiro-5706042ab" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-emerald-600 transition-colors p-2 rounded-lg hover:bg-emerald-50"
                >
                  <Linkedin size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a 
                  href="mailto:tresorshingiro26@gmail.com"
                  className="text-gray-600 hover:text-emerald-600 transition-colors p-2 rounded-lg hover:bg-emerald-50"
                >
                  <Mail size={20} className="sm:w-6 sm:h-6" />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center order-2 py-2 md:py-4 lg:py-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                {/* Animated Outer Ring */}
                <div className="absolute -inset-1 sm:-inset-2 rounded-full bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-500 opacity-60 blur animate-spin-slow"></div>
                
                {/* Pulsing Inner Ring */}
                <div className="absolute -inset-0.5 sm:-inset-1 rounded-full bg-gradient-to-r from-emerald-300 via-teal-400 to-emerald-500 opacity-75 animate-pulse"></div>
                
                {/* Main Image Container with Gradient Border */}
                <div className="relative w-full h-full rounded-full p-0.5 sm:p-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 animate-gradient-xy shadow-xl sm:shadow-2xl">
                  <div className="w-full h-full bg-white rounded-full p-0.5 sm:p-1">
                    <img 
                      src={profileImage} 
                      alt="Tresor Shingiro"
                      className="w-full h-full object-cover rounded-full shadow-inner"
                    />
                    
                    {/* Subtle Inner Glow */}
                    <div className="absolute inset-1 sm:inset-2 bg-gradient-to-tr from-emerald-400/10 via-transparent to-teal-400/10 rounded-full pointer-events-none"></div>
                  </div>
                </div>
                
                {/* Floating Sparkles - More Mobile Friendly */}
                <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 lg:-inset-6 pointer-events-none">
                  <div className="absolute top-1 sm:top-2 md:top-4 lg:top-6 left-0 sm:left-1 md:left-2 lg:left-4 w-1 sm:w-1.5 md:w-2 h-1 sm:h-1.5 md:h-2 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
                  <div className="absolute top-4 sm:top-6 md:top-8 lg:top-12 right-3 sm:right-4 md:right-6 lg:right-8 w-0.5 sm:w-1 md:w-1.5 h-0.5 sm:h-1 md:h-1.5 bg-teal-400 rounded-full animate-bounce opacity-60"></div>
                  <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 left-1 sm:left-2 md:left-4 lg:left-8 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-blue-400 rounded-full animate-pulse opacity-80"></div>
                  <div className="absolute bottom-1 sm:bottom-2 md:bottom-4 lg:bottom-6 right-1 sm:right-2 md:right-4 lg:right-6 w-0.5 sm:w-1 md:w-1.5 h-0.5 sm:h-1 md:h-1.5 bg-purple-400 rounded-full animate-ping opacity-50"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Technologies I Work With</h3>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Here are the tools and technologies I use to bring ideas to life
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="group bg-white rounded-xl p-4 md:p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-300 hover:-translate-y-2 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-gray-700 group-hover:text-emerald-600 font-semibold text-sm md:text-base transition-colors duration-300">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">Featured Projects</h3>
            <p className="text-lg text-gray-600 text-center mb-12">Here are some of my recent works that I'm proud of</p>
          </motion.div>

          {loading ? (
            <div className="text-center py-8 text-gray-600">Loading projects...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project._id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h4>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium"
                      >
                        Live Demo
                      </a>
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium flex items-center space-x-2"
                        >
                          <Github size={16} /> 
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            <Link 
              to="/projects"
              className="inline-flex items-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              <span>View All Projects</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
