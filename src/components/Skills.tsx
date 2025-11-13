import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/* =======================
   TECHNOLOGIES DATA (UPDATED)
   ======================= */
const technologies = [
  // 🧠 Programming Languages
  { name: "C / C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "GoLang", icon: "https://skillicons.dev/icons?i=go" },

  // 🎨 Frontend Development
  { name: "React JS", icon: "https://skillicons.dev/icons?i=react" },
  { name: "Next JS", icon: "https://skillicons.dev/icons?i=nextjs" },
  { name: "Vue JS", icon: "https://skillicons.dev/icons?i=vue" },
  { name: "Nuxt JS", icon: "https://skillicons.dev/icons?i=nuxtjs" },
  { name: "Angular", icon: "https://skillicons.dev/icons?i=angular" },
  { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
  { name: "Three JS", icon: "https://skillicons.dev/icons?i=threejs" },

  // ⚙️ Backend Development
  { name: "Node JS", icon: "https://skillicons.dev/icons?i=nodejs" },
  { name: "Express JS", icon: "https://skillicons.dev/icons?i=express" },
  { name: "Spring Boot", icon: "https://skillicons.dev/icons?i=spring" },
  { name: "GraphQL", icon: "https://skillicons.dev/icons?i=graphql" },

  // 💾 Databases
  { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
  { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgresql" },
  { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
  { name: "Oracle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },

  // 🤖 AI / ML / Data Science
  { name: "TensorFlow", icon: "https://skillicons.dev/icons?i=tensorflow" },
  { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
  { name: "Scikit-Learn", icon: "https://skillicons.dev/icons?i=scikitlearn" },
  { name: "OpenCV", icon: "https://skillicons.dev/icons?i=opencv" },
  { name: "PyTorch", icon: "https://skillicons.dev/icons?i=pytorch" },
  { name: "Robotic Operating System (ROS)", icon: "https://skillicons.dev/icons?i=ros" },

  // 🤖 Robotics & Embedded Systems
  { name: "Arduino", icon: "https://skillicons.dev/icons?i=arduino" },
  { name: "Raspberry Pi", icon: "https://skillicons.dev/icons?i=raspberrypi" },

  // ☁️ DevOps / Tools
  { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
  { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
  { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
  { name: "GitHub Actions", icon: "https://skillicons.dev/icons?i=githubactions" },
  { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" },
  { name: "AWS", icon: "https://skillicons.dev/icons?i=aws" },

  // 🎨 Design Tools
  { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" },
];

/* =======================
   ANIMATIONS
   ======================= */
const containerVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06, when: "beforeChildren" } },
};

const floatVariant = {
  float: {
    y: [0, -6, 0],
    transition: { duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" },
  },
};

const cardEntrance = (i) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.5, ease: "easeOut" } },
});

/* =======================
   CARD COMPONENT
   ======================= */
const TechCard = ({ tech, index }) => {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const maxTilt = 12;
    const ry = ((x - cx) / cx) * maxTilt;
    const rx = -((y - cy) / cy) * maxTilt;
    setTilt({ rx, ry });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0 });
    setIsHovering(false);
  };

  const handleMouseEnter = () => setIsHovering(true);

  return (
    <motion.div
      variants={cardEntrance(index)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="relative flex items-center justify-center"
    >
      <motion.div
        variants={floatVariant}
        animate="float"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        whileHover={{ scale: 1.08 }}
        className="relative w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36"
      >
        <motion.div
          style={{
            transform: `perspective(800px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-white/10 shadow-lg flex items-center justify-center overflow-hidden"
        >
          <motion.div
            animate={isHovering ? { rotate: 360 } : { rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, duration: 1 }}
            className="flex items-center justify-center w-full h-full rounded-2xl bg-gradient-to-br from-gray-700/60 to-gray-600/40 transition-all duration-500"
          >
            <img src={tech.icon} alt={tech.name} className="w-10 h-10 md:w-12 md:h-12 object-contain" />
          </motion.div>

          {/* Hover Glow */}
          <motion.div
            className={`absolute inset-0 rounded-2xl pointer-events-none ${
              isHovering ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl" : ""
            }`}
          />
        </motion.div>
      </motion.div>

      {/* Tooltip */}
      {isHovering && (
        <motion.span
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute -bottom-7 text-gray-300 text-sm font-medium"
        >
          {tech.name}
        </motion.span>
      )}
    </motion.div>
  );
};

/* =======================
   MAIN SKILLS SECTION
   ======================= */
const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-20 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Building Skills
            <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              For The Future
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            A complete showcase of my technical stack — spanning full-stack, AI, robotics, and DevOps tools.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 place-items-center"
        >
          {technologies.map((tech, i) => (
            <TechCard key={tech.name} tech={tech} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;