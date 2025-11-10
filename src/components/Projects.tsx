import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

// ✅ Tech icons (official logos)
const techIcons = {
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Three.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'WebGL': 'https://upload.wikimedia.org/wikipedia/commons/2/25/WebGL_Logo.svg',
  'GLSL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opengl/opengl-original.svg',
  'OpenAI': 'https://upload.wikimedia.org/wikipedia/commons/4/4b/OpenAI_Logo.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'Socket.io': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
  'Stripe': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'Prisma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
  'WebRTC': 'https://upload.wikimedia.org/wikipedia/commons/d/db/WebRTC_Logo.svg',
  'GSAP': 'https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg',
  'Tailwind': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'Blender': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg',
};

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Earth - 3D Solar System',
      description:
        'Interactive 3D solar system with realistic planet movements and atmospheric effects.',
      image:
        'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: '3D',
      tech: ['Three.js', 'React', 'WebGL', 'GLSL'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Yoom - Video Conference App',
      description:
        'Modern video conferencing platform with screen sharing, chat, and recording features.',
      image:
        'https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web App',
      tech: ['Next.js', 'WebRTC', 'Socket.io', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'AI Image SaaS - Canva Application',
      description:
        'AI-powered image editing platform with advanced filters and generation capabilities.',
      image:
        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web App',
      tech: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Animated Apple iPhone 3D Website',
      description:
        'Stunning 3D product showcase with smooth animations and interactive elements.',
      image:
        'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: '3D',
      tech: ['Three.js', 'GSAP', 'React', 'Blender'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'TaskFlow - Project Management',
      description:
        'Collaborative project management tool with real-time updates and team features.',
      image:
        'https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web App',
      tech: ['React', 'Express', 'MongoDB', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce solution with payment integration and admin dashboard.',
      image:
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web App',
      tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const categories = ['All', 'Web App', '3D', 'Design'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 text-lg font-medium mb-4">MY WORK</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Recent{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A small selection of recent projects showcasing my skills in modern web
            development and 3D graphics.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-gray-800/50 backdrop-blur-sm rounded-full p-2 border border-gray-700/50">
            <Filter size={20} className="text-purple-400 m-3" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-purple-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={1000}
                transitionSpeed={1000}
                gyroscope={true}
              >
                <div className="group h-[500px] flex flex-col bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-60">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />

                    {/* Overlay Links */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.liveUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full text-purple-400 hover:text-purple-300"
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full text-purple-400 hover:text-purple-300"
                      >
                        <Github size={18} />
                      </motion.a>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* ✅ Glowing Tech Logos */}
                    <div className="flex flex-wrap gap-3 mt-auto">
                      {project.tech.map((tech, index) => (
                        <motion.img
                          key={index}
                          src={techIcons[tech]}
                          alt={tech}
                          title={tech}
                          whileHover={{
                            scale: 1.2,
                            filter: 'drop-shadow(0 0 8px rgba(168,85,247,0.9))',
                          }}
                          transition={{ duration: 0.3 }}
                          className="w-8 h-8 object-contain transition-all duration-300"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
