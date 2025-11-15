import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      company: 'Betopia',
      role: 'Full Stack Developer',
      period: '2024 - 2025',
      location: 'Remote',
      description: 'Supported development team in organizing and executing software projects. Conducted research to enhance features and improve systems.',
      achievements: [
        'Gained hands-on experience in software development lifecycle',
        'Conducted technical research to improve system features',
        'Collaborated with development teams on project execution',
        'Developed problem-solving skills in real-world projects',
      ],
      color: 'from-blue-500 to-purple-500',
    },
    {
      company: 'IUB Mars Rover Team',
      role: 'Team Lead & Developer',
      period: '2017 - 2024',
      location: 'Independent University, Bangladesh',
      description: 'Led a multidisciplinary team in developing Mars Rover for international competitions. Managed technical execution and team coordination.',
      achievements: [
        'Won 1st place in Asia at University Rover Challenge 2018',
        'Managed project development and technical roadmap',
        'Coordinated between software, hardware, and mechanical teams',
        'Developed leadership and project management skills',
      ],
      color: 'from-green-500 to-teal-500',
    },
    {
      company: 'Freelance Development',
      role: 'Backend Developer',
      period: '2017 - 2018',
      location: 'Fiverr - Remote',
      description: 'Built and maintained backend systems for various web applications. Designed APIs and implemented scalable server-side solutions for clients.',
      achievements: [
        'Developed multiple backend systems for client projects',
        'Designed and implemented RESTful APIs',
        'Gained experience in client communication and requirements',
        'Learned to work with deadlines and project specifications',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      company: 'Robotics Competitions',
      role: 'Robotics Developer & Competitor',
      period: '2017 - 2024',
      location: 'National & International',
      description: 'Participated in advanced robotics projects and competitions including University Rover Challenge, Technoxian, TRACTION, and other national events.',
      achievements: [
        'Competed in University Rover Challenge 2018 (1st in Asia)',
        'Participated in Technoxian 2024 international robotics competition',
        'Competed in TRACTION National Competition',
        'Developed various robotics systems including SoccerBot, Line Follower, and BattleBot',
        'Enhanced problem-solving and engineering skills through hands-on robotics development',
      ],
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects - Mobile Optimized */}
      <div className="absolute top-10 left-4 sm:left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-4 sm:right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-pink-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-purple-400 text-base sm:text-lg font-medium mb-3 sm:mb-4"
          >
            MY DEVELOPMENT JOURNEY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 px-2"
          >
            Experience & <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto px-4"
          >
            Combining academic learning with practical experience through projects, competitions, and professional work
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Hidden on mobile, visible on medium+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-purple-500 to-pink-500" />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="relative"
              >
                {/* Timeline Node - Hidden on mobile, visible on medium+ */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-gray-900 z-10" />

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="w-full md:w-11/12 lg:w-5/12 mx-auto md:mx-0 md:relative"
                  style={{
                    marginLeft: index % 2 === 0 ? '0' : 'auto',
                    marginRight: index % 2 === 0 ? 'auto' : '0'
                  }}
                >
                  {/* Mobile Timeline Node */}
                  <div className="md:hidden absolute -left-3 top-6 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-gray-900 z-10" />
                  
                  <div className="ml-6 md:ml-0 p-4 sm:p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl sm:rounded-3xl hover:border-purple-500/50 transition-all duration-300 hover-target relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-5 rounded-2xl sm:rounded-3xl`} />
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="mb-3 sm:mb-4">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{exp.company}</h3>
                        <p className="text-purple-400 font-medium text-sm sm:text-base mb-2">{exp.role}</p>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} className="flex-shrink-0" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} className="flex-shrink-0" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">{exp.description}</p>

                      {/* Achievements */}
                      <div className="mb-2 sm:mb-4">
                        <h4 className="text-white font-semibold text-sm sm:text-base mb-2">Key Learnings & Achievements:</h4>
                        <ul className="space-y-1 sm:space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start text-xs sm:text-sm text-gray-400">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 mr-2 sm:mr-3 flex-shrink-0" />
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.a
            href="/resume/Samiun_Mahmud_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-sm sm:text-base cursor-pointer"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;