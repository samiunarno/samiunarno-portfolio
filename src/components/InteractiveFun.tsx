/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Box, Torus } from "@react-three/drei";
import { useRef, useState } from "react";
import { Mesh } from "three";

const RotatingShape = ({
  shape,
  position,
  color,
}: {
  shape: string;
  position: [number, number, number];
  color: string;
}) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  const ShapeComponent =
    shape === "sphere" ? Sphere : shape === "box" ? Box : Torus;

  return (
    <ShapeComponent
      ref={meshRef}
      position={position}
      args={shape === "torus" ? [1, 0.3, 16, 100] : [1, 1, 1]}
    >
      <meshStandardMaterial
        color={color}
        metalness={0.4}
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </ShapeComponent>
  );
};

const InteractiveFun = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [particleCount, setParticleCount] = useState(50);
  const [selectedColor, setSelectedColor] = useState("#a855f7");

  const colors = [
    { name: "Purple", value: "#a855f7" },
    { name: "Pink", value: "#ec4899" },
    { name: "Blue", value: "#3b82f6" },
    { name: "Green", value: "#10b981" },
    { name: "Orange", value: "#f97316" },
    { name: "Red", value: "#ef4444" },
  ];

  return (
    <section
      id="interactive"
      className="py-24 bg-gradient-to-b from-gray-900 via-gray-950 to-black relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-1/3 w-[28rem] h-[28rem] bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[26rem] h-[26rem] bg-pink-600/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 text-sm md:text-base font-medium tracking-wider mb-2">
            PROFESSIONAL SHOWCASE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interactive{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              3D Shape Model
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
            A modern 3D experience demonstrating the power of real-time rendering,
            smooth animation, and interactivity using React Three Fiber and Framer Motion.
          </p>
        </motion.div>

        {/* Main Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-square bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-300">
              <Canvas camera={{ position: [0, 0, 8], fov: 70 }}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={0.8} />
                <pointLight position={[-10, -10, -10]} color="#ec4899" />
                <RotatingShape
                  shape="sphere"
                  position={[-2, 1, 0]}
                  color={selectedColor}
                />
                <RotatingShape
                  shape="box"
                  position={[2, 1, 0]}
                  color={selectedColor}
                />
                <RotatingShape
                  shape="torus"
                  position={[0, -1.2, 0]}
                  color={selectedColor}
                />
                <OrbitControls enableZoom enablePan enableRotate />
              </Canvas>
            </div>
            {/* <div className="absolute bottom-4 left-4 right-4 bg-gray-900/80 backdrop-blur-sm rounded-xl p-3 border border-gray-700/50">
              <p className="text-white text-sm font-medium mb-1">Controls:</p>
              <p className="text-gray-400 text-xs">
                Click & drag to rotate • Scroll to zoom • Right-click to pan
              </p>
            </div> */}
          </motion.div>

          {/* Control Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Color Picker */}
            <div className="p-6 bg-gray-800/60 border border-gray-700/50 rounded-2xl hover:border-purple-500/50 transition-all">
              <h3 className="text-xl font-semibold text-white mb-4">
                Color Customization
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {colors.map((color) => (
                  <motion.button
                    key={color.value}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedColor(color.value)}
                    className={`w-full h-12 rounded-xl border-2 ${
                      selectedColor === color.value
                        ? "border-white shadow-lg"
                        : "border-gray-600 hover:border-gray-400"
                    }`}
                    style={{ backgroundColor: color.value }}
                  >
                    <span className="sr-only">{color.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Particle Count */}
            <div className="p-6 bg-gray-800/60 border border-gray-700/50 rounded-2xl hover:border-purple-500/50 transition-all">
              <h3 className="text-xl font-semibold text-white mb-4">
                Animation Speed: {particleCount}
              </h3>
              <input
                type="range"
                min="10"
                max="200"
                value={particleCount}
                onChange={(e) => setParticleCount(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Description Section */}
            <div className="p-6 bg-gray-800/60 border border-gray-700/50 rounded-2xl hover:border-purple-500/50 transition-all">
              <h3 className="text-xl font-semibold text-white mb-3">
                Professional Context
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                This 3D interface highlights my ability to merge design, interaction, and
                performance. It reflects skills in React, WebGL, and modern UI development,
                demonstrating technical versatility and creativity in building immersive
                user experiences.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Interactive Features */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-20 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Interactive Controls",
              description:
                "Users can rotate, zoom, and pan objects with smooth, intuitive control.",
              icon: "🖱️",
            },
            {
              title: "Dynamic Customization",
              description:
                "Colors and animation properties update in real-time for a responsive experience.",
              icon: "🎨",
            },
            {
              title: "Performance Optimized",
              description:
                "Rendered at 60fps using React Three Fiber and Framer Motion for fluid motion.",
              icon: "⚡",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 bg-gray-800/50 border border-gray-700/50 rounded-2xl hover:border-purple-500/50 text-center transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div> */}
      </div>

      {/* Custom Slider Styles */}
      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #a855f7, #ec4899);
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #a855f7, #ec4899);
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </section>
  );
};

export default InteractiveFun;
