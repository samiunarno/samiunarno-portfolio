import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'samiunarnouk@gmail.com',
      href: 'mailto:samiunarnouk@gmail.com',
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-900 relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-pink-600/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10" ref={ref}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-purple-400 text-base sm:text-lg font-medium mb-2 sm:mb-4"
          >
            GET IN TOUCH
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-8 leading-tight"
          >
            Ready to Take Your Digital <br />
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Presence to the Next Level?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2"
          >
            I'm always excited to work on new projects and collaborate with amazing people.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16">

          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Whether you have a project in mind or just want to say hello, drop me a message—
                I'll reply as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center p-4 sm:p-5 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl mr-4 group-hover:border-purple-400/50 transition-colors duration-300">
                    <info.icon size={22} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium group-hover:text-purple-400 transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6">

              {/* Name */}
              <div>
                <label className="block text-white font-medium mb-2 text-sm sm:text-base">
                  Full Name *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  {...register('name', { required: 'Name is required' })}
                  className="w-full p-3 sm:p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-500/50 outline-none transition-all"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-red-400 text-sm flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-white font-medium mb-2 text-sm sm:text-base">
                  Email Address *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/, message: 'Invalid email address' },
                  })}
                  type="email"
                  className="w-full p-3 sm:p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-500/50 outline-none transition-all"
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="mt-1 text-red-400 text-sm flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className="block text-white font-medium mb-2 text-sm sm:text-base">
                  Subject *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  {...register('subject', { required: 'Subject is required' })}
                  className="w-full p-3 sm:p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-500/50 outline-none transition-all"
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="mt-1 text-red-400 text-sm flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-white font-medium mb-2 text-sm sm:text-base">
                  Message *
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  {...register('message', { required: 'Message is required' })}
                  rows={5}
                  className="w-full p-3 sm:p-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-500/50 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-red-400 text-sm flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-3 sm:p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-purple-500/25 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Success & Error Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-900/30 border border-green-600/30 text-green-400 rounded-xl flex items-center gap-2"
                >
                  <CheckCircle size={18} />
                  Message sent successfully!
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-900/30 border border-red-600/30 text-red-400 rounded-xl flex items-center gap-2"
                >
                  <AlertCircle size={18} />
                  Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
