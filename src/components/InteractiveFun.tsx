/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Sphere, Box, Cylinder, Torus } from "@react-three/drei";
import { useRef, useState } from "react";
import { Mesh, Group } from "three";
import { Code, Cpu, Database, Globe, Server, Brain, Circuit, Binary } from "lucide-react";

const TechArchitecture = ({
  type,
  position,
  color,
  isActive,
  onClick,
}: {
  type: string;
  position: [number, number, number];
  color: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  const groupRef = useRef<Group>(null);
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
    if (meshRef.current && isActive) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
    }
  });

  const getArchitecture = () => {
    const scale = isActive ? 1.3 : 1;
    
    switch (type) {
      case "fullstack":
        return (
          <group scale={[scale * 0.8, scale * 0.8, scale * 0.8]}>
            {/* Frontend Layer */}
            <Box args={[2, 0.2, 1.5]} position={[0, 1.5, 0]}>
              <meshStandardMaterial color="#61dafb" metalness={0.3} roughness={0.7} />
            </Box>
            {/* Backend Layer */}
            <Box args={[1.8, 0.2, 1.3]} position={[0, 0.5, 0]}>
              <meshStandardMaterial color="#68d391" metalness={0.5} roughness={0.5} />
            </Box>
            {/* Database Layer */}
            <Cylinder args={[0.8, 0.8, 0.3, 16]} position={[0, -0.5, 0]}>
              <meshStandardMaterial color="#f6ad55" metalness={0.7} roughness={0.3} />
            </Cylinder>
            {/* Connection Lines */}
            <Box args={[0.05, 0.8, 0.05]} position={[0, 1, 0]}>
              <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
            </Box>
            <Box args={[0.05, 0.8, 0.05]} position={[0, 0, 0]}>
              <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
            </Box>
          </group>
        );
      
      case "robotics":
        return (
          <group scale={[scale * 0.7, scale * 0.7, scale * 0.7]}>
            {/* Robot Base */}
            <Box args={[1.5, 0.3, 1.2]} position={[0, 0, 0]}>
              <meshStandardMaterial color="#4fd1c7" metalness={0.8} roughness={0.2} />
            </Box>
            {/* Sensors */}
            <Sphere args={[0.2, 16, 16]} position={[-0.6, 0.3, 0.4]}>
              <meshStandardMaterial color="#fed7d7" emissive="#fed7d7" emissiveIntensity={0.4} />
            </Sphere>
            <Sphere args={[0.2, 16, 16]} position={[0.6, 0.3, 0.4]}>
              <meshStandardMaterial color="#fed7d7" emissive="#fed7d7" emissiveIntensity={0.4} />
            </Sphere>
            {/* AI Brain */}
            <Box args={[0.8, 0.8, 0.8]} position={[0, 1, 0]} rotation={[0.5, 0.5, 0]}>
              <meshStandardMaterial color={color} wireframe />
            </Box>
            {/* Connections */}
            <Box args={[0.03, 1.2, 0.03]} position={[-0.6, 0.6, 0.4]} rotation={[0.2, 0, 0]}>
              <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
            </Box>
            <Box args={[0.03, 1.2, 0.03]} position={[0.6, 0.6, 0.4]} rotation={[-0.2, 0, 0]}>
              <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
            </Box>
          </group>
        );
      
      case "ai-ml":
        return (
          <group scale={[scale * 0.6, scale * 0.6, scale * 0.6]}>
            {/* Neural Network Layers */}
            {[-1, 0, 1].map((x, i) => (
              <group key={i}>
                {[-1, -0.5, 0, 0.5, 1].map((y, j) => (
                  <Sphere key={j} args={[0.15, 16, 16]} position={[x * 2, y, 0]}>
                    <meshStandardMaterial 
                      color={color} 
                      emissive={color}
                      emissiveIntensity={isActive ? 0.3 : 0.1}
                    />
                  </Sphere>
                ))}
              </group>
            ))}
            {/* Connection Weights */}
            {isActive && (
              <>
                {[-1, 0, 1].slice(0, -1).map((x, i) => (
                  <group key={i}>
                    {[-1, -0.5, 0, 0.5, 1].map((y, j) => (
                      <Box 
                        key={j}
                        args={[0.02, 0.02, 2]}
                        position={[x + 1, y, 0]}
                      >
                        <meshStandardMaterial color={color} transparent opacity={0.6} />
                      </Box>
                    ))}
                  </group>
                ))}
              </>
            )}
          </group>
        );
      
      case "cloud-devops":
        return (
          <group scale={[scale * 0.8, scale * 0.8, scale * 0.8]}>
            {/* Cloud Base */}
            <Sphere args={[1.2, 16, 16]} position={[0, 0, 0]}>
              <meshStandardMaterial color="#90cdf4" transparent opacity={0.3} wireframe />
            </Sphere>
            {/* Services */}
            <Box args={[0.4, 0.4, 0.4]} position={[-0.8, 0.5, 0]}>
              <meshStandardMaterial color="#68d391" metalness={0.6} roughness={0.4} />
            </Box>
            <Box args={[0.4, 0.4, 0.4]} position={[0.8, 0.5, 0]}>
              <meshStandardMaterial color="#f6ad55" metalness={0.6} roughness={0.4} />
            </Box>
            <Box args={[0.4, 0.4, 0.4]} position={[0, -0.5, 0.8]}>
              <meshStandardMaterial color="#fc8181" metalness={0.6} roughness={0.4} />
            </Box>
            <Box args={[0.4, 0.4, 0.4]} position={[0, -0.5, -0.8]}>
              <meshStandardMaterial color="#b794f4" metalness={0.6} roughness={0.4} />
            </Box>
            {/* Data Flow */}
            {isActive && (
              <Torus args={[1.5, 0.05, 8, 50]} rotation={[Math.PI / 2, 0, 0]}>
                <meshBasicMaterial color={color} transparent opacity={0.4} />
              </Torus>
            )}
          </group>
        );
      
      default:
        return (
          <Sphere ref={meshRef} args={[1, 32, 32]}>
            <meshStandardMaterial color={color} metalness={0.6} roughness={0.3} />
          </Sphere>
        );
    }
  };

  return (
    <group ref={groupRef} position={position} onClick={onClick}>
      {getArchitecture()}
    </group>
  );
};

