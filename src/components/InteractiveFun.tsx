"use client";
import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";

/* -------------------------------------------------------------------------- */
/*                          3D FEATURED PROJECTS SECTION                      */
/* -------------------------------------------------------------------------- */
const FeaturedProjects3D: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const projects = [
    {
      title: "Smart Waste Bin (IoT)",
      desc: "AI-powered IoT system for automatic waste detection and segregation.",
      tech: ["Arduino", "Python", "OpenCV", "ROS"],
      img: "/assets/smart bin pic-01_1600x907.jpg",
    },
    {
      title: "AI Assistant (Voice + Vision)",
      desc: "Built an AI assistant capable of speech recognition, response, and image understanding.",
      tech: ["TensorFlow", "React", "Flask", "NLP"],
      img: "/assets/att.jpg",
    },
    {
      title: "ConnectROS Platform",
      desc: "Web-based hub for managing and visualizing robotics data using ROS nodes.",
      tech: ["Next.js", "ROS", "WebSockets"],
      img: "/assets/Connect-ROS.png",
    },
    {
      title: "Creative Portfolio UI",
      desc: "Dynamic 3D-reactive portfolio built with Next.js and Framer Motion animations.",
      tech: ["Next.js", "Framer Motion", "TailwindCSS"],
      img: "/assets/v7.png",
    },
  ];

  /* ------------------------------ GSAP Scroll 3D ------------------------------ */
  useLayoutEffect(() => {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;

    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.utils.toArray(cardsRef.current).forEach((card: any, index: number) => {
        gsap.fromTo(
          card,
          {
            rotateY: index % 2 === 0 ? -20 : 20,
            y: 100,
            opacity: 0,
            scale: 0.9,
          },
          {
            rotateY: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 30%",
              scrub: 1.2,
            },
          }
        );
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-black overflow-hidden"
      style={{ perspective: "1500px" }}
    >
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,50,255,0.15),transparent_70%)] pointer-events-none"></div>

      {/* Header */}
      <div className="relative z-10 container mx-auto px-6 text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          <span className="bg-gradient-to-r from-white via-white/80 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p className="text-gray-400 mt-6 text-lg md:text-xl max-w-2xl mx-auto">
          A showcase of my most advanced and creative innovations — built to blend art, code, and intelligence.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 container mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            ref={(el) => {
              if (el) cardsRef.current[i] = el;
            }}
            className="group relative rounded-3xl overflow-hidden border border-gray-700/50 bg-gray-900/40 hover:border-pink-500/50 
            shadow-[0_0_25px_rgba(255,0,150,0.05)] hover:shadow-[0_0_40px_rgba(255,0,150,0.2)]
            transition-all duration-700 transform-gpu hover:-translate-y-2"
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full aspect-[16/10] object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.65,0.05,0.36,1)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 flex flex-col justify-end">
              <h4 className="text-lg font-semibold mb-2 text-white">{proj.title}</h4>
              <p className="text-gray-400 text-sm mb-3">{proj.desc}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t, j) => (
                  <span
                    key={j}
                    className="text-xs bg-gray-800/70 px-2 py-1 rounded-full text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects3D;
