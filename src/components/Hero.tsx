/* eslint-disable prefer-const */
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import { ArrowDown, Play, Github, Linkedin } from 'lucide-react';
import { useEffect, useState } from 'react';

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    for (let i = 0; i <= text.length; i++) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, i));
      }, delay + i * 100);
      timeouts.push(timeout);
    }
    return () => timeouts.forEach(clearTimeout);
  }, [text, delay]);

  return <span>{displayText}<span className="animate-pulse">|</span></span>;
};

const FloatingParticle = ({ position }: { position: [number, number, number] }) => (
  <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
    <mesh position={position}>
      <sphereGeometry args={[0.02, 16, 16]} />
      <meshBasicMaterial color="#a855f7" />
    </mesh>
  </Float>
);

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars radius={300} depth={50} count={5000} factor={4} saturation={0} fade />
          {Array.from({ length: 50 }).map((_, i) => (
            <FloatingParticle
              key={i}
              position={[
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
              ]}
            />
          ))}
        </Canvas>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/80 z-10" />

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-purple-400 text-lg md:text-xl mb-4 font-medium"
        >
          CREATIVE WEB DEVELOPER
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="block text-white">Transforming Concepts into</span>
          <span className="block bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Seamless User Experiences
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          <TypewriterText
            text="Hi! I'm Samiun Mahmud, a Full Stack Developer. I prioritize client collaboration, fostering open communication"
            delay={1500}
          />
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(168,85,247,0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white hover-target flex items-center gap-3 transition-all duration-300"
          >
            <Play size={20} className="group-hover:scale-110 transition-transform duration-300" />
            See My Work
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-purple-500/50 rounded-full font-semibold text-purple-400 hover:bg-purple-500/10 transition-all duration-300 hover-target"
          >
            Download Resume
          </motion.button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex items-center justify-center gap-6 mb-8"
        >
          {[
            { icon: Github, href: '#' },
            { icon: Linkedin, href: '#' },
          ].map(({ icon: Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300 hover-target"
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-col items-center"
        >
          <p className="text-gray-500 mb-3 text-sm">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="cursor-pointer hover-target"
            onClick={() =>
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <ArrowDown size={24} className="text-purple-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
