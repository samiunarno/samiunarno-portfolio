"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../public/assets/logoo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  /* ---------------------- SCROLL HIDE/SHOW LOGIC ---------------------- */
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll && current > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={
        showNav
          ? { y: 0, opacity: 1, pointerEvents: "auto" }
          : { y: -100, opacity: 0, pointerEvents: "none" }
      }
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 pt-2 pb-3 border-b border-white/10 shadow-lg shadow-purple-500/5"
      style={{
        background:
          'linear-gradient(135deg, rgba(17, 24, 39, 0.6) 0%, rgba(17, 24, 39, 0.35) 100%)',
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        borderRadius: '0px 0px 500px 500px',
      }}
    >
      {/* Glossy overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
          borderRadius: '0px 0px 500px 500px',
        }}
      />

      {/* NAV CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center">

        {/* LOGO */}
        <div className="flex justify-center mb-2">
          <motion.div
            whileHover={{ scale: 1.04 }}
            onClick={() => handleScrollTo('#hero')}
            className="cursor-pointer select-none"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-auto object-contain"
              style={{
                filter: 'brightness(0) invert(1)',
                mixBlendMode: 'lighten',
              }}
            />
          </motion.div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{
                y: -1,
                color: '#a855f7',
                textShadow: '0 0 6px rgba(168, 85, 247, 0.4)',
              }}
              onClick={() => handleScrollTo(item.href)}
              className="text-gray-200 hover:text-purple-300 text-sm font-medium relative"
            >
              {item.name}
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.25 }}
              />
            </motion.button>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="absolute right-4 top-2 md:hidden z-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-200 p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

        {/* MOBILE DROPDOWN */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden relative z-30 mt-3 p-4 rounded-xl bg-gray-900/40 backdrop-blur-xl border border-white/10"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: index * 0.08 }}
                onClick={() => handleScrollTo(item.href)}
                className="block w-full text-left py-2 px-3 text-gray-200 hover:text-purple-300 text-base rounded-md hover:bg-white/5"
              >
                {item.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
