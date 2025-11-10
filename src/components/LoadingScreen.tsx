import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col items-center justify-center text-center"
      >
        {/* Spinner */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          <div className="absolute w-20 h-20 border-4 border-purple-600/30 rounded-full" />
          <div className="absolute w-20 h-20 border-4 border-transparent border-t-purple-500 rounded-full animate-spin" />
        </div>

        {/* Text */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 text-2xl font-bold text-white"
        >
          Welcome Back !!
        </motion.h2>

        {/* Animated line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 2, delay: 1 }}
          className="mt-4 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
