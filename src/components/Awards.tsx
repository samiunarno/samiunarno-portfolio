import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Trophy, Medal, Award, Zap, Rocket, Target, Users, Code, Cpu, Brain, Microchip, Camera, Shield, MessageSquare, MapPin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Awards = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Add state management
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeLocation, setActiveLocation] = useState('all');
  const [swiperKey, setSwiperKey] = useState(0); // Key to force Swiper re-render

  // Force Swiper to re-render when filters change
  useEffect(() => {
    setSwiperKey(prev => prev + 1);
  }, [activeFilter, activeLocation]);

  const awards = [
    // Robotics Competitions - Dhaka
    {
      id: 1,
      title: '1st Place in Asia',
      organization: 'University Rover Challenge 2018',
      year: '2018',
      description: 'Led the IUB Mars Rover team to achieve 1st position in Asia category, competing against top universities in robotics and space exploration challenges.',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      category: 'International Robotics',
      achievement: 'International Champion',
      teamSize: '15+ members',
      duration: '1 Year Project',
      type: 'robotics',
      location: 'Dhaka'
    },
    {
      id: 2,
      title: 'BUET RoboFest Champion',
      organization: 'BUET Robotics Competition',
      year: '2023',
      description: 'Won national robotics competition at BUET demonstrating excellence in autonomous navigation and sensor integration.',
      icon: Medal,
      color: 'from-green-500 to-emerald-500',
      category: 'National Robotics',
      achievement: 'National Champion',
      teamSize: '5 members',
      duration: '4 Months',
      type: 'robotics',
      location: 'Dhaka'
    },
    {
      id: 3,
      title: 'DU CSE Robo Carnival',
      organization: 'Dhaka University Robotics',
      year: '2022',
      description: 'Secured top positions in line follower and obstacle avoidance challenges at premier university robotics competition.',
      icon: Microchip,
      color: 'from-purple-500 to-pink-500',
      category: 'University Robotics',
      achievement: 'Finalist',
      teamSize: '4 members',
      duration: '3 Months',
      type: 'robotics',
      location: 'Dhaka'
    },
    {
      id: 4,
      title: 'AIUB Robotics Challenge',
      organization: 'American International University',
      year: '2021',
      description: 'Participated in AIUB annual robotics competition focusing on innovative robot design and programming challenges.',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      category: 'University Robotics',
      achievement: 'Semi-Finalist',
      teamSize: '3 members',
      duration: '2 Months',
      type: 'robotics',
      location: 'Dhaka'
    },

    // Robotics Competitions - Outside Dhaka
    {
      id: 5,
      title: 'CUET Robo Olympiad',
      organization: 'Chittagong University of Engineering',
      year: '2022',
      description: 'Competed in CUET national robotics olympiad showcasing advanced robotics solutions and innovative designs.',
      icon: Rocket,
      color: 'from-red-500 to-pink-500',
      category: 'National Robotics',
      achievement: 'Regional Finalist',
      teamSize: '4 members',
      duration: '3 Months',
      type: 'robotics',
      location: 'Chittagong'
    },
    {
      id: 6,
      title: 'RUET Tech Fest',
      organization: 'Rajshahi University of Engineering',
      year: '2021',
      description: 'Participated in robotics competition at RUET focusing on agricultural robotics and automation solutions.',
      icon: Brain,
      color: 'from-indigo-500 to-purple-500',
      category: 'University Robotics',
      achievement: 'Innovation Award',
      teamSize: '3 members',
      duration: '2 Months',
      type: 'robotics',
      location: 'Rajshahi'
    },
    {
      id: 7,
      title: 'KUET Innovation Summit',
      organization: 'Khulna University of Engineering',
      year: '2020',
      description: 'Showcased robotics projects at KUET innovation summit with focus on environmental monitoring robots.',
      icon: Target,
      color: 'from-teal-500 to-green-500',
      category: 'University Robotics',
      achievement: 'Showcase Participant',
      teamSize: '2 members',
      duration: '1 Month',
      type: 'robotics',
      location: 'Khulna'
    },

    // International Competitions
    {
      id: 8,
      title: 'Technoxian Finalist',
      organization: 'International Robotics Competition 2024',
      year: '2024',
      description: 'Competed in Technoxian World Robotics Championship, showcasing advanced robotics skills in autonomous systems and AI integration.',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      category: 'International Robotics',
      achievement: 'International Finalist',
      teamSize: '8 members',
      duration: '6 Months',
      type: 'robotics',
      location: 'International'
    },

    // Hackathons - Dhaka
    {
      id: 9,
      title: 'AI Innovation Hackathon',
      organization: 'Bangladesh AI Summit 2023',
      year: '2023',
      description: 'Developed an AI-powered security protection tool "Prohori 247" with real-time threat detection and multi-layer authentication.',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      category: 'AI Hackathon',
      achievement: 'Top 10 Finalist',
      teamSize: '3 members',
      duration: '48 Hours',
      type: 'hackathon',
      location: 'Dhaka'
    },
    {
      id: 10,
      title: 'Smart Bangladesh Hackathon',
      organization: 'ICT Division Bangladesh',
      year: '2022',
      description: 'Created computer vision system for fresh and damage product detection to reduce food waste and enhance quality control.',
      icon: Camera,
      color: 'from-indigo-500 to-purple-500',
      category: 'National Hackathon',
      achievement: 'Innovation Award',
      teamSize: '4 members',
      duration: '72 Hours',
      type: 'hackathon',
      location: 'Dhaka'
    },
    {
      id: 11,
      title: 'Brac University Hackathon',
      organization: 'Brac University CSE Department',
      year: '2021',
      description: 'Developed smart campus solution using IoT and mobile applications for university management system.',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      category: 'University Hackathon',
      achievement: 'Runner Up',
      teamSize: '3 members',
      duration: '24 Hours',
      type: 'hackathon',
      location: 'Dhaka'
    },

    // Hackathons - Outside Dhaka
    {
      id: 12,
      title: 'Sylhet Tech Carnival',
      organization: 'Shahjalal University of Science',
      year: '2022',
      description: 'Participated in SUST hackathon focusing on tourism technology solutions for Sylhet region.',
      icon: MapPin,
      color: 'from-green-500 to-blue-500',
      category: 'Regional Hackathon',
      achievement: 'Best UI/UX Award',
      teamSize: '4 members',
      duration: '36 Hours',
      type: 'hackathon',
      location: 'Sylhet'
    },
    {
      id: 13,
      title: 'Barisal Digital Innovation',
      organization: 'University of Global Village',
      year: '2021',
      description: 'Developed agricultural tech solution for coastal area farmers using mobile technology and weather data.',
      icon: Zap,
      color: 'from-yellow-500 to-green-500',
      category: 'Regional Hackathon',
      achievement: 'Social Impact Award',
      teamSize: '3 members',
      duration: '48 Hours',
      type: 'hackathon',
      location: 'Barisal'
    },

    // Competitive Programming - Dhaka
    {
      id: 14,
      title: 'NSU Bit Arena Winner',
      organization: 'North South University Tech Fest',
      year: '2022',
      description: 'Secured top position in competitive programming and algorithm challenges among universities nationwide.',
      icon: Code,
      color: 'from-blue-500 to-teal-500',
      category: 'Competitive Programming',
      achievement: 'University Level',
      teamSize: 'Individual',
      duration: '5 Hours',
      type: 'programming',
      location: 'Dhaka'
    },
    {
      id: 15,
      title: 'IUB Techfest Excellence',
      organization: 'Independent University Bangladesh',
      year: '2021',
      description: 'Recognized for outstanding performance in competitive programming and technology innovation at university tech festival.',
      icon: Target,
      color: 'from-orange-500 to-red-500',
      category: 'Programming Competition',
      achievement: 'Excellence Award',
      teamSize: 'Individual',
      duration: '1 Week',
      type: 'programming',
      location: 'Dhaka'
    },
    {
      id: 16,
      title: 'DIU Code Marathon',
      organization: 'Daffodil International University',
      year: '2020',
      description: 'Participated in day-long coding marathon solving complex algorithmic problems and data structure challenges.',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      category: 'Programming Competition',
      achievement: 'Top 20',
      teamSize: 'Individual',
      duration: '8 Hours',
      type: 'programming',
      location: 'Dhaka'
    },

    // Competitive Programming - Outside Dhaka
    {
      id: 17,
      title: 'JU CSE Programming Contest',
      organization: 'Jahangirnagar University',
      year: '2021',
      description: 'Competed in JU computer science department programming contest focusing on problem-solving skills.',
      icon: Brain,
      color: 'from-green-500 to-emerald-500',
      category: 'University Programming',
      achievement: 'Finalist',
      teamSize: 'Individual',
      duration: '4 Hours',
      type: 'programming',
      location: 'Savar'
    },
    {
      id: 18,
      title: 'CUET Algorithm Challenge',
      organization: 'Chittagong University of Engineering',
      year: '2020',
      description: 'Participated in algorithm design competition at CUET computer science department.',
      icon: Microchip,
      color: 'from-blue-500 to-indigo-500',
      category: 'University Programming',
      achievement: 'Participant',
      teamSize: 'Individual',
      duration: '3 Hours',
      type: 'programming',
      location: 'Chittagong'
    },

    // Project Showcases
    {
      id: 19,
      title: 'AI Agent Chatbot',
      organization: 'Project Showcase',
      year: '2024',
      description: 'Designed and developed intelligent AI chatbot agents capable of understanding and responding to user queries using advanced NLP.',
      icon: MessageSquare,
      color: 'from-green-500 to-blue-500',
      category: 'AI Project',
      achievement: 'Personal Project',
      teamSize: 'Solo',
      duration: '2 Months',
      type: 'project',
      location: 'Remote'
    },
    {
      id: 20,
      title: 'Smart Fitness Solution',
      organization: 'API Integration Project',
      year: '2023',
      description: 'Developed web platform integrating Garmin API to fetch real-time fitness data and generate personalized workout plans using AI.',
      icon: Rocket,
      color: 'from-purple-500 to-indigo-500',
      category: 'Web Development',
      achievement: 'Featured Project',
      teamSize: 'Solo',
      duration: '1 Month',
      type: 'project',
      location: 'Remote'
    }
  ];

  const AchievementStats = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-12 max-w-5xl mx-auto"
    >
      {[
        { icon: Trophy, label: 'International Wins', value: '1st Asia', color: 'from-yellow-500 to-orange-500' },
        { icon: MapPin, label: 'Cities Covered', value: '8+', color: 'from-purple-500 to-pink-500' },
        { icon: Users, label: 'Team Members', value: '50+', color: 'from-blue-500 to-cyan-500' },
        { icon: Zap, label: 'Competitions', value: '20+', color: 'from-green-500 to-emerald-500' },
        { icon: Rocket, label: 'Years Active', value: '7', color: 'from-red-500 to-pink-500' },
      ].map((stat, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05, y: -5 }}
          className="text-center p-4 bg-gray-900/30 rounded-2xl border border-gray-700/50 backdrop-blur-sm relative overflow-hidden group"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
          <stat.icon className="w-6 h-6 mx-auto mb-2 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
          <div className="text-lg font-bold text-white mb-1">{stat.value}</div>
          <div className="text-xs text-gray-400">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );

  const CategoryFilter = ({ activeFilter, setActiveFilter }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="flex flex-wrap justify-center gap-3 mb-8"
    >
      {[
        { id: 'all', label: 'All', icon: Trophy },
        { id: 'robotics', label: 'Robotics', icon: Cpu },
        { id: 'hackathon', label: 'Hackathons', icon: Zap },
        { id: 'programming', label: 'Programming', icon: Code },
        { id: 'project', label: 'Projects', icon: Rocket },
      ].map((filter) => (
        <motion.button
          key={filter.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveFilter(filter.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 text-sm ${
            activeFilter === filter.id
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-transparent text-white shadow-lg shadow-purple-500/25'
              : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-purple-500/50'
          }`}
        >
          <filter.icon size={16} />
          <span className="font-medium">{filter.label}</span>
        </motion.button>
      ))}
    </motion.div>
  );

  const LocationFilter = ({ activeLocation, setActiveLocation }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="flex flex-wrap justify-center gap-3 mb-12"
    >
      {[
        { id: 'all', label: 'All Locations', icon: MapPin },
        { id: 'Dhaka', label: 'Dhaka', icon: MapPin },
        { id: 'Chittagong', label: 'Chittagong', icon: MapPin },
        { id: 'Rajshahi', label: 'Rajshahi', icon: MapPin },
        { id: 'Khulna', label: 'Khulna', icon: MapPin },
        { id: 'Sylhet', label: 'Sylhet', icon: MapPin },
        { id: 'Barisal', label: 'Barisal', icon: MapPin },
        { id: 'International', label: 'International', icon: MapPin },
        { id: 'Remote', label: 'Remote', icon: MapPin },
      ].map((location) => (
        <motion.button
          key={location.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveLocation(location.id)}
          className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-300 text-xs ${
            activeLocation === location.id
              ? 'bg-gradient-to-r from-blue-600 to-cyan-600 border-transparent text-white shadow-lg shadow-blue-500/25'
              : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-blue-500/50'
          }`}
        >
          <location.icon size={14} />
          <span>{location.label}</span>
        </motion.button>
      ))}
    </motion.div>
  );

  const filteredAwards = awards.filter(award => {
    const filterMatch = activeFilter === 'all' || award.type === activeFilter;
    const locationMatch = activeLocation === 'all' || award.location === activeLocation;
    return filterMatch && locationMatch;
  });

  return (
    <section id="awards" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/20 rounded-full"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
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
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
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
            NATIONWIDE COMPETITIVE EXCELLENCE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Achievements Across{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Bangladesh
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Showcasing excellence in competitions and projects across Dhaka, major cities, and international platforms
          </motion.p>
        </motion.div>

        {/* Achievement Statistics */}
        <AchievementStats />

        {/* Dual Filter System */}
        <div className="mb-8">
          <CategoryFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          <LocationFilter activeLocation={activeLocation} setActiveLocation={setActiveLocation} />
        </div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mb-8"
        >
          <p className="text-gray-400">
            Showing <span className="text-purple-400 font-semibold">{filteredAwards.length}</span> achievements
            {activeFilter !== 'all' && <span> in <span className="text-purple-400">{activeFilter}</span></span>}
            {activeLocation !== 'all' && <span> from <span className="text-blue-400">{activeLocation}</span></span>}
          </p>
        </motion.div>

        {/* Swiper for Awards - Added key to force re-render */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {filteredAwards.length > 0 ? (
            <Swiper
              key={swiperKey} // Force re-render when filters change
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                el: '.swiper-pagination',
                bulletClass: 'swiper-pagination-bullet custom-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
                1280: { slidesPerView: 3 },
              }}
              className="awards-swiper pb-16"
            >
              {filteredAwards.map((award, index) => (
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
                          {React.createElement(award.icon, { size: 28, className: "text-white" })}
                        </div>
                        <div className={`absolute inset-0 bg-gradient-to-br ${award.color} rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                      </div>

                      {/* Location Badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <MapPin size={14} className="text-gray-400" />
                        <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded-full border border-gray-700/50">
                          {award.location}
                        </span>
                        <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded-full border border-gray-700/50">
                          {award.category}
                        </span>
                      </div>

                      {/* Title and Organization */}
                      <h4 className="text-white text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                        {award.title}
                      </h4>
                      <p className="text-purple-400 font-semibold text-lg mb-4">{award.organization}</p>
                      
                      {/* Description */}
                      <p className="text-gray-300 mb-6 leading-relaxed flex-grow text-sm">{award.description}</p>

                      {/* Achievement Details */}
                      <div className="space-y-2 mt-auto">
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
              {/* Add pagination container */}
              <div className="swiper-pagination mt-8"></div>
            </Swiper>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <div className="text-gray-400 text-lg mb-4">
                No achievements found for the selected filters.
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveFilter('all');
                  setActiveLocation('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Show All Achievements
              </motion.button>
            </motion.div>
          )}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            Active across 8+ cities in Bangladesh • Dhaka • Chittagong • Rajshahi • Khulna • Sylhet • Barisal • International Platforms
          </p>
        </motion.div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .awards-swiper {
          padding-bottom: 60px;
        }

        .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          background: rgba(168, 85, 247, 0.3) !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
          margin: 0 4px !important;
          border: 2px solid transparent !important;
        }

        .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #a855f7, #ec4899) !important;
          transform: scale(1.3) !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
          box-shadow: 0 0 12px rgba(168, 85, 247, 0.5) !important;
        }

        .swiper-pagination {
          position: relative !important;
          margin-top: 2rem !important;
        }
      `}</style>
    </section>
  );
};

export default Awards;