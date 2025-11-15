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
  Next: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",

  Node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",

  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  Oracle: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",

  TensorFlow: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  Keras: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",

  OpenCV: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",

  ROS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ros/ros-original.svg",

  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",

  ThreeJS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
  Blender: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",

  API: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  Linux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",

  Arduino: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
  RaspberryPi: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
  Nvidia: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nvidia/nvidia-original.svg",
  Flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",


};



/* 🧠 Projects Data */
const projects = [
  {
    id: 14,
    title: "Impression Maker Bot – Mood-based Robot",
    category: "Robotics",
    description:
      "A robotics system that interacts with users based on emotion detection and adaptive behavioral responses.",
    tech: ["Arduino", "Python", "TensorFlow", "Linux", "ROS", "OpenCV"],
    image: "../../public/assets/ch1.jpg",
    live: "#",
  },
  {
    id: 5,
    title: "Optics Brand Website – Landing Page",
    category: "Web App",
    description:
      "A high-quality landing page for an optics brand, showcasing product lines and lens services with a conversion-focused layout.",
    tech: ["React", "ThreeJS", "Node", "TypeScript"],
    image: "../../public/assets/p5.png",
    live: "#",
  },
  {
    id: 22,
    title: "IUB Team Attendant – Mars Rover Prototype",
    category: "Robotics",
    description:
      "A Mars rover-inspired robot featuring autonomous navigation, object detection, and environmental sensing.",
    tech: ["Arduino","RaspberryPi","OpenCV","Python","Keras","TensorFlow"],
    image: "../../public/assets/att.jpg",
    live: "#",
  },
  {
    id: 3,
    title: "Full Stack Ecommerce Website – Dropshipping",
    category: "Full Stack Application",
    description:
      "A complete dropshipping-ready ecommerce platform with automated order sync, secure checkout, and admin dashboard.",
    tech: ["Next", "React", "Express", "Node", "MongoDB", "JavaScript", "Docker"],
    image: "../../public/assets/p4.png",
    live: "#",
  },
  {
    id: 18,
    title: "Line Following & Maze Solving Robot",
    category: "Robotics",
    description:
      "A robot capable of solving mazes and tracking paths using sensor-based algorithms.",
    tech: ["Arduino", "RaspberryPi"],
    image: "../../public/assets/con14.jpg",
    live: "#",
  },
  {
    id: 2,
    title: "Medical AI Chat Bot – New Medical Intelligence AI Doctor",
    category: "AI",
    description:
      "An advanced AI-powered medical assistant capable of analyzing symptoms and providing intelligent medical suggestions.",
    tech: ["Python", "TensorFlow", "Node", "React", "Express", "MongoDB"],
    image: "../../public/assets/p7.png",
    live: "#",
  },
  {
    id: 20,
    title: "Prototype Humanoid Robot with Gesture Control",
    category: "Robotics",
    description:
      "A humanoid robot capable of gesture recognition and real-time adaptive responses.",
    tech: ["Arduino","RaspberryPi","OpenCV","Python","Keras","TensorFlow","MongoDB","Next"],
    image: "../../public/assets/d2.jpg",
    live: "#",
  },
  {
    id: 9,
    title: "HOA Property Document Search App",
    category: "Web App",
    description:
      "A tool for quickly searching HOA information including rules, fees, and community details.",
    tech: ["React", "Node", "MongoDB", "Express", "TypeScript"],
    image: "../../public/assets/m2.png",
    live: "#",
  },
  {
    id: 21,
    title: "SmartBin – Environment Protection System",
    category: "Robotics",
    description:
      "An intelligent waste management system that detects garbage levels and sorts waste using computer vision.",
    tech: ["Arduino","RaspberryPi","OpenCV","Python","Keras","TensorFlow"],
    image: "../../public/assets/d1.webp",
    live: "#",
  },
  {
    id: 10,
    title: "Interior Design Website – Full Stack Application",
    category: "Web App",
    description:
      "A stylish interior design platform showcasing galleries, designers, and project details with backend management.",
    tech: ["React", "Node", "MongoDB", "Express", "TypeScript"],
    image: "../../public/assets/m4.png",
    live: "#",
  },
  {
    id: 16,
    title: "Robotic Arm with Autonomous Vehicle",
    category: "Robotics",
    description:
      "A hybrid robotics platform combining autonomous mobility with a precision-controlled robotic arm.",
    tech: ["Arduino","Python","TensorFlow","Linux","ROS","OpenCV","Keras","RaspberryPi"],
    image: "../../public/assets/con8.jpg",
    live: "#",
  },
  {
    id: 11,
    title: "Server Security Detection System – NIDS Algorithm",
    category: "Research",
    description:
      "A machine-learning-powered network intrusion detection system analyzing attack patterns in real-time.",
    tech: ["Python", "TensorFlow", "Linux", "ROS"],
    image: "../../public/assets/m7.png",
    live: "#",
  },
  {
    id: 8,
    title: "Landing Page With GSAP Animation",
    category: "Web App",
    description:
      "A modern GSAP-animated landing page with immersive transitions and scroll-based animations.",
    tech: ["React", "Node", "ThreeJS", "Express"],
    image: "../../public/assets/m1.png",
    live: "#",
  },
  {
    id: 17,
    title: "Wireless Controlled Autonomous Vehicle",
    category: "Robotics",
    description:
      "A wireless-controlled autonomous robot designed for navigation and robotics experimentation.",
    tech: ["Arduino"],
    image: "../../public/assets/con11.jpg",
    live: "#",
  },
  {
    id: 6,
    title: "Course Selling Website – Full Stack Application",
    category: "Full Stack App",
    description:
      "A complete LMS with instructor tools, payment systems, and student dashboards.",
    tech: ["Next", "Node", "MongoDB", "Express", "ThreeJS"],
    image: "../../public/assets/p2.png",
    live: "#",
  },
  {
    id: 23,
    title: "Pain Relief Sock – Smart Heating System",
    category: "Robotics",
    description:
      "A smart wearable device with automated temperature control for therapeutic pain relief.",
    tech: ["Arduino","RaspberryPi","OpenCV","Python","Keras","TensorFlow"],
    image: "../../public/assets/sock.jpg",
    live: "#",
  },
  {
    id: 7,
    title: "Class Maintain System – Full Stack App",
    category: "Web App",
    description:
      "A real-time class management system with multiple roles, online statuses, and secure data transfer.",
    tech: ["React", "Node", "MongoDB", "Express"],
    image: "../../public/assets/p1.png",
    live: "#",
  },
  {
    id: 15,
    title: "IoT Home Appliance Control System",
    category: "Robotics",
    description:
      "A smart IoT-based system for remote monitoring and control of home appliances.",
    tech: ["Arduino", "RaspberryPi"],
    image: "../../public/assets/con9.jpg",
    live: "#",
  },
  {
    id: 13,
    title: "ArUco Marker Detection & Pose Estimation",
    category: "Research",
    description:
      "A computer vision system using ArUco markers for robotics and augmented reality pose tracking.",
    tech: ["Python","TensorFlow","Linux","ROS","OpenCV"],
    image: "../../public/assets/m9.png",
    live: "#",
  },
  {
    id: 19,
    title: "Soccerbot – Autonomous Soccer Playing Robot",
    category: "Robotics",
    description:
      "A soccer robot capable of tracking, dribbling, and shooting with real-time sensor feedback.",
    tech: ["Arduino", "RaspberryPi"],
    image: "../../public/assets/con13.jpg",
    live: "#",
  },
  {
    id: 4,
    title: "AI Business Coaching Website – Landing Page",
    category: "Health Tech",
    description:
      "A high-conversion landing page for AI-driven business coaching with interactive elements and strong CTAs.",
    tech: ["React", "Node", "TypeScript"],
    image: "../../public/assets/p6.png",
    live: "#",
  },
  {
    id: 12,
    title: "IoT Watch – Tracking & Suggestion System",
    category: "Web App",
    description:
      "An IoT smartwatch system that tracks user activity and provides intelligent health insights.",
    tech: ["Python","TensorFlow","Linux","ROS","React","MongoDB"],
    image: "../../public/assets/m8.jpg",
    live: "#",
  },
];


