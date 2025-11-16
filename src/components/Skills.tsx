import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/* =======================
   TECHNOLOGIES DATA
   ======================= */
// Added a new field: white: true → force icon to be white using CSS filter
const technologies = [
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Go", icon: "https://skillicons.dev/icons?i=go" },
  { name: "Rust", icon: "https://skillicons.dev/icons?i=rust", white: true },
  { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },

  // Frontend
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", white: true },
  { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "Nuxt.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" },
  { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg", white: true },

  // Backend
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", white: true },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
  { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", white: true },

  // DB
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },

  // AI
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
  { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", white: true },
  { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", white: true },
  { name: "ROS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ros/ros-original.svg", white: true },

  // Cloud
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
  { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },

  // Tools
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", white: true },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", white: true },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" }
];

/* =======================
   ANIMATIONS
   ======================= */
const containerVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06, when: "beforeChildren" } },
};

const cardEntrance = (i) => ({
  hidden: { opacity: 0, y: 40, scale: 0.9, rotateX: 40, transformPerspective: 800 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { delay: i * 0.06, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
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
    setTilt({ rx: -((y - cy) / cy) * maxTilt, ry: ((x - cx) / cx) * maxTilt });
  };

  return (
    <motion.div variants={cardEntrance(index)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="relative flex items-center justify-center">
      <motion.div onMouseMove={handleMouseMove} onMouseLeave={() => { setTilt({ rx: 0, ry: 0 }); setIsHovering(false); }} onMouseEnter={() => setIsHovering(true)} whileHover={{ scale: 1.08 }} className="relative w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36">
        <motion.div style={{ transform: `perspective(800px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }} transition={{ type: "spring", stiffness: 200, damping: 20 }} className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-white/10 shadow-lg flex items-center justify-center overflow-hidden">
          <div className="flex items-center justify-center w-full h-full rounded-2xl bg-gradient-to-br from-gray-700/60 to-gray-600/40 transition-all duration-500">
            <motion.img
              src={tech.icon}
              alt={tech.name}
              className={`w-10 h-10 md:w-12 md:h-12 object-contain ${tech.white ? "invert brightness-200" : ""}`}
              animate={isHovering ? { rotate: 360 } : { rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, duration: 1 }}
            />
          </div>
          <motion.div className={`absolute inset-0 rounded-2xl pointer-events-none ${isHovering ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl" : ""}`} />
        </motion.div>
      </motion.div>
      {isHovering && (
        <motion.span initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="absolute -bottom-7 text-gray-300 text-sm font-medium">
          {tech.name}
        </motion.span>
      )}
    </motion.div>
  );
};

/* =======================
   MAIN SECTION
   ======================= */
const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <section id="skills" ref={ref} className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-20 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Building Skills
            <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">For The Future</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">A complete showcase of my technical stack.</p>
        </motion.div>

        <motion.div variants={containerVariant} initial="hidden" animate={inView ? "show" : "hidden"} className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 place-items-center">
          {technologies.map((tech, i) => (
            <TechCard key={tech.name} tech={tech} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
