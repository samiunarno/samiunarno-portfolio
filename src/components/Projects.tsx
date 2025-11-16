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



const projects = [
  {
    id: 14,
    title: "Impression Maker Bot – Mood-based Robot",
    category: "Robotics",
    description:
      "Developed an emotion-aware robotic platform capable of interpreting human expressions and delivering synchronized gesture responses for enhanced human–machine interaction.",
    tech: ["Arduino", "Python", "TensorFlow", "Linux", "ROS", "OpenCV"],
    image: "/assets/ch1.jpg",
    live: "#",
  },
  {
    id: 5,
    title: "Optics Brand Website – Landing Page",
    category: "Web App",
    description:
      "Produced a visually refined landing experience for a premium optics brand, offering a product-centric layout designed to maximize engagement and conversion.",
    tech: ["React", "ThreeJS", "Node", "TypeScript"],
    image: "/assets/p5.png",
    live: "#",
  },
  {
    id: 22,
    title: "IUB Team Attendant New Generation Mars Rover",
    category: "Robotics",
    description:
      "Engineered a rover-inspired autonomous system featuring terrain analysis, obstacle detection, and multi-sensor environmental monitoring for research-grade field testing.",
    tech: ["Arduino","RaspberryPi","OpenCV","Python","Keras","TensorFlow"],
    image: "/assets/attendant.JPG",
    live: "#",
  },
  {
    id: 3,
    title: "Full Stack Ecommerce Website – Dropshipping",
    category: "Full Stack Application",
    description:
      "Delivered a fully automated ecommerce infrastructure with real-time inventory sync, order automation, secure payment flows, and a robust admin control panel.",
    tech: ["Next", "React", "Express", "Node", "MongoDB", "JavaScript", "Docker"],
    image: "/assets/p4.png",
    live: "#",
  },
  {
    id: 18,
    title: "Line Following & Maze Solving Robot",
    category: "Robotics",
    description:
      "Built an autonomous navigation system capable of precision line tracking and adaptive maze solving through intelligent sensor-driven control logic.",
    tech: ["Arduino", "RaspberryPi"],
    image: "/assets/con14.jpg",
    live: "#",
  },
  {
    id: 2,
    title: "Medical AI Chat Bot – Intelligent AI Doctor",
    category: "AI",
    description:
      "Designed an AI-powered medical assistant that evaluates user inputs, interprets symptoms, and provides structured, context-aware health recommendations.",
    tech: ["Python", "TensorFlow", "Node", "React", "Express", "MongoDB"],
    image: "/assets/p7.png",
    live: "#",
  },
  {
    id: 20,
    title: "Prototype Humanoid Robot with Gesture Control",
    category: "Robotics",
    description:
      "Created a gesture-responsive humanoid robot with real-time detection, adaptive movement execution, and modular expansion for advanced interaction scenarios.",
    tech: ["Arduino","RaspberryPi","OpenCV","Python","Keras","TensorFlow","MongoDB","Next"],
    image: "/assets/d2.jpg",
    live: "#",
  },
  {
    id: 9,
    title: "HOA Property Document Search App",
    category: "Web App",
    description:
      "Implemented a high-performance document retrieval system enabling instant access to HOA resources through optimized search indexing and clean UI design.",
    tech: ["React", "Node", "MongoDB", "Express", "TypeScript"],
    image: "/assets/m2.png",
    live: "#",
  },
  {
    id: 21,
    title: "SmartBin – Intelligent Waste Management",
    category: "Robotics",
    description:
      "Introduced an AI-enabled waste management solution featuring automated waste type identification and bin-level monitoring for operational efficiency.",
    tech: ["Arduino","RaspberryPi","OpenCV","Python","Keras","TensorFlow"],
    image: "/assets/d1.webp",
    live: "#",
  },
  {
    id: 10,
    title: "Interior Design Website – Full Stack",
    category: "Web App",
    description:
      "Delivered a premium portfolio platform for interior design professionals, complete with dynamic galleries, project filtering, and integrated content management.",
    tech: ["React", "Node", "MongoDB", "Express", "TypeScript"],
    image: "/assets/m4.png",
    live: "#",
  },
  {
    id: 16,
    title: "Robotic Arm with Autonomous Vehicle",
    category: "Robotics",
    description:
      "Integrated a precision robotic arm with a fully autonomous vehicle chassis to enable multi-role operations, targeted object handling, and controlled mobility.",
    tech: ["Arduino","Python","TensorFlow","Linux","ROS","OpenCV","Keras","RaspberryPi"],
    image: "/assets/con8.jpg",
    live: "#",
  },
  {
    id: 11,
    title: "Server Security Detection System – NIDS",
    category: "Research",
    description:
      "Developed a network intrusion detection framework that leverages machine learning to classify threats and analyze real-time traffic anomalies.",
    tech: ["Python", "TensorFlow", "Linux", "ROS"],
    image: "/assets/m7.png",
    live: "#",
  },
  {
    id: 8,
    title: "Landing Page With GSAP Animation",
    category: "Web App",
    description:
      "Crafted an interactive, animation-rich landing experience using GSAP to deliver seamless motion transitions and elevated brand presence.",
    tech: ["React", "Node", "ThreeJS", "Express"],
    image: "/assets/m1.png",
    live: "#",
  },
  {
    id: 17,
    title: "Wireless Controlled Autonomous Vehicle",
    category: "Robotics",
    description:
      "Constructed a dual-mode mobility platform supporting both wireless remote operation and autonomous navigation for research and experimentation.",
    tech: ["Arduino"],
    image: "/assets/con11.jpg",
    live: "#",
  },
  {
    id: 6,
    title: "Course Selling Website – LMS Platform",
    category: "Full Stack App",
    description:
      "Delivered a full-scale LMS platform with instructor dashboards, analytics, course publishing, and integrated payment workflow for seamless learning delivery.",
    tech: ["Next", "Node", "MongoDB", "Express", "ThreeJS"],
    image: "/assets/p2.png",
    live: "#",
  },
  {
    id: 23,
    title: "Pain Relief Sock – Smart Heating Device",
    category: "Robotics",
    description:
      "Engineered a sensor-driven therapeutic wearable featuring automated heat control and real-time temperature regulation for personalized comfort.",
    tech: ["Arduino","RaspberryPi","OpenCV","Python","Keras","TensorFlow"],
    image: "/assets/sock.jpg",
    live: "#",
  },
  {
    id: 24,
    title: "Autonomous Drone Security Surveillance",
    category: "Robotics",
    description:
      "Designed a lightweight surveillance drone system capable of real-time video capture, environmental scanning, and AI-assisted monitoring.",
    tech: ["Arduino","RaspberryPi","OpenCV","Python","Keras","TensorFlow"],
    image: "/assets/dr1.JPG",
    live: "#",
  },
  {
    id: 7,
    title: "Class Maintain System – Real-time Platform",
    category: "Web App",
    description:
      "Created a real-time academic management solution featuring attendance tracking, activity monitoring, and secure data handling for institutional use.",
    tech: ["React", "Node", "MongoDB", "Express"],
    image: "/assets/p1.png",
    live: "#",
  },
  {
    id: 15,
    title: "IoT Home Appliance Control System",
    category: "Robotics",
    description:
      "Enabled remote management of household appliances through IoT communication, offering streamlined automation and improved user convenience.",
    tech: ["Arduino", "RaspberryPi"],
    image: "/assets/con9.jpg",
    live: "#",
  },
  {
    id: 13,
    title: "ArUco Marker Detection & Pose Estimation",
    category: "Research",
    description:
      "Implemented a real-time marker detection and pose estimation pipeline used for robotics positioning, augmented reality, and spatial analysis.",
    tech: ["Python","TensorFlow","Linux","ROS","OpenCV"],
    image: "/assets/m9.png",
    live: "#",
  },
  {
    id: 19,
    title: "Soccerbot – Autonomous Soccer Robot",
    category: "Robotics",
    description:
      "Developed a competitive autonomous soccer robot capable of ball tracking, precision movement, and coordinated shooting algorithms.",
    tech: ["Arduino", "RaspberryPi"],
    image: "/assets/con13.jpg",
    live: "#",
  },
  {
    id: 4,
    title: "AI Business Coaching Website – Landing Page",
    category: "Health Tech",
    description:
      "Produced a polished landing platform for an AI-driven coaching service, featuring dynamic content, structured messaging, and optimized UI flow.",
    tech: ["React", "Node", "TypeScript"],
    image: "/assets/p6.png",
    live: "#",
  },
  {
    id: 12,
    title: "IoT Watch – Smart Tracking & Suggestion System",
    category: "Web App",
    description:
      "Designed an IoT-enabled wearable system that monitors user activity and delivers data-backed recommendations through integrated ML algorithms.",
    tech: ["Python","TensorFlow","Linux","ROS","React","MongoDB"],
    image: "/assets/m8.jpg",
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