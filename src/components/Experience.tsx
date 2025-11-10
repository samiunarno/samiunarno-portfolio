import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const experiences = [
    {
      company: 'Frontend Engineer',
      role: 'Aleph',
      period: '2023 - Present',
      location: 'Remote, Croatia',
      description: 'Leading the development of modern web applications using React, TypeScript, and Next.js. Collaborated with design and backend teams to deliver high-quality user experiences.',
      achievements: [
        'Improved application performance by 40% through optimization',
        'Led the migration from JavaScript to TypeScript',
        'Mentored junior developers and established coding standards',
      ],
      tech: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
      color: 'from-blue-500 to-purple-500',
    },
    {
      company: 'Mobile App Dev',
      role: 'JSM Tech',
      period: '2022 - 2023',
      location: 'Remote',
      description: 'Developed cross-platform mobile applications using React Native and Flutter. Integrated RESTful APIs and implemented real-time features using WebSocket connections.',
      achievements: [
        'Built and deployed 5+ mobile applications',
        'Implemented push notifications and real-time chat',
        'Achieved 4.8+ star rating across all published apps',
      ],
      tech: ['React Native', 'Flutter', 'Firebase', 'Redux'],
      color: 'from-green-500 to-teal-500',
    },
    {
      company: 'Freelance App Dev Project',
      role: 'Self-employed',
      period: '2021 - 2022',
      location: 'Remote',
      description: 'Worked with various clients to develop custom web and mobile solutions. Specialized in e-commerce platforms, portfolio websites, and business management tools.',
      achievements: [
        'Successfully delivered 15+ client projects',
        'Maintained 100% client satisfaction rate',
        'Built long-term relationships with recurring clients',
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'AWS'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      company: 'Lead Frontend Developer',
      role: 'TechCorp Solutions',
      period: '2020 - 2021',
      location: 'Zagreb, Croatia',
      description: 'Led a team of frontend developers in creating enterprise-level web applications. Implemented modern development practices and established CI/CD pipelines.',
      achievements: [
        'Led a team of 4 frontend developers',
        'Reduced deployment time by 60% with CI/CD implementation',
        'Established code review processes and quality standards',
      ],
      tech: ['Vue.js', 'Docker', 'Jenkins', 'AWS'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-purple-400 text-lg font-medium mb-4"
          >
            MY JOURNEY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            Work <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Experience</span>
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-purple-500 to-pink-500" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-gray-900 z-10" />

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}
                >
                  <div className={`p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl hover:border-purple-500/50 transition-all duration-500 hover-target relative overflow-hidden`}>
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-5 rounded-3xl`} />
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">
                            {exp.company}
                          </h3>
                          <p className="text-purple-400 font-medium mb-2">
                            {exp.role}
                          </p>
                        </div>
                        <ExternalLink size={18} className="text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer hover-target" />
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start text-sm text-gray-400">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-300 border border-gray-600/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Download Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover-target"
          >
            Download Full Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;