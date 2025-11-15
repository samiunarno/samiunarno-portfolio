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

/* 🧠 Projects Data — FIXED FOR VERCEL */
const projects = [
  { id: 14, title: "Impression Maker Bot – Mood-based Robot", category: "Robotics",
    description: "A robotics system that interacts with users based on emotion detection and adaptive behavioral responses.",
    tech: ["Arduino", "Python", "TensorFlow", "Linux", "ROS", "OpenCV"], image: "/assets/ch1.jpg", live: "#" },

  { id: 5, title: "Optics Brand Website – Landing Page", category: "Web App",
    description: "A high-quality landing page for an optics brand.",
    tech: ["React", "ThreeJS", "Node", "TypeScript"], image: "/assets/p5.png", live: "#" },

  { id: 22, title: "IUB Team Attendant – Mars Rover Prototype", category: "Robotics",
    description: "A Mars rover-inspired robot with autonomous navigation.",
    tech: ["Arduino","RaspberryPi","OpenCV","Python","Keras","TensorFlow"], image: "/assets/att.jpg", live: "#" },

  { id: 3, title: "Full Stack Ecommerce Website – Dropshipping", category: "Full Stack Application",
    description: "A complete ecommerce platform with admin dashboard.",
    tech: ["Next", "React", "Express", "Node", "MongoDB", "JavaScript", "Docker"], image: "/assets/p4.png", live: "#" },

  { id: 18, title: "Line Following & Maze Solving Robot", category: "Robotics",
    description: "A robot capable of solving mazes using sensors.",
    tech: ["Arduino", "RaspberryPi"], image: "/assets/con14.jpg", live: "#" },

  { id: 2, title: "Medical AI Chat Bot – AI Doctor", category: "AI",
    description: "AI bot that analyzes symptoms and gives suggestions.",
    tech: ["Python", "TensorFlow", "Node", "React", "Express", "MongoDB"], image: "/assets/p7.png", live: "#" },

  { id: 20, title: "Prototype Humanoid Robot with Gesture Control", category: "Robotics",
    description: "Humanoid robot capable of gesture recognition.",
    tech: ["Arduino","RaspberryPi","OpenCV","Python","Keras","TensorFlow","MongoDB","Next"], image: "/assets/d2.jpg", live: "#" },

  { id: 9, title: "HOA Property Document Search App", category: "Web App",
    description: "A tool for quickly searching HOA information.",
    tech: ["React", "Node", "MongoDB", "Express", "TypeScript"], image: "/assets/m2.png", live: "#" },

  { id: 21, title: "SmartBin – Environment Protection System", category: "Robotics",
    description: "A smart waste management & detection system.",
    tech: ["Arduino","RaspberryPi","OpenCV","Python","Keras","TensorFlow"], image: "/assets/d1.webp", live: "#" },

  { id: 10, title: "Interior Design Website", category: "Web App",
    description: "A stylish interior design platform.",
    tech: ["React", "Node", "MongoDB", "Express", "TypeScript"], image: "/assets/m4.png", live: "#" },

  { id: 16, title: "Robotic Arm with Autonomous Vehicle", category: "Robotics",
    description: "An autonomous vehicle with robotic arm.",
    tech: ["Arduino","Python","TensorFlow","Linux","ROS","OpenCV","Keras","RaspberryPi"], image: "/assets/con8.jpg", live: "#" },

  { id: 11, title: "Server Security Detection System – NIDS Algorithm", category: "Research",
    description: "A ML based intrusion detection system.",
    tech: ["Python", "TensorFlow", "Linux", "ROS"], image: "/assets/m7.png", live: "#" },

  { id: 8, title: "Landing Page With GSAP Animation", category: "Web App",
    description: "GSAP animated landing page.",
    tech: ["React", "Node", "ThreeJS", "Express"], image: "/assets/m1.png", live: "#" },

  { id: 17, title: "Wireless Autonomous Vehicle", category: "Robotics",
    description: "Wireless-controlled autonomous robot.",
    tech: ["Arduino"], image: "/assets/con11.jpg", live: "#" },

  { id: 6, title: "Course Selling Website – LMS", category: "Full Stack App",
    description: "A complete LMS with student dashboard.",
    tech: ["Next", "Node", "MongoDB", "Express", "ThreeJS"], image: "/assets/p2.png", live: "#" },

  { id: 23, title: "Pain Relief Sock – Smart Heating System", category: "Robotics",
    description: "A smart wearable device for pain relief.",
    tech: ["Arduino","RaspberryPi","OpenCV","Python","Keras","TensorFlow"], image: "/assets/sock.jpg", live: "#" },

  { id: 7, title: "Class Maintain System", category: "Web App",
    description: "Real-time class management system.",
    tech: ["React", "Node", "MongoDB", "Express"], image: "/assets/p1.png", live: "#" },

  { id: 15, title: "IoT Home Appliance Control", category: "Robotics",
    description: "Smart IoT-based home control system.",
    tech: ["Arduino", "RaspberryPi"], image: "/assets/con9.jpg", live: "#" },

  { id: 13, title: "ArUco Marker Detection", category: "Research",
    description: "Pose estimation using ArUco markers.",
    tech: ["Python","TensorFlow","Linux","ROS","OpenCV"], image: "/assets/m9.png", live: "#" },

  { id: 19, title: "Soccerbot – Autonomous Robot", category: "Robotics",
    description: "A robot that plays soccer autonomously.",
    tech: ["Arduino", "RaspberryPi"], image: "/assets/con13.jpg", live: "#" },

  { id: 4, title: "AI Business Coaching Website", category: "Health Tech",
    description: "AI-driven business coaching landing page.",
    tech: ["React", "Node", "TypeScript"], image: "/assets/p6.png", live: "#" },

  { id: 12, title: "IoT Watch – Tracking System", category: "Web App",
    description: "IoT smartwatch system with AI insights.",
    tech: ["Python","TensorFlow","Linux","ROS","React","MongoDB"], image: "/assets/m8.jpg", live: "#" },
];

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="py-16 sm:py-20 bg-gray-900 relative overflow-hidden">
      
      <div className="absolute top-10 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-pink-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-purple-400 text-base sm:text-lg font-medium mb-3">MY WORK</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto">A showcase of my work in AI, Robotics, and Full Stack Development.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {projects.map((project, index) => (
            <motion.div key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} perspective={900} transitionSpeed={900} scale={1.02} gyroscope>
                
                <div onClick={() => setActive(active === project.id ? null : project.id)}
                  className={`group bg-gray-800/60 backdrop-blur-md border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 
                    ${active === project.id ? "border-purple-500/70 shadow-purple-500/20" : "hover:border-purple-400/50"}`}
                >

                  <div className="relative h-44 sm:h-52 md:h-60 lg:h-64 overflow-hidden">
                    <img src={project.image} alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
                  </div>

                  <div className="p-3 sm:p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="px-2 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-400 text-xs">
                        {project.category}
                      </span>

                      <ChevronDown size={16}
                        className={`transition-transform ${active === project.id ? "rotate-180 text-purple-400" : "text-gray-400"}`}
                      />
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-purple-400 line-clamp-2">
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-2">
                      {project.tech.map((tech, i) =>
                        techIcons[tech] && (
                          <motion.img key={i} src={techIcons[tech]} title={tech}
                            whileHover={{ scale: 1.1 }}
                            className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                          />
                        )
                      )}
                    </div>

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={active === project.id ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2">
                        <p className="text-gray-400 text-xs sm:text-sm mb-2">{project.description}</p>

                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                          <a href={project.live} className="flex items-center gap-1 text-purple-400 hover:text-pink-400 text-xs sm:text-sm"
                            onClick={(e) => e.stopPropagation()}>
                            <ExternalLink size={12} /> Live Demo
                          </a>

                          <a href="#contact" className="flex items-center gap-1 text-purple-400 hover:text-pink-400 text-xs sm:text-sm"
                            onClick={(e) => e.stopPropagation()}>
                            <Mail size={12} /> Contact Me
                          </a>
                        </div>
                      </div>
                    </motion.div>

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
