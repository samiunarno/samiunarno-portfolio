/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Twitter, Mail, ArrowUp, Heart } from 'lucide-react';
import Logo from '/assets/logo.png';  // Import your logo

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
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

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    { name: 'Web Development', href: '#services' },
    { name: '3D Experiences', href: '#services' },
    { name: 'UI/UX Design', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              {/* Replace the text with the logo image */}
              <motion.img
                src={Logo}  // Logo source
                alt="Logo"
                className="w-32 md:w-48 mb-4 cursor-pointer"  // Adjust size as needed
                whileHover={{ scale: 1.05 }}  // Add hover effect
                onClick={scrollToTop}  // Scroll to top when clicked
              />
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Creating exceptional digital experiences through innovative web development, 
                3D graphics, and thoughtful design. Let's build something amazing together.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300 hover-target"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            {/* <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => {
                        const element = document.querySelector(link.href);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover-target"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div> */}

            {/* Services */}
            {/* <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => {
                        const element = document.querySelector(service.href);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover-target"
                    >
                      {service.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="py-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-400 text-center md:text-left flex items-center gap-2">
            © 2025 Samiun Mahmud . Made with 
            <Heart size={16} className="text-red-500 fill-current" />
            and lots of coffee.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover-target z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </motion.button>
    </footer>
  );
};

export default Footer;
