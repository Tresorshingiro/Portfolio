import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone } from 'lucide-react';
import { Skill } from '../types';
import profileImage from '../assets/profile.jpg';

const About: React.FC = () => {
  const skills: Skill[] = [
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'JavaScript', level: 95, category: 'Frontend' },
    { name: 'Vue.js', level: 75, category: 'Frontend' },
    { name: 'Flutter', level: 80, category: 'Frontend' },
    { name: 'Node.js', level: 88, category: 'Backend' },
    { name: 'Express.js', level: 85, category: 'Backend' },
    { name: 'Python', level: 80, category: 'Backend' },
    { name: 'Java', level: 85, category: 'Backend' },
    { name: 'C++', level: 80, category: 'Backend' },
    { name: 'MongoDB', level: 90, category: 'Database' },
    { name: 'PostgreSQL', level: 85, category: 'Database' },
    { name: 'MySQL', level: 90, category: 'Database' },
    { name: 'Supabase', level: 82, category: 'Database' },
    { name: 'Firebase', level: 88, category: 'Database' },
    { name: 'Docker', level: 70, category: 'Tools' },
    { name: 'AWS', level: 65, category: 'Tools' },
    { name: 'Git', level: 90, category: 'Tools' },
  ];

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Freelance',
      period: '2023 - Present',
      description: 'Developing web applications using MERN stack, creating RESTful APIs, and implementing modern UI/UX designs.'
    },
    {
      title: 'Frontend Developer',
      company: 'Tech Solutions',
      period: '2022 - 2023',
      description: 'Built responsive web applications using React and TypeScript, collaborated with design teams to implement pixel-perfect UIs.'
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Inc',
      period: '2021 - 2022',
      description: 'Worked on various projects using JavaScript, learned backend development with Node.js and database management.'
    }
  ];

  const services = [
    {
      icon: <Globe size={40} />,
      title: 'Web Development',
      description: 'Full-stack web applications using modern technologies like React, Node.js, and MongoDB.'
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Responsive Design',
      description: 'Mobile-first, responsive web applications that work seamlessly across all devices.'
    },
    {
      icon: <Code size={40} />,
      title: 'API Development',
      description: 'RESTful APIs and backend services with proper authentication and documentation.'
    },
    {
      icon: <Database size={40} />,
      title: 'Database Design',
      description: 'Efficient database design and optimization for both SQL and NoSQL databases.'
    }
  ];

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-emerald-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in modern web technologies. 
              I love creating efficient, scalable applications and learning new technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
                <img 
                  src={profileImage} 
                  alt="Tresor Shingiro"
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
            
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">My Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Hello! I'm Tresor, a Full Stack Developer based in Rwanda with a passion for creating 
                  digital experiences that make a difference. My journey in web development started with 
                  curiosity about how websites work, and it has evolved into a career dedicated to building 
                  innovative solutions.
                </p>
                <p>
                  I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and enjoy working 
                  on both frontend and backend development. I'm always eager to learn new technologies 
                  and stay up-to-date with industry trends.
                </p>
                <p>
                  When I'm not coding, you can find me reading tech blogs, contributing to open source 
                  projects, or mentoring aspiring developers in my community.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-emerald-600">30+</h3>
                  <p className="text-gray-600 text-sm">Projects Completed</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-emerald-600">3+</h3>
                  <p className="text-gray-600 text-sm">Years Experience</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-emerald-600">10+</h3>
                  <p className="text-gray-600 text-sm">Happy Clients</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <p className="text-gray-600 text-lg">Here are the technologies I work with regularly</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(groupedSkills).map(([category, categorySkills], index) => (
              <motion.div
                key={category}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{category}</h3>
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-emerald-600 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What I Do</h2>
            <p className="text-gray-600 text-lg">Services I provide to help bring your ideas to life</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border border-gray-200 group hover:border-emerald-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <p className="text-gray-600 text-lg">My professional journey and growth</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-emerald-200 hidden lg:block"></div>
            
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="lg:w-1/2 lg:px-8">
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 relative">
                      {/* Timeline dot */}
                      <div className="absolute top-1/2 lg:block hidden w-4 h-4 bg-emerald-500 rounded-full transform -translate-y-1/2 border-4 border-white shadow-lg"
                           style={{
                             [index % 2 === 0 ? 'right' : 'left']: '-2rem'
                           }}>
                      </div>
                      
                      <div className="text-emerald-600 font-semibold text-sm mb-2">{experience.period}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{experience.title}</h3>
                      <h4 className="text-emerald-600 font-medium mb-3">{experience.company}</h4>
                      <p className="text-gray-600 leading-relaxed">{experience.description}</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
