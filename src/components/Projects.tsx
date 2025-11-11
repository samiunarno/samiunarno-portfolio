import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { ChevronDown, ExternalLink, Mail } from "lucide-react";

/* ✅ Reliable Tech Icon Sources */
const techIcons = {
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Cplusplus: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Next: "https://skillicons.dev/icons?i=nextjs",
  Node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Express: "https://skillicons.dev/icons?i=express",
  MongoDB: "https://skillicons.dev/icons?i=mongodb",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  TensorFlow: "https://skillicons.dev/icons?i=tensorflow",
  Keras: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
  
  OpenCV: "https://skillicons.dev/icons?i=opencv",
  ROS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ros/ros-original.svg",
  Docker: "https://skillicons.dev/icons?i=docker",
  Git: "https://skillicons.dev/icons?i=git",
  GitHub: "https://skillicons.dev/icons?i=github",
  ThreeJS: "https://skillicons.dev/icons?i=threejs",
  Blender: "https://skillicons.dev/icons?i=blender",
  API: "https://skillicons.dev/icons?i=postman",
  Linux: "https://skillicons.dev/icons?i=linux",
  Oracle: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
};

/* 🧠 Projects Data */
const projects = [
  {
    id: 1,
    title: "Prohori 247 – AI-Powered Security Tool",
    category: "AI & Robotics",
    description:
      "An intelligent security system capable of real-time surveillance, object detection, and automated alerts using deep learning and IoT integration.",
    tech: ["Python", "TensorFlow", "Node", "React"],
    image:
      "https://images.pexels.com/photos/10543891/pexels-photo-10543891.jpeg?auto=compress&cs=tinysrgb&w=800",
    live: "#",
  },
  {
    id: 2,
    title: "AI Agent Chatbot",
    category: "AI / NLP",
    description:
      "Conversational AI assistant that uses OpenAI GPT API for human-like responses and intelligent workflow automation.",
    tech: ["Python", "OpenAI", "Node", "React"],
    image:
      "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800",
    live: "#",
  },
  {
    id: 3,
    title: "Fresh & Damage Product Detection",
    category: "Computer Vision",
    description:
      "Trained deep learning model to classify fruits as fresh or damaged using convolutional neural networks and image processing.",
    tech: ["Python", "TensorFlow", "OpenCV"],
    image:
      "https://images.pexels.com/photos/1114429/pexels-photo-1114429.jpeg?auto=compress&cs=tinysrgb&w=800",
    live: "#",
  },
  {
    id: 4,
    title: "Smart Fitness Solution (Garmin API)",
    category: "Health Tech",
    description:
      "Personalized AI fitness assistant integrating Garmin health API, providing real-time analytics and custom workout recommendations.",
    tech: ["React", "Node", "MongoDB", "API"],
    image:
      "https://images.pexels.com/photos/3768913/pexels-photo-3768913.jpeg?auto=compress&cs=tinysrgb&w=800",
    live: "#",
  },
  {
    id: 5,
    title: "ArUco Marker Detection & Pose Estimation",
    category: "Robotics / Vision",
    description:
      "Implemented OpenCV-based ArUco detection for robotics localization, 3D pose estimation, and computer vision-based navigation.",
    tech: ["Python", "OpenCV", "ROS"],
    image:
      "https://images.pexels.com/photos/8437005/pexels-photo-8437005.jpeg?auto=compress&cs=tinysrgb&w=800",
    live: "#",
  },
  {
    id: 6,
    title: "Real-Time Chat Application",
    category: "Web App",
    description:
      "Full-stack chat app supporting real-time messaging, online status, and private rooms using Socket.io and Next.js.",
    tech: ["Next", "Node", "MongoDB"],
    image:
      "https://images.pexels.com/photos/276467/pexels-photo-276467.jpeg?auto=compress&cs=tinysrgb&w=800",
    live: "#",
  },
];

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [active, setActive] = useState(null);

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
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my work in AI, Robotics, and Full Stack Development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} perspective={900} transitionSpeed={900}>
                <div
                  onClick={() => setActive(active === project.id ? null : project.id)}
                  className={`group relative bg-gray-800/60 backdrop-blur-md border border-gray-700/50 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ${
                    active === project.id
                      ? "border-purple-500/70 shadow-lg shadow-purple-500/30"
                      : "hover:border-purple-400/50"
                  }`}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-400 text-xs font-medium">
                          {project.category}
                        </span>
                        <ChevronDown
                          size={22}
                          className={`transition-transform duration-300 ${
                            active === project.id
                              ? "rotate-180 text-purple-400"
                              : "text-gray-400"
                          }`}
                        />
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>

                      {/* Tech Icons (no empty boxes) */}
                      <div className="flex flex-wrap gap-3 mb-4">
                        {project.tech.map(
                          (tech, i) =>
                            techIcons[tech] && (
                              <motion.img
                                key={i}
                                src={techIcons[tech]}
                                alt={tech}
                                title={tech}
                                whileHover={{ scale: 1.15 }}
                                className="w-9 h-9 object-contain transition-all duration-300"
                              />
                            )
                        )}
                      </div>

                      {/* Accordion Details */}
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={
                          active === project.id
                            ? { height: "auto", opacity: 1 }
                            : { height: 0, opacity: 0 }
                        }
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden text-gray-400 text-sm leading-relaxed"
                      >
                        <p className="mb-3">{project.description}</p>

                        <div className="flex gap-4 mt-3">
                          <a
                            href={project.live}
                            className="flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors"
                          >
                            <ExternalLink size={16} /> Live Demo
                          </a>
                          <a
                            href="#contact"
                            className="flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors"
                          >
                            <Mail size={16} /> Contact Me
                          </a>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