const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="py-16 sm:py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects - Mobile Optimized */}
      <div className="absolute top-10 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-pink-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-purple-400 text-base sm:text-lg font-medium mb-3 sm:mb-4">MY WORK</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 px-2">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto px-4">
            A showcase of my work in AI, Robotics, and Full Stack Development.
          </p>
        </motion.div>

        {/* Projects Grid - Gap এবং Padding কমিয়ে দেওয়া হয়েছে */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 pb-0">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full mb-0"
            >
              <Tilt 
                tiltMaxAngleX={6} 
                tiltMaxAngleY={6} 
                perspective={900} 
                transitionSpeed={900}
                scale={1.02}
                gyroscope={true}
              >
                <div
                  onClick={() => setActive(active === project.id ? null : project.id)}
                  className={`group relative bg-gray-800/60 backdrop-blur-md border border-gray-700/50 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 ${
                    active === project.id
                      ? "border-purple-500/70 shadow-lg shadow-purple-500/20"
                      : "hover:border-purple-400/50"
                  }`}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-44 sm:h-52 md:h-60 lg:h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
                  </div>

                  {/* Card Content - Padding কমিয়ে দেওয়া হয়েছে */}
                  <div className="p-3 sm:p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="px-2 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-400 text-xs font-medium">
                          {project.category}
                        </span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 flex-shrink-0 ${
                            active === project.id
                              ? "rotate-180 text-purple-400"
                              : "text-gray-400"
                          }`}
                        />
                      </div>

                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                        {project.title}
                      </h3>

                      {/* Tech Icons */}
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-2">
                        {project.tech.map(
                          (tech, i) =>
                            techIcons[tech] && (
                              <motion.img
                                key={i}
                                src={techIcons[tech]}
                                alt={tech}
                                title={tech}
                                whileHover={{ scale: 1.1 }}
                                className="w-6 h-6 sm:w-7 sm:h-7 object-contain transition-all duration-300"
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
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2">
                          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-2">
                            {project.description}
                          </p>

                          <div className="flex flex-col sm:flex-row gap-1 sm:gap-3">
                            <a
                              href={project.live}
                              className="flex items-center gap-1 text-purple-400 hover:text-pink-400 transition-colors text-xs sm:text-sm py-1"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink size={12} /> Live Demo
                            </a>
                            <a
                              href="#contact"
                              className="flex items-center gap-1 text-purple-400 hover:text-pink-400 transition-colors text-xs sm:text-sm py-1"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Mail size={12} /> Contact Me
                            </a>
                          </div>
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