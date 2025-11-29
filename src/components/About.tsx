import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Cpu, Bot, Sparkles } from 'lucide-react';
import profileImg from '/assets/pro.jpeg';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      icon: Code,
      title: "Full Stack Development",
      description:
        "Learning and building complete applications from frontend to backend with a focus on clean, efficient, and scalable architecture.",
    },
    {
      icon: Cpu,
      title: "AI & Deep Learning",
      description:
        "Exploring artificial intelligence, deep learning, and computer vision to develop smart, data-driven solutions.",
    },
    {
      icon: Bot,
      title: "Robotics & Automation",
      description:
        "Applying AI and control systems to design intelligent robots capable of performing real-world tasks autonomously.",
    },
    {
      icon: Sparkles,
      title: "Innovation & Research",
      description:
        "Driven by curiosity to experiment, learn, and turn creative ideas into meaningful technological projects.",
    },
  ];

  return (
    <section id="about" className="py-16 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-pink-600/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-purple-400 text-sm sm:text-base font-medium mb-2">
            WHO I AM
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Profile Image */}
            <div className="flex justify-center mb-8">
              <motion.img
                src={profileImg}
                alt="Profile"
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-purple-500/30 shadow-lg shadow-purple-600/30 hover:scale-105 transition-transform duration-500"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
              />
            </div>

            {/* Bio */}
            <div className="space-y-4 text-white text-base sm:text-lg leading-relaxed px-2 sm:px-0">
              <p>
                I'm{" "}
                <span className="text-purple-400 font-semibold">
                  Samiun Mahmud
                </span>
                , a Computer Science & Technology student and passionate Full
                Stack Developer dedicated to solving real-world problems through
                creativity and technology.
              </p>

              <p>
                I’m deeply involved in Robotics and Artificial Intelligence,
                focusing on deep learning, computer vision, and intelligent
                system design.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 mt-10"
            >
              {[
                { number: "30+", label: "Projects" },
                { number: "20+", label: "Hackathons" },
                { number: "3+ Years", label: "Experience" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-4 sm:space-y-6"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.02, x: 8 }}
                className="group p-4 sm:p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 group-hover:border-purple-400/50 transition-colors duration-300">
                    <feature.icon size={22} className="text-purple-400" />
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-gray-300 text-sm sm:text-base group-hover:text-gray-200 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
