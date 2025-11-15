import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Globe,
  Smartphone,
  Database,
  Palette,
  Bot,
  Zap,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      icon: Bot,
      title: "ROS Development",
      description:
        "Building intelligent robotic systems using the Robot Operating System (ROS), integrating sensors, computer vision, and autonomous control pipelines.",
      features: [
        "ROS1 & ROS2 Frameworks",
        "SLAM & Navigation",
        "Sensor Integration",
        "Autonomous Control Systems",
      ],
      color: "from-blue-500 via-cyan-400 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Full Stack Development",
      description:
        "Building seamless, end-to-end web applications — from dynamic frontends to secure backends — using modern JavaScript frameworks.",
      features: [
        "Frontend & Backend Expertise",
        "API Development",
        "Database Design",
        "Cloud & DevOps Integration",
      ],
      color: "from-purple-500 via-pink-400 to-pink-500",
    },
    {
      icon: Database,
      title: "Deep Learning",
      description:
        "Exploring neural networks and AI systems to create models for computer vision, natural language processing, and intelligent automation.",
      features: [
        "Neural Network Design",
        "TensorFlow & PyTorch",
        "Model Optimization",
        "AI Research & Applications",
      ],
      color: "from-green-500 via-emerald-400 to-emerald-500",
    },
    {
      icon: Palette,
      title: "AI, Robotics & 3D Projects",
      description:
        "Exploring AI, deep learning, and robotics while bringing visuals to life using 3D technologies like Three.js.",
      features: [
        "TensorFlow & Keras",
        "Computer Vision",
        "3D Visualization",
        "Robotics Prototyping",
      ],
      color: "from-violet-500 via-purple-400 to-purple-500",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description:
        "Building mobile apps with React Native to bring smooth, cross-platform performance to every device.",
      features: [
        "React Native",
        "Cross-Platform Builds",
        "Native UI Components",
        "App Store Ready",
      ],
      color: "from-orange-500 via-red-400 to-red-500",
    },
    {
      icon: Zap,
      title: "Learning & Research",
      description:
        "Participating in hackathons, open-source projects, and continuous learning to stay at the edge of innovation.",
      features: [
        "Hackathons & Competitions",
        "Open-Source",
        "Research Projects",
        "Continuous Learning",
      ],
      color: "from-yellow-500 via-amber-400 to-amber-500",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Background Effects - Responsive */}
      <div className="absolute top-0 right-4 sm:right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-4 sm:left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-pink-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20 px-2"
        >
          <p className="text-purple-400 text-sm sm:text-base lg:text-lg font-medium mb-2 sm:mb-3 tracking-wide">
            WHAT I DO
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Areas of Focus
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2">
            I'm passionate about developing robotic systems, full-stack
            applications, deep learning models, and exploring AI, 3D, and
            research-driven innovation.
          </p>
        </motion.div>

        {/* Services Grid - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative h-full p-4 sm:p-6 lg:p-8 bg-gray-900/60 backdrop-blur-md border border-gray-700/50 rounded-xl sm:rounded-2xl lg:rounded-3xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:border-purple-400/30">
                {/* Icon */}
                <div
                  className={`inline-flex p-3 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-20 mb-4 sm:mb-5 lg:mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-black/10`}
                >
                  <service.icon size={24} className="sm:w-6 sm:h-6 lg:w-9 lg:h-9 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-4 sm:mb-5 lg:mb-6 text-xs sm:text-sm lg:text-[15px] leading-relaxed group-hover:text-gray-300 transition-colors duration-300 line-clamp-3">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6 lg:mb-8">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                    >
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Explore Button */}
                <motion.a
                  href="#projects"
                  whileHover={{ x: 4 }}
                  className="flex items-center text-purple-400 hover:text-pink-400 font-medium text-sm sm:text-base transition-all duration-300 w-fit"
                >
                  Explore Projects
                  <ArrowRight
                    size={14}
                    className="ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0"
                  />
                </motion.a>

                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 sm:group-hover:opacity-10 blur-xl transition-all duration-500 pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center px-2"
        >
          <div className="inline-block p-6 sm:p-8 lg:p-10 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-md border border-purple-500/30 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300 w-full max-w-4xl">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Let's Build, Learn & Innovate Together 🚀
            </h3>
            <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Always open to hackathons, open-source projects, and research
              collaborations. Let's create something meaningful and push
              boundaries together!
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white text-sm sm:text-base hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;