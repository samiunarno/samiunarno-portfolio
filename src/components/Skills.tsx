import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/* =======================
   TECHNOLOGIES DATA
   ======================= */
const technologies = [
  { name: "HTML 5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS 3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Redux Toolkit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "Node JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Three JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
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
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
          </motion.div>

          {/* Hover Glow */}
          <motion.div
            className={`absolute inset-0 rounded-2xl pointer-events-none ${
              isHovering ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl" : ""
            }`}
          />
        </motion.div>
      </motion.div>

      {/* tech name tooltip */}
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
      {/* background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-20 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
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
            A sleek, interactive showcase of my technologies — hover to tilt and watch them spin.
          </p>
        </motion.div>

        {/* grid */}
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

        {/* description box */}
        {/* <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 p-6 md:p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">My Tech Stack</h3>
          <p className="text-gray-300">
            I work across front-end and back-end technologies to build complete, high-performance web experiences.
          </p>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Skills;