const TechnicalExpertise3D = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [selectedTech, setSelectedTech] = useState("fullstack");

  const techDomains = [
    {
      id: "fullstack",
      title: "Full Stack Development",
      description: "End-to-end web application development with modern frameworks and architectures",
      color: "#3b82f6",
      icon: Code,
      technologies: ["React/Next.js", "Node.js/Express", "TypeScript", "MongoDB/PostgreSQL", "REST/GraphQL"],
      projects: ["Real-time Chat App", "Smart Fitness Platform", "E-commerce Solutions"],
      expertise: "Building scalable web applications with optimized performance and user experience"
    },
    {
      id: "robotics",
      title: "Robotics & Embedded Systems",
      description: "Autonomous systems development with sensor integration and real-time processing",
      color: "#10b981",
      icon: Cpu,
      technologies: ["C++/Python", "ROS/ROS2", "OpenCV", "Arduino/Raspberry Pi", "Sensor Fusion"],
      projects: ["Mars Rover Navigation", "Computer Vision Systems", "Autonomous Robots"],
      expertise: "Designing and implementing intelligent robotic systems for real-world applications"
    },
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      description: "Intelligent systems powered by machine learning and natural language processing",
      color: "#8b5cf6",
      icon: Brain,
      technologies: ["Python", "TensorFlow/PyTorch", "NLP", "Computer Vision", "Deep Learning"],
      projects: ["AI Chatbot Agents", "Image Recognition", "Predictive Analytics"],
      expertise: "Developing AI solutions for automation, prediction, and intelligent decision-making"
    },
    {
      id: "cloud-devops",
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automated deployment pipelines",
      color: "#f59e0b",
      icon: Server,
      technologies: ["AWS/Cloud Services", "Docker/Kubernetes", "CI/CD", "Microservices", "API Gateway"],
      projects: ["Cloud Deployment", "System Architecture", "Infrastructure Automation"],
      expertise: "Building resilient and scalable cloud-native applications with DevOps practices"
    }
  ];

  const selectedTechData = techDomains.find(tech => tech.id === selectedTech);

  const TechMetric = ({ label, value, max = 100 }: { label: string; value: number; max?: number }) => (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-300">{label}</span>
        <span className="text-white font-semibold">{value}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(value / max) * 100}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-2 rounded-full"
          style={{ background: `linear-gradient(90deg, ${selectedTechData?.color}, ${selectedTechData?.color}dd)` }}
        />
      </div>
    </div>
  );

  return (
    <section
      id="technical-expertise"
      className="py-24 bg-gradient-to-br from-gray-900 via-gray-950 to-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-blue-400 text-sm md:text-base font-medium tracking-wider mb-3"
          >
            TECHNICAL ARCHITECTURE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            System{" "}
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              Architecture
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Interactive visualization of technical architectures across full-stack development, 
            robotics, AI systems, and cloud infrastructure
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* 3D Architecture Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative"
          >
            <div className="aspect-square bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-500">
              <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={0.8} />
                <pointLight position={[-10, -10, -10]} color={selectedTechData?.color} intensity={0.4} />
                
                {/* Tech Architecture Models */}
                <TechArchitecture
                  type="fullstack"
                  position={[-2.5, 1.5, 0]}
                  color="#3b82f6"
                  isActive={selectedTech === "fullstack"}
                  onClick={() => setSelectedTech("fullstack")}
                />
                <TechArchitecture
                  type="robotics"
                  position={[2.5, 1.5, 0]}
                  color="#10b981"
                  isActive={selectedTech === "robotics"}
                  onClick={() => setSelectedTech("robotics")}
                />
                <TechArchitecture
                  type="ai-ml"
                  position={[-2.5, -1.5, 0]}
                  color="#8b5cf6"
                  isActive={selectedTech === "ai-ml"}
                  onClick={() => setSelectedTech("ai-ml")}
                />
                <TechArchitecture
                  type="cloud-devops"
                  position={[2.5, -1.5, 0]}
                  color="#f59e0b"
                  isActive={selectedTech === "cloud-devops"}
                  onClick={() => setSelectedTech("cloud-devops")}
                />
                
                <OrbitControls 
                  enableZoom={true}
                  enablePan={false}
                  enableRotate={true}
                  minDistance={6}
                  maxDistance={12}
                />
              </Canvas>
            </div>

            {/* Interactive Legend */}
            <div className="absolute bottom-6 left-6 right-6 bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold text-sm">Active Domain</p>
                  <p className="text-gray-400 text-xs">{selectedTechData?.title}</p>
                </div>
                <div className="flex gap-2">
                  {techDomains.map((tech) => (
                    <motion.button
                      key={tech.id}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedTech(tech.id)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        selectedTech === tech.id ? "scale-125" : "opacity-50"
                      }`}
                      style={{ backgroundColor: tech.color }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technical Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="space-y-8"
          >
            {selectedTechData && (
              <motion.div
                key={selectedTechData.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {/* Domain Header */}
                <div className="p-8 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl hover:border-blue-500/30 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" 
                         style={{ backgroundColor: selectedTechData.color + '20' }}>
                      <selectedTechData.icon size={24} color={selectedTechData.color} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{selectedTechData.title}</h3>
                      <p className="text-gray-300 text-sm">{selectedTechData.expertise}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {selectedTechData.description}
                  </p>

                  {/* Skill Metrics */}
                  <div className="space-y-4 mb-6">
                    <TechMetric label="Technical Proficiency" value={88} />
                    <TechMetric label="Project Experience" value={92} />
                    <TechMetric label="Architecture Design" value={85} />
                    <TechMetric label="Problem Solving" value={90} />
                  </div>

                  {/* Core Technologies */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Core Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTechData.technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="px-3 py-2 bg-gray-700/50 text-gray-200 rounded-full text-sm border border-gray-600/50 hover:border-blue-500/50 transition-colors duration-300"
                          style={{ borderColor: selectedTechData.color + '50' }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Applications */}
                <div className="p-8 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl hover:border-blue-500/30 transition-all duration-500">
                  <h4 className="text-xl font-bold text-white mb-4">Project Applications</h4>
                  <div className="space-y-3">
                    {selectedTechData.projects.map((project, index) => (
                      <motion.div
                        key={project}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors duration-300"
                      >
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedTechData.color }} />
                        <span className="text-gray-200 text-sm">{project}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertise3D;