import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const experiences = [
    {
      company: "Betopia",
      role: "Full Stack Developer",
      period: "2024 - 2025",
      location: "Remote",
      description:
        "Supported development team in organizing and executing software projects. Conducted research to enhance features and improve systems.",
      achievements: [
        "Gained hands-on experience in software development lifecycle",
        "Conducted technical research to improve system features",
        "Collaborated with development teams on project execution",
        "Developed problem-solving skills in real-world projects",
      ],
      color: "from-blue-500 to-purple-500",
    },
    {
      company: "IUB Mars Rover Team",
      role: "Team Lead & Developer",
      period: "2017 - 2024",
      location: "Independent University, Bangladesh",
      description:
        "Led a multidisciplinary team in developing Mars Rover for international competitions. Managed technical execution and team coordination.",
      achievements: [
        "Won 1st place in Asia at University Rover Challenge 2018",
        "Managed project development and technical roadmap",
        "Coordinated between software, hardware, and mechanical teams",
        "Developed leadership and project management skills",
      ],
      color: "from-green-500 to-teal-500",
    },
    {
      company: "Freelance Development",
      role: "Backend Developer",
      period: "2017 - 2018",
      location: "Fiverr - Remote",
      description:
        "Built and maintained backend systems for web applications. Designed APIs and implemented scalable server-side solutions for clients.",
      achievements: [
        "Developed backend systems for multiple clients",
        "Designed and implemented RESTful APIs",
        "Gained experience in client communication",
        "Delivered solutions according to project specifications",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      company: "Robotics Competitions",
      role: "Robotics Developer & Competitor",
      period: "2017 - 2024",
      location: "National & International",
      description:
        "Participated in advanced robotics competitions including URC, Technoxian, TRACTION, and more.",
      achievements: [
        "Competed in University Rover Challenge 2018 (1st in Asia)",
        "Participated in Technoxian 2024 robotics competition",
        "Competed in TRACTION National Competition",
        "Developed robotics systems including SoccerBot, Line Follower, BattleBot",
        "Enhanced engineering & problem-solving skills",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 md:py-24 bg-gray-900 relative overflow-hidden"
    >
      {/* Background blobs - optimized for mobile */}
      <div className="absolute top-8 left-2 md:left-1/4 w-40 h-40 md:w-72 md:h-72 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-8 right-2 md:right-1/4 w-40 h-40 md:w-72 md:h-72 bg-pink-600/10 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-purple-400 text-sm md:text-lg font-medium mb-3">
            MY DEVELOPMENT JOURNEY
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-snug">
            Experience &{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">
            A combination of academic achievements, hands-on robotics, and
            professional software development experience.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line - Only shown on large screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-purple-500 to-pink-500" />

          <div className="space-y-10 md:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Desktop timeline marker */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-gray-900 z-20" />

                {/* Card Wrapper */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0"
                  }`}
                >
                  {/* Mobile timeline marker */}
                  <div className="md:hidden absolute -left-3 top-6 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-gray-900" />

                  <div className="p-5 md:p-6 bg-gray-800/50 border border-gray-700/50 rounded-xl md:rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:-translate-y-1">
                    {/* Accent Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-5 rounded-xl md:rounded-2xl`}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-lg md:text-xl font-bold text-white">
                        {exp.company}
                      </h3>
                      <p className="text-purple-400 text-sm font-medium mb-3">
                        {exp.role}
                      </p>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-3 text-gray-400 text-xs md:text-sm mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} /> {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} /> {exp.location}
                        </span>
                      </div>

                      <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <h4 className="text-white font-semibold text-sm md:text-base mb-2">
                        Key Achievements:
                      </h4>

                      <ul className="space-y-1.5 md:space-y-2">
                        {exp.achievements.map((a, i) => (
                          <li
                            key={i}
                            className="flex items-start text-gray-400 text-xs md:text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 mr-2" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Resume Button */}
        <div className="text-center mt-14 md:mt-20">
          <motion.a
            href="/resume/Samiun_Mahmud_Resume.pdf"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 md:px-10 py-3 md:py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm md:text-base shadow-md hover:shadow-purple-500/30 transition-all"
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
