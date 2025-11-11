import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Cpu, Bot, Sparkles } from 'lucide-react';
import profileImg from '/assets/pro.jpeg'; // ✅ Ensure path is correct

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
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
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Heading */}
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
            WHO I AM
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            About{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Profile Image */}
            <div className="flex justify-center mb-10">
              <motion.img
                src={profileImg}
                alt="Profile"
                className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-purple-500/30 shadow-lg shadow-purple-600/30 hover:scale-105 transition-transform duration-500"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </div>

            {/* Bio Text */}
            <div className="space-y-6 text-white text-lg leading-relaxed">
              <p>
                I'm{" "}
                <span className="text-purple-400 font-semibold">
                  Samiun Mahmud
                </span>
                , a Computer Science & Technology student and passionate Full
                Stack Developer dedicated to solving real-world problems through
                creativity and technology. My journey combines a solid
                foundation in programming with hands-on experience across both
                frontend and backend development.
              </p>
              <p>
                Beyond software, I’m deeply involved in Robotics and Artificial
                Intelligence, focusing on deep learning, computer vision, and
                intelligent system design. From developing autonomous rovers to
                AI-powered image processing and security tools, I aim to build
                technology that learns, adapts, and creates real impact.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12"
            >
              {[
                { number: "30+", label: "Projects Completed" },
                { number: "20+", label: "Hackathons & Competitions" },
                { number: "3+ Years", label: "Experience in Development" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="group p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 group-hover:border-purple-400/50 transition-colors duration-300">
                    <feature.icon size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white group-hover:text-gray-200 transition-colors duration-300">
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
