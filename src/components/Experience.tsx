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
      company: 'Google Developer Student Club',
      role: 'Frontend Lead',
      period: '2024 - Present',
      location: 'University Campus, Remote',
      description:
        'Leading workshops and mentoring peers on frontend technologies including React, Next.js, and TypeScript. Collaborating with developers to build impactful student projects.',
      achievements: [
        'Hosted 10+ coding sessions on modern web tools',
        'Built and deployed community-driven web apps',
        'Helped over 50 students improve frontend skills',
      ],
      tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      color: 'from-blue-500 to-purple-500',
    },
    {
      company: 'Summer Internship — XYZ Tech',
      role: 'Web Developer Intern',
      period: 'Summer 2024',
      location: 'Remote',
      description:
        'Worked closely with the engineering team to develop interactive dashboards and internal tools. Learned about production workflows, version control, and team collaboration.',
      achievements: [
        'Implemented responsive UI with React and Tailwind',
        'Improved component reusability across projects',
        'Gained hands-on experience in Git and Agile sprints',
      ],
      tech: ['React', 'Tailwind', 'Git', 'Vite'],
      color: 'from-green-500 to-teal-500',
    },
    {
      company: 'Hackathon Projects',
      role: 'Full Stack Developer',
      period: '2023 - 2024',
      location: 'Various Universities',
      description:
        'Participated in multiple national and university hackathons building innovative apps focused on sustainability and productivity. Collaborated in teams to deliver prototypes under tight deadlines.',
      achievements: [
        'Won “Best UI/UX Design” at TechFest 2024',
        'Built a climate tracking app using OpenWeather API',
        'Integrated OpenAI API for AI-powered productivity tools',
      ],
      tech: ['Node.js', 'React', 'OpenAI', 'MongoDB'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      company: 'Freelance Developer',
      role: 'Student Freelancer',
      period: '2022 - Present',
      location: 'Remote',
      description:
        'Developing web applications and portfolio websites for small businesses and startups. Learning how to manage client communication, timelines, and full-stack deployments.',
      achievements: [
        'Completed 10+ client projects',
        'Delivered responsive and SEO-optimized websites',
        'Maintained long-term client relationships',
      ],
      tech: ['Next.js', 'Firebase', 'Stripe', 'Vercel'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
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
            Student <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Experience</span>
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-purple-500 to-pink-500" />

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
                  <div className="p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl hover:border-purple-500/50 transition-all duration-500 hover-target relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-5 rounded-3xl`} />
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{exp.company}</h3>
                          <p className="text-purple-400 font-medium mb-2">{exp.role}</p>
                        </div>
                        <ExternalLink
                          size={18}
                          className="text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer hover-target"
                        />
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
                      <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">Key Highlights:</h4>
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
                          <img
                            key={techIndex}
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech
                              .toLowerCase()
                              .replace(/\s+/g, '-')}/${tech
                              .toLowerCase()
                              .replace(/\s+/g, '-')}-original.svg`}
                            alt={tech}
                            className="h-6 w-6 opacity-80 hover:opacity-100 transition duration-300 hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]"
                          />
                        ))}
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
            Download Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
