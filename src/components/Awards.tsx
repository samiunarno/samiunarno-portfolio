import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Trophy, Medal, Award, Star, Zap, Rocket, Target, Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Awards = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const awards = [
    {
      id: 1,
      title: '1st Place in Asia',
      organization: 'University Rover Challenge 2018',
      year: '2018',
      description: 'Led the IUB Mars Rover team to achieve 1st position in Asia category, competing against top universities in robotics and space exploration challenges.',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      category: 'Robotics Competition',
      achievement: 'International',
      teamSize: '15+ members',
      duration: '1 Year Project',
    },
    {
      id: 2,
      title: 'Technoxian Finalist',
      organization: 'International Robotics Competition 2024',
      year: '2024',
      description: 'Competed in Technoxian World Robotics Championship, showcasing advanced robotics skills in autonomous systems and AI integration.',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      category: 'Robotics Championship',
      achievement: 'International Finalist',
      teamSize: '8 members',
      duration: '6 Months',
    },
    {
      id: 3,
      title: 'TRACTION Champion',
      organization: 'National Robotics Competition',
      year: '2023',
      description: 'Won national level robotics competition demonstrating excellence in robot design, programming, and real-time problem solving.',
      icon: Medal,
      color: 'from-purple-500 to-pink-500',
      category: 'National Competition',
      achievement: 'National Champion',
      teamSize: '6 members',
      duration: '3 Months',
    },
    {
      id: 4,
      title: 'NSU Bit Arena Winner',
      organization: 'North South University Tech Fest',
      year: '2022',
      description: 'Secured top position in competitive programming and tech innovation challenge among universities nationwide.',
      icon: Target,
      color: 'from-green-500 to-emerald-500',
      category: 'Tech Competition',
      achievement: 'University Level',
      teamSize: '4 members',
      duration: '2 Days',
    },
    {
      id: 5,
      title: 'IUB Techfest Excellence',
      organization: 'Independent University Bangladesh',
      year: '2021',
      description: 'Recognized for outstanding performance in technology innovation and project demonstration at university tech festival.',
      icon: Award,
      color: 'from-red-500 to-pink-500',
      category: 'University Competition',
      achievement: 'Excellence Award',
      teamSize: 'Individual',
      duration: '1 Week',
    },
  ];

  const AchievementStats = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
    >
      {[
        { icon: Trophy, label: 'International Wins', value: '1st Asia' },
        { icon: Users, label: 'Team Members Led', value: '15+' },
        { icon: Zap, label: 'Competitions', value: '5+' },
        { icon: Rocket, label: 'Years Active', value: '7' },
      ].map((stat, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05, y: -5 }}
          className="text-center p-4 bg-gray-900/30 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
        >
          <stat.icon className="w-8 h-8 mx-auto mb-2 text-purple-400" />
          <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
          <div className="text-xs text-gray-400">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section id="awards" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-purple-400 text-lg font-medium mb-4"
          >
            COMPETITION EXCELLENCE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Awards &{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Recognized excellence in international robotics competitions and technology innovation
          </motion.p>
        </motion.div>

        {/* Achievement Statistics */}
        <AchievementStats />

        {/* Swiper for Awards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet custom-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            className="awards-swiper pb-16"
          >
            {awards.map((award, index) => (
              <SwiperSlide key={award.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  className="h-full"
                >
                  <div className="group p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm border border-gray-700/30 rounded-3xl hover:border-purple-500/40 transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                    {/* Award Icon with Glow */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${award.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <award.icon size={28} className="text-white" />
                      </div>
                      <div className={`absolute inset-0 bg-gradient-to-br ${award.color} rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                    </div>

                    {/* Badge */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-700/50 border border-gray-600/50 text-xs text-gray-300 mb-4 self-start">
                      {award.category}
                    </div>

                    {/* Title and Organization */}
                    <h4 className="text-white text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                      {award.title}
                    </h4>
                    <p className="text-purple-400 font-semibold text-lg mb-4">{award.organization}</p>
                    
                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed flex-grow">{award.description}</p>

                    {/* Achievement Details */}
                    <div className="space-y-3 mt-auto">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">Achievement:</span>
                        <span className="text-white font-semibold">{award.achievement}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">Team:</span>
                        <span className="text-white">{award.teamSize}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">Duration:</span>
                        <span className="text-white">{award.duration}</span>
                      </div>
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-6 right-6">
                      <div className="px-3 py-1 bg-gray-700/80 rounded-full border border-gray-600/50">
                        <span className="text-white text-sm font-semibold">{award.year}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            Demonstrating consistent excellence in competitive robotics and technology innovation since 2017
          </p>
        </motion.div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .awards-swiper {
          padding-bottom: 60px;
        }

        .custom-bullet {
          width: 14px !important;
          height: 14px !important;
          background: rgba(168, 85, 247, 0.3) !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
          margin: 0 6px !important;
          border: 2px solid transparent !important;
        }

        .custom-bullet-active {
          background: linear-gradient(135deg, #a855f7, #ec4899) !important;
          transform: scale(1.3) !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
          box-shadow: 0 0 15px rgba(168, 85, 247, 0.5) !important;
        }

        .awards-swiper .swiper-pagination {
          bottom: 0 !important;
        }
      `}</style>
    </section>
  );
};

export default Awards;