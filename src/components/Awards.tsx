import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Award, Trophy, Star, Medal } from 'lucide-react';

const Awards = () => {
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

  return (
    <section id="awards" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-purple-400 text-lg font-medium mb-4"
          >
            RECOGNITION & ACHIEVEMENTS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            Awards &{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </motion.h2>
        </motion.div>

        {/* Swiper for Awards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
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
              1024: {
                slidesPerView: 2,
              },
            }}
            className="awards-swiper"
          >
            {awards.map((award, index) => (
              <SwiperSlide key={award.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <div className="p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl hover:border-purple-500/50 transition-all duration-500 hover-target h-full flex flex-col">
                    {/* Award Icon */}
                    <div className="mb-6">
                      <award.icon size={32} className="text-purple-400" />
                    </div>

                    {/* Title and Organization */}
                    <h4 className="text-white text-xl font-semibold mb-4">{award.title}</h4>
                    <p className="text-purple-400 text-lg mb-4">{award.organization}</p>
                    <p className="text-gray-400 mb-4">{award.description}</p>

                    {/* Image */}
                    <div className="relative overflow-hidden mb-4">
                      <img
                        src={award.image}
                        alt={award.title}
                        className="w-full h-48 object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Year */}
                    <p className="text-gray-500 text-sm">{award.year}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .awards-swiper {
          padding-bottom: 50px;
        }

        .custom-bullet {
          width: 12px !important;
          height: 12px !important;
          background: rgba(168, 85, 247, 0.3) !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
        }

        .custom-bullet-active {
          background: linear-gradient(135deg, #a855f7, #ec4899) !important;
          transform: scale(1.2) !important;
        }
      `}</style>
    </section>
  );
};

export default Awards;
