import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Globe,
  Smartphone,
  Database,
  Palette,
  Code2,
  Zap,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Crafting responsive, interactive web applications with React, Next.js, and Node.js for an exceptional user experience.",
      features: [
        "Responsive Interfaces",
        "Modern Frameworks",
        "Clean Code Practices",
        "Scalable Architecture",
      ],
      color: "from-blue-500 via-cyan-400 to-cyan-500",
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
      color: "from-purple-500 via-pink-400 to-pink-500",
    },
    {
      icon: Database,
      title: "Backend & Databases",
      description:
        "Designing reliable backend systems and APIs using Node.js, Express, and MongoDB with focus on security and efficiency.",
      features: [
        "RESTful APIs",
        "Data Modeling",
        "Cloud Integration",
        "Authentication",
      ],
      color: "from-green-500 via-emerald-400 to-emerald-500",
    },
    {
      icon: Palette,
      title: "UI / UX & Design",
      description:
        "Designing intuitive and aesthetic interfaces that deliver clarity, flow, and a delightful user experience.",
      features: [
        "Wireframing & Prototyping",
        "User-Centered Design",
        "Visual Consistency",
        "Accessibility Focus",
      ],
      color: "from-orange-500 via-red-400 to-red-500",
    },
    {
      icon: Code2,
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
      className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-purple-400 text-lg font-medium mb-3 tracking-wide">
            WHAT I DO
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Areas of Focus
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            I’m passionate about creating impactful digital solutions, exploring
            AI and robotics, and continuously learning through real-world
            projects and collaboration.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * index }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative"
            >
              <div className="relative h-full p-8 bg-gray-900/60 backdrop-blur-md border border-gray-700/50 rounded-3xl transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-400/50">
                {/* Icon */}
                <div
                  className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-20 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/10`}
                >
                  <service.icon size={36} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-6 text-[15px] leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                    >
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Explore Button */}
                <motion.a
                  href="#projects"
                  whileHover={{ x: 6 }}
                  className="flex items-center text-purple-400 hover:text-pink-400 font-medium transition-all duration-300"
                >
                  Explore Projects
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </motion.a>

                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-500 pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 text-center"
        >
          <div className="inline-block p-10 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-md border border-purple-500/30 rounded-3xl shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-500">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Let’s Build, Learn & Innovate Together 🚀
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Always open to hackathons, open-source projects, and research
              collaborations. Let’s create something meaningful and push
              boundaries together!
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
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
