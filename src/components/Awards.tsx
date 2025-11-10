import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Trophy, Star, Medal } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Awards = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const awards = [
    {
      id: 1,
      title: 'Best Web Developer',
      organization: 'Tech Excellence Awards 2023',
      year: '2023',
      description: 'Recognized for outstanding contribution to web development and innovative solutions.',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      title: 'Innovation in 3D Web Design',
      organization: 'Creative Web Awards',
      year: '2023',
      description: 'Awarded for pushing the boundaries of 3D web experiences and interactive design.',
      icon: Star,
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      title: 'Frontend Developer of the Year',
      organization: 'Developer Community Awards',
      year: '2022',
      description: 'Honored for exceptional frontend development skills and community contributions.',
      icon: Medal,
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 4,
      title: 'Outstanding Portfolio Design',
      organization: 'Design Excellence Awards',
      year: '2022',
      description: 'Recognized for creating visually stunning and user-friendly portfolio websites.',
      icon: Award,
      color: 'from-green-500 to-emerald-500',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023',
      credentialId: 'AWS-CSA-2023-001',
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      year: '2023',
      credentialId: 'GCP-PD-2023-002',
    },
    {
      name: 'Meta Frontend Developer Certificate',
      issuer: 'Meta',
      year: '2022',
      credentialId: 'META-FE-2022-003',
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      year: '2022',
      credentialId: 'MDB-DEV-2022-004',
    },
  ];

  return (
    <section id="awards" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />

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
            RECOGNITION & ACHIEVEMENTS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            Awards & <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Certifications</span>
          </motion.h2>
        </motion.div>

        {/* Awards Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Awards & Recognition
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 * index }}
              >
                <Tilt
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  perspective={1000}
                  transitionSpeed={1000}
                  gyroscope={true}
                >
                  <div className="group h-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover-target">
                    {/* Award Image */}
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={award.image}
                        alt={award.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                      
                      {/* Award Icon */}
                      <div className={`absolute top-4 right-4 p-3 bg-gradient-to-r ${award.color} rounded-full`}>
                        <award.icon size={24} className="text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium">
                          {award.year}
                        </span>
                      </div>
                      
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                        {award.title}
                      </h4>
                      
                      <p className="text-purple-400 font-medium mb-3">
                        {award.organization}
                      </p>
                      
                      <p className="text-gray-400 leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Professional Certifications
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover-target text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:border-purple-400/50 transition-colors duration-300">
                  <Award size={24} className="text-purple-400" />
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {cert.name}
                </h4>
                
                <p className="text-gray-400 text-sm mb-2">
                  {cert.issuer}
                </p>
                
                <p className="text-purple-400 text-sm font-medium mb-2">
                  {cert.year}
                </p>
                
                <p className="text-gray-500 text-xs">
                  ID: {cert.credentialId}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 p-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 rounded-3xl"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '15+', label: 'Awards Won' },
              { number: '8+', label: 'Certifications' },
              { number: '100+', label: 'Projects Completed' },
              { number: '50+', label: 'Happy Clients' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;