import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import {
  Trophy,
  Medal,
  Award,
  Star,
  Zap,
  Rocket,
  Target,
  Users,
  Cpu,
  Code2,
} from 'lucide-react';

import { useInView } from 'react-intersection-observer';

const Awards = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // =========================================
  // Awards List
  // =========================================
  const awards = [
    // International
    {
      id: 1,
      title: '1st Place in Asia',
      organization: 'University Rover Challenge 2018 (USA)',
      year: '2018',
      description:
        'Led the IUB Mars Rover team to achieve 1st position in Asia category, competing globally in robotics and space exploration.',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      category: 'Robotics Competition',
      achievement: 'International Champion',
      teamSize: '15+ members',
      duration: '1 Year Project',
    },
    {
      id: 2,
      title: 'Technoxian Finalist',
      organization: 'International Robotics Championship (India)',
      year: '2024',
      description:
        'Represented Bangladesh as finalist at Technoxian World Robotics Championship, focusing on AI-integrated autonomous systems.',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      category: 'Robotics Championship',
      achievement: 'International Finalist',
      teamSize: '8 members',
      duration: '6 Months',
    },

    // Robotics / Tech Fest BD
    {
      id: 3,
      title: 'TRACTION Champion',
      organization: 'National Robotics Competition, Bangladesh',
      year: '2023',
      description:
        'Won national robotics event with a high-performing autonomous bot focusing on computer vision & path optimization.',
      icon: Medal,
      color: 'from-purple-500 to-pink-500',
      category: 'National Robotics',
      achievement: 'National Champion',
      teamSize: '6 members',
      duration: '3 Months',
    },
    {
      id: 4,
      title: 'IUB TechFest Robotics Champion',
      organization: 'Independent University Bangladesh',
      year: '2022',
      description:
        'Built and programmed a line-following & obstacle-avoidance robot winning top place at IUB TechFest.',
      icon: Cpu,
      color: 'from-green-500 to-emerald-500',
      category: 'University Robotics',
      achievement: '1st Place',
      teamSize: '4 members',
      duration: '2 Weeks',
    },
    {
      id: 5,
      title: 'MIST Technovation 2021',
      organization: 'Military Institute of Science and Technology',
      year: '2021',
      description:
        'Developed a semi-autonomous rescue robot that secured finalist position among 50+ teams.',
      icon: Rocket,
      color: 'from-pink-500 to-rose-500',
      category: 'University Robotics',
      achievement: 'Top 5 Finalist',
      teamSize: '5 members',
      duration: '2 Months',
    },

    // Hackathons
    {
      id: 6,
      title: 'Bangladesh ICT Division Hackathon',
      organization: 'ICT Division, Bangladesh Government',
      year: '2023',
      description:
        'Created a machine-learning flood prediction system — recognized in Smart Bangladesh Hackathon.',
      icon: Star,
      color: 'from-sky-500 to-indigo-500',
      category: 'National Hackathon',
      achievement: 'Innovation Award',
      teamSize: '3 members',
      duration: '72 Hours',
    },
    {
      id: 7,
      title: 'NSU Hackathon Finalist',
      organization: 'North South University',
      year: '2024',
      description:
        'Built a mental health chatbot using NLP & React Native — finalist at NSU Hackathon.',
      icon: Target,
      color: 'from-teal-500 to-cyan-500',
      category: 'Hackathon',
      achievement: 'Top 10 Finalist',
      teamSize: '4 members',
      duration: '48 Hours',
    },
    {
      id: 8,
      title: 'AI Innovation Hackathon',
      organization: 'BRAC University & BASIS',
      year: '2022',
      description: 'AI-powered attendance + face recognition system — won Innovation Award.',
      icon: Zap,
      color: 'from-amber-500 to-yellow-500',
      category: 'AI Hackathon',
      achievement: 'Innovation Award',
      teamSize: '3 members',
      duration: '1 Week',
    },

    // Programming Competitions
    {
      id: 9,
      title: 'NSU Bit Arena Winner',
      organization: 'North South University',
      year: '2022',
      description:
        'Champion in competitive programming using C++ & algorithmic problem-solving.',
      icon: Code2,
      color: 'from-red-500 to-pink-500',
      category: 'Competitive Programming',
      achievement: 'Champion',
      teamSize: 'Individual',
      duration: '2 Days',
    },
    {
      id: 10,
      title: 'Code Samurai Finalist',
      organization: 'CSE Fest Bangladesh',
      year: '2019',
      description:
        'Reached finals in Bangladesh’s biggest university-level coding contest.',
      icon: Award,
      color: 'from-violet-500 to-fuchsia-500',
      category: 'Programming Contest',
      achievement: 'Finalist',
      teamSize: '2 members',
      duration: '1 Day',
    },
  ];

  // =========================================
  // Achievement Stats
  // =========================================
  const AchievementStats = () => (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12 max-w-4xl mx-auto">
      {[
        { icon: Trophy, label: 'International Wins', value: '02' },
        { icon: Users, label: 'Team Members Led', value: '08+' },
        { icon: Zap, label: 'Competitions', value: '20+' },
        { icon: Rocket, label: 'Years Active', value: '7+' },
      ].map((stat, index) => (
        <div
          key={index}
          className="text-center p-4 bg-gray-900/40 rounded-2xl border border-gray-700/40 backdrop-blur-md"
        >
          <stat.icon className="w-7 h-7 text-purple-400 mx-auto mb-2" />
          <p className="text-xl sm:text-2xl font-bold text-white">{stat.value}</p>
          <p className="text-gray-400 text-xs sm:text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  );

  return (
    <section
      id="awards"
      className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-pink-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-purple-400 text-sm sm:text-lg font-medium mb-2 sm:mb-4">
            COMPETITION EXCELLENCE
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Awards &{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Recognizing excellence in Bangladesh’s top robotics, hackathon, and programming events.
          </p>
        </div>

        {/* Stats */}
        <AchievementStats />

        {/* Awards Swiper */}
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {awards.map((award) => (
              <SwiperSlide key={award.id}>
                <div className="p-5 bg-gray-800/40 border border-gray-700/30 rounded-3xl backdrop-blur-md h-full flex flex-col relative">
                  {/* Icon */}
                  <div className="relative mb-5">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${award.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <award.icon size={26} className="text-white" />
                    </div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${award.color} rounded-2xl blur-lg opacity-30`}
                    />
                  </div>

                  {/* Category */}
                  <div className="inline-flex px-3 py-1 rounded-full bg-gray-700/40 border border-gray-600/50 text-xs text-gray-300 mb-3">
                    {award.category}
                  </div>

                  {/* Title */}
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                    {award.title}
                  </h4>

                  <p className="text-purple-400 font-semibold text-sm sm:text-base mb-3">
                    {award.organization}
                  </p>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 flex-grow">
                    {award.description}
                  </p>

                  <div className="space-y-2 text-xs sm:text-sm mt-auto">
                    <div className="flex justify-between text-gray-300">
                      <span>Achievement:</span>
                      <span className="text-white font-semibold">
                        {award.achievement}
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Team:</span>
                      <span className="text-white">{award.teamSize}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Duration:</span>
                      <span className="text-white">{award.duration}</span>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 px-3 py-1 bg-gray-700/70 rounded-full border border-gray-600/40">
                    <span className="text-white text-xs sm:text-sm font-semibold">
                      {award.year}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <p className="text-gray-500 text-xs sm:text-sm text-center mt-10">
          Representing Bangladesh in Robotics, AI & Programming since 2017
        </p>
      </div>

      {/* Swiper Custom Styling */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(168, 85, 247, 0.3);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #a855f7, #ec4899);
          transform: scale(1.3);
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.6);
        }
      `}</style>
    </section>
  );
};

export default Awards;
