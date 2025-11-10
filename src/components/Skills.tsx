import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Canvas } from '@react-three/fiber';
import { Float, Text3D } from '@react-three/drei';
import { useState } from 'react';

const SkillOrb = ({ position, skill }: { position: [number, number, number]; skill: { name: string; level: number; color: string } }) => {
  return (
    <Float speed={1 + Math.random()} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <sphereGeometry args={[0.1 + skill.level * 0.05, 32, 32]} />
        <meshBasicMaterial color={skill.color} />
      </mesh>
    </Float>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [activeCategory, setActiveCategory] = useState('Frontend');

  const skillCategories = {
    Frontend: [
      { name: 'React', level: 95, color: '#61DAFB' },
      { name: 'TypeScript', level: 90, color: '#3178C6' },
      { name: 'Next.js', level: 85, color: '#000000' },
      { name: 'Tailwind CSS', level: 90, color: '#06B6D4' },
      { name: 'Framer Motion', level: 80, color: '#FF0055' },
      { name: 'Three.js', level: 75, color: '#049EF4' },
    ],
    Backend: [
      { name: 'Node.js', level: 85, color: '#339933' },
      { name: 'Express', level: 80, color: '#000000' },
      { name: 'MongoDB', level: 75, color: '#47A248' },
      { name: 'PostgreSQL', level: 70, color: '#336791' },
      { name: 'GraphQL', level: 65, color: '#E10098' },
      { name: 'Docker', level: 70, color: '#2496ED' },
    ],
    Tools: [
      { name: 'Git', level: 90, color: '#F05032' },
      { name: 'Figma', level: 85, color: '#F24E1E' },
      { name: 'VS Code', level: 95, color: '#007ACC' },
      { name: 'Webpack', level: 75, color: '#8DD6F9' },
      { name: 'Vite', level: 80, color: '#646CFF' },
      { name: 'AWS', level: 65, color: '#FF9900' },
    ],
  };

  const categories = Object.keys(skillCategories);
  const currentSkills = skillCategories[activeCategory as keyof typeof skillCategories];

  return (
    <section id="skills" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          {currentSkills.map((skill, index) => (
            <SkillOrb
              key={skill.name}
              position={[
                (Math.random() - 0.5) * 8,
                (Math.random() - 0.5) * 6,
                (Math.random() - 0.5) * 4
              ]}
              skill={skill}
            />
          ))}
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-purple-400 text-lg font-medium mb-4"
          >
            MY EXPERTISE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            Skills & <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Technologies</span>
          </motion.h2>
        </motion.div>

        {/* Category Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="flex bg-gray-900/50 backdrop-blur-sm rounded-full p-2 border border-gray-700/50">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover-target ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-purple-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group p-6 rounded-2xl bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover-target"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                  {skill.name}
                </h3>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: 0.2 + index * 0.1 }}
                  className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-6">
            My Tech Stack
          </h3>
          <p className="text-center text-gray-300 text-lg max-w-3xl mx-auto">
            I'm very flexible with time zone communications & always available to work in your timezone.
            My tech experience leverages JavaScript frameworks for efficient development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;