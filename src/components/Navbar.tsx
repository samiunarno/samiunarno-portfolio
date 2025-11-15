import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../public/assets/logoo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-40 bg-gray-900/20 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-purple-500/5 pt-4 pb-6"
      style={{
        background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.7) 0%, rgba(17, 24, 39, 0.4) 100%)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderRadius: '0px 0px 800px 800px',
      }}
    >
      {/* Glossy Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)',
          mask: 'linear-gradient(black, transparent)',
          WebkitMask: 'linear-gradient(black, transparent)',
          borderRadius: '0px 0px 40px 40px',
        }}
      />

      {/* Subtle Glow */}
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(168, 85, 247, 0.3) 50%, transparent 100%)',
        }}
      />

      {/* ✅ Mobile Menu Button — OUTSIDE container to prevent shifting */}
      <div className="absolute right-6 top-6 md:hidden z-20">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-200 hover:text-purple-300 transition-colors duration-300 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* ===================== */}
      {/* CENTERED MAIN CONTENT */}
      {/* ===================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 flex flex-col items-center">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer select-none"
            onClick={() => handleScroll('#hero')}
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={logo}
                alt="Logo"
                className="h-20 w-auto object-contain drop-shadow-lg"
                style={{
                  filter: 'brightness(0) invert(1)',
                  mixBlendMode: 'lighten'
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop Menu - Centered perfectly */}
        <div className="flex justify-center">
          <div className="hidden md:flex space-x-10">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -2,
                  color: '#a855f7',
                  textShadow: '0 0 8px rgba(168, 85, 247, 0.5)'
                }}
                onClick={() => handleScroll(item.href)}
                className="text-gray-200 hover:text-purple-300 transition-all duration-300 text-lg font-medium relative"
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden relative z-30 mt-4 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(17, 24, 39, 0.7) 100%)',
              backdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                borderRadius: '20px',
              }}
            />

            <div className="relative z-10 p-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  onClick={() => handleScroll(item.href)}
                  className="block w-full text-left py-4 px-4 text-gray-200 hover:text-purple-300 transition-all duration-300 rounded-lg hover:bg-white/5 mb-2 last:mb-0 text-lg"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
