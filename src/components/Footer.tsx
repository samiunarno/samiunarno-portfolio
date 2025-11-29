/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Twitter, Mail, ArrowUp, Heart } from 'lucide-react';
import Logo from '/assets/logo.png';

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:samiunarnouk@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-56 h-56 sm:w-96 sm:h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-56 h-56 sm:w-96 sm:h-96 bg-pink-600/10 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 text-center md:text-left">

            {/* Brand + About */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 flex flex-col items-center md:items-start"
            >
              <motion.img
                src={Logo}
                alt="Logo"
                className="w-28 sm:w-36 md:w-44 mb-4 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={scrollToTop}
              />

              <p className="text-gray-400 max-w-md leading-relaxed text-sm sm:text-base text-center md:text-left">
                Creating exceptional digital experiences through innovative web development,
                3D graphics, and thoughtful design. Let's build something amazing together.
              </p>

              {/* Social Icons */}
              <div className="flex justify-center md:justify-start gap-4 mt-5">
                {socialLinks.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300"
                    aria-label={item.label}
                  >
                    <item.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="border-t border-gray-800 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left"
        >
          <p className="text-gray-400 text-sm flex items-center gap-2">
            © 2025 Samiun Mahmud • Made with
            <Heart size={14} className="text-red-500 fill-current" /> and lots of coffee.
          </p>

          <div className="flex gap-4 text-gray-400 text-xs sm:text-sm">
            <span className="hover:text-white transition cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition cursor-pointer">Terms</span>
            <span className="hover:text-white transition cursor-pointer">Cookies</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.12, y: -3 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-4 sm:p-5 bg-gradient-to-r from-purple-600 to-pink-600 
                   rounded-full text-white shadow-lg hover:shadow-purple-500/40 transition-all duration-300 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp size={22} className="sm:size-24" />
      </motion.button>
    </footer>
  );
};

export default Footer;
