import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const blogPosts = [
    {
      id: 1,
      title: 'Building Immersive 3D Web Experiences with Three.js',
      excerpt: 'Explore the fundamentals of creating stunning 3D web applications using Three.js and React Three Fiber.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Development',
      tags: ['Three.js', 'WebGL', 'React'],
    },
    {
      id: 2,
      title: 'The Future of Web Animation: Framer Motion vs GSAP',
      excerpt: 'A comprehensive comparison of modern animation libraries and when to use each one.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Animation',
      tags: ['Framer Motion', 'GSAP', 'CSS'],
    },
    {
      id: 3,
      title: 'Optimizing React Performance for Large Applications',
      excerpt: 'Best practices and techniques for maintaining high performance in complex React applications.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'React',
      tags: ['React', 'Performance', 'Optimization'],
    },
    {
      id: 4,
      title: 'Creating Responsive Design Systems with Tailwind CSS',
      excerpt: 'How to build scalable and maintainable design systems using utility-first CSS frameworks.',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2023-12-28',
      readTime: '7 min read',
      category: 'Design',
      tags: ['Tailwind', 'CSS', 'Design Systems'],
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gray-800 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.p
            className="text-purple-400 text-sm sm:text-lg font-medium mb-3 sm:mb-4"
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            INSIGHTS & THOUGHTS
          </motion.p>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Latest{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Articles
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto"
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            Sharing knowledge and insights about web development, design, and the latest technologies.
          </motion.p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="group bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
            >
              
              {/* Image */}
              <div className="relative overflow-hidden h-48 sm:h-56 md:h-60">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />

                <span className="absolute top-3 left-3 px-3 py-1 bg-purple-600/80 rounded-full text-white text-xs sm:text-sm font-medium">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                
                {/* Meta */}
                <div className="flex items-center gap-4 mb-4 text-xs sm:text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-purple-400 transition">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 px-2 py-1 bg-gray-700/40 border border-gray-600/40 rounded text-xs text-gray-300"
                    >
                      <Tag size={12} /> {tag}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-purple-400 font-medium"
                >
                  Read More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition" />
                </motion.button>
              </div>

            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold shadow-lg shadow-purple-500/20"
          >
            View All Articles
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default Blog;
