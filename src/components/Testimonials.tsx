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
      name: 'Richard Johnson',
      role: 'CEO, TechStart',
      company: 'TechStart Inc.',
      content: 'Working with Adrian was an absolute pleasure. His attention to detail and technical expertise helped us launch our platform ahead of schedule. The quality of work exceeded our expectations.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'InnovateHub',
      content: 'Adrian\'s problem-solving skills are exceptional. He delivered a complex e-commerce platform that not only met our requirements but also included thoughtful improvements we hadn\'t considered.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      id: 3,
      name: 'Sarah Williams',
      role: 'Marketing Director',
      company: 'CreativeAgency',
      content: 'The website Adrian built for us has received countless compliments from our clients. His understanding of both design and development created the perfect balance we were looking for.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      id: 4,
      name: 'David Rodriguez',
      role: 'Startup Founder',
      company: 'NextGen Solutions',
      content: 'Adrian transformed our vision into reality with incredible precision. His communication throughout the project was excellent, and he delivered everything on time and within budget.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      id: 5,
      name: 'Emily Davis',
      role: 'UX Designer',
      company: 'DesignCorp',
      content: 'Collaborating with Adrian on our mobile app was seamless. He brought valuable insights to improve the user experience and implemented complex features with elegant solutions.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
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
            CLIENT FEEDBACK
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            Kind Words from <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Satisfied Clients</span>
          </motion.h2>
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
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet custom-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
            }}
            centeredSlides={true}
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

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          
        </motion.div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx>{`
        .testimonials-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
        }

        .testimonials-swiper .swiper-pagination-bullet-active {
          background: rgba(255, 255, 255, 1);
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
