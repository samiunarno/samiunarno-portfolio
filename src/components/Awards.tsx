import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Trophy, Medal, Award, Star, Zap, Rocket, Target, Users, Cpu, Code2 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Awards = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const awards = [
    // --- International ---
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

    // --- Bangladesh Robotics / Tech Fests ---
    {
      id: 3,
      title: 'TRACTION Champion',
      organization: 'National Robotics Competition, Bangladesh',
      year: '2023',
      description:
        'Won national robotics event with a high-performing autonomous bot focusing on computer vision and path optimization.',
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
        'Built and programmed a line-following and obstacle-avoidance robot that won top place at IUB TechFest Robotics Challenge.',
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
        'Developed a semi-autonomous rescue robot that secured finalist position among 50+ teams in the Technovation robotics event.',
      icon: Rocket,
      color: 'from-pink-500 to-rose-500',
      category: 'University Robotics',
      achievement: 'Top 5 Finalist',
      teamSize: '5 members',
      duration: '2 Months',
    },

    // --- Hackathons ---
    {
      id: 6,
      title: 'Bangladesh ICT Division Hackathon',
      organization: 'ICT Division, Bangladesh Government',
      year: '2023',
      description:
        'Created a machine learning-based flood prediction system, earning recognition in the Smart Bangladesh Hackathon.',
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
        'Developed a mental health chatbot using NLP and React Native that reached the final stage of NSU Hackathon 2024.',
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
      description:
        'Built an AI-powered attendance and face recognition system for educational institutes — awarded for innovation.',
      icon: Zap,
      color: 'from-amber-500 to-yellow-500',
      category: 'AI Hackathon',
      achievement: 'Innovation Award',
      teamSize: '3 members',
      duration: '1 Week',
    },

    // --- Competitive Programming ---
    {
      id: 9,
      title: 'NSU Bit Arena Winner',
      organization: 'North South University',
      year: '2022',
      description:
        'Secured top position in competitive programming among national universities using C++ and algorithmic problem-solving.',
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
      organization: 'Code Samurai by CSE Fest Bangladesh',
      year: '2019',
      description:
        'Participated and reached finals in Bangladesh’s biggest university-level coding contest.',
      icon: Award,
      color: 'from-violet-500 to-fuchsia-500',
      category: 'Programming Contest',
      achievement: 'Finalist',
      teamSize: '2 members',
      duration: '1 Day',
    },
  ];

  // ✅ Always visible Achievement Stats
  const AchievementStats = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
      {[
        { icon: Trophy, label: 'International Wins', value: '2' },
        { icon: Users, label: 'Team Members Led', value: '08+' },
        { icon: Zap, label: 'Competitions', value: '20+' },
        { icon: Rocket, label: 'Years Active', value: '7+' },
      ].map((stat, index) => (
        <div
          key={index}
          className="text-center p-4 bg-gray-900/30 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
        >
          <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
            <stat.icon className="w-8 h-8 text-purple-400" />
          </div>
          <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
          <div className="text-xs text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  );

  return (
    <section
      id="awards"
      className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Animation */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-purple-400 text-lg font-medium mb-4">
            COMPETITION EXCELLENCE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Awards &{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>

          <div className="text-pink-400 text-sm font-semibold animate-pulse">
            Robotics • Hackathons • Programming • Innovation
          </div>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            Recognizing excellence in Bangladesh’s most competitive robotics,
            hackathon, and programming events (2019–2025).
          </p>
        </div>

        {/* Always Visible Stats */}
        <AchievementStats />

        {/* Awards Carousel */}
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet custom-bullet',
              bulletActiveClass:
                'swiper-pagination-bullet-active custom-bullet-active',
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="awards-swiper pb-16"
          >
            {awards.map((award) => (
              <SwiperSlide key={award.id}>
                <div className="h-full">
                  <div className="p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm border border-gray-700/30 rounded-3xl h-full flex flex-col relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-5 rounded-3xl`}
                    />
                    <div className="relative mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${award.color} rounded-2xl flex items-center justify-center shadow-lg`}
                      >
                        <award.icon size={28} className="text-white" />
                      </div>
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${award.color} rounded-2xl blur-md opacity-30`}
                      />
                    </div>

                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-700/50 border border-gray-600/50 text-xs text-gray-300 mb-4 self-start">
                      {award.category}
                    </div>

                    <h4 className="text-white text-xl font-bold mb-3">
                      {award.title}
                    </h4>
                    <p className="text-purple-400 font-semibold text-lg mb-4">
                      {award.organization}
                    </p>

                    <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                      {award.description}
                    </p>

                    <div className="space-y-3 mt-auto">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">Achievement:</span>
                        <span className="text-white font-semibold">
                          {award.achievement}
                        </span>
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

                    <div className="absolute top-6 right-6">
                      <div className="px-3 py-1 bg-gray-700/80 rounded-full border border-gray-600/50">
                        <span className="text-white text-sm font-semibold">
                          {award.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Representing Bangladesh in Robotics, AI, and Programming excellence since 2017
          </p>
        </div>
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
