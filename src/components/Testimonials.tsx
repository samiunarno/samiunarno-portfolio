import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const testimonials = [
    {
      id: 1,
      name: 'Dr. Sarah Mitchell',
      role: 'Professor of Computer Science',
      company: 'Changchun University of Science & Technology',
      content: 'Samiun demonstrated exceptional problem-solving skills in my Advanced Algorithms course. His ability to apply theoretical concepts to practical robotics projects was impressive. He consistently delivered innovative solutions that exceeded academic expectations.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      id: 2,
      name: 'Professor Zhang Wei',
      role: 'Robotics Lab Supervisor',
      company: 'CUST Robotics Department',
      content: 'As team lead for the Mars Rover project, Samiun showed remarkable leadership and technical expertise. His contributions to the navigation system and AI integration were crucial to our success in international competitions. A truly dedicated and talented student.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      id: 3,
      name: 'Mark Thompson',
      role: 'CTO',
      company: 'Betopia',
      content: 'Samiun joined our development team and immediately made an impact with his full-stack capabilities. His research on system optimization led to significant performance improvements. He demonstrates a rare combination of technical skill and creative thinking.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      id: 4,
      name: 'Dr. Ahmed Hassan',
      role: 'Team Coordinator',
      company: 'IUB Mars Rover Team',
      content: 'Working with Samiun on the University Rover Challenge was a privilege. His technical leadership and systematic approach to problem-solving were instrumental in our first-place achievement in Asia. He manages complex projects with professionalism beyond his years.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      id: 5,
      name: 'Lisa Rodriguez',
      role: 'Project Manager',
      company: 'Technoxian Robotics Competition',
      content: 'Samiun\'s robotics expertise shone during the Technoxian competition. His innovative approach to sensor integration and real-time data processing set his team apart. He possesses both the theoretical knowledge and practical skills needed for complex engineering challenges.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={`${
              index < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
            } transition-colors duration-300`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />

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
            PROFESSIONAL ENDORSEMENTS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            Recognition from <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Mentors & Colleagues</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Feedback from professors, industry professionals, and team members highlighting technical expertise and professional growth
          </motion.p>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet custom-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
            }}
            centeredSlides={true}
            loop={true}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl hover:border-purple-500/50 transition-all duration-500 hover-target h-full flex flex-col"
                >
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote size={32} className="text-purple-400" />
                  </div>

                  {/* Rating */}
                  <div className="mb-6">
                    <StarRating rating={testimonial.rating} />
                  </div>

                  {/* Content */}
                  <blockquote className="text-gray-300 text-lg leading-relaxed mb-8 flex-grow">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/30"
                    />
                    <div>
                      <h4 className="text-white font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {testimonial.role}
                      </p>
                      <p className="text-purple-400 text-sm">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm">
            References available upon request from academic and professional collaborations
          </p>
        </motion.div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx>{`
        .testimonials-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          transition: all 0.3s ease;
        }

        .testimonials-swiper .swiper-pagination-bullet-active {
          background: rgba(255, 255, 255, 1);
          transform: scale(1.2);
        }
        
        .testimonials-swiper .swiper-pagination {
          position: relative;
          margin-top: 2rem;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;