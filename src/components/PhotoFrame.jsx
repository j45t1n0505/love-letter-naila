import { motion } from "framer-motion";

const PhotoFrame = ({ src }) => {
  const photos = Array.isArray(src) ? src : [src];

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div 
      className="relative w-full max-w-2xl mx-auto my-8 sm:my-10 md:my-12 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white p-3 sm:p-4 shadow-2xl border border-gray-100 cursor-pointer transition-all duration-300"
            style={{ rotate: index === 0 ? "-2deg" : "2deg" }}
            whileHover={{ 
              rotate: 0, 
              boxShadow: "0 25px 50px -12px rgba(219, 39, 119, 0.35)", 
              scale: 1.08, 
              y: -15,
              transition: { type: "spring", stiffness: 300, damping: 15 }
            }}
          >
            <img 
              src={photo} 
              alt={`Naila ${index + 1}`} 
              className="w-full h-auto grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
            <motion.p 
              className="text-center font-serif italic text-sm sm:text-base md:text-lg mt-3 sm:mt-4 text-gray-600 transition-colors duration-300 cursor-pointer"
              whileHover={{ color: "#db2777", scale: 1.05 }}
            >
              The most beautiful soul 😊✨
            </motion.p>
            <motion.p 
              className="text-center font-serif italic text-xs sm:text-sm mt-2 text-gray-500 transition-colors duration-300 cursor-pointer"
              whileHover={{ color: "#db2777", scale: 1.07 }}
            >
              Forever in my heart🥰💖
            </motion.p>
          </motion.div>
        ))}
      </div>
      <motion.div 
        className="absolute -top-4 -right-4 text-4xl cursor-pointer"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        whileHover={{ scale: 1.4, rotate: 15, y: -20 }}
      >
        🌸
      </motion.div>
    </motion.div>
  );
};

export default PhotoFrame;