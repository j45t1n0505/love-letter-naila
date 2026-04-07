import { motion } from "framer-motion";

const PhotoFrame = ({ src }) => {
  const photos = Array.isArray(src) ? src : [src];

  return (
    <motion.div 
      className="relative w-full max-w-2xl mx-auto my-8 sm:my-10 md:my-12 px-4"
      whileHover={{ scale: 1.02 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="bg-white p-3 sm:p-4 shadow-2xl border border-gray-100 cursor-pointer"
            style={{ rotate: index === 0 ? "-2deg" : "2deg" }}
            whileHover={{ rotate: 0, boxShadow: "0 25px 50px -12px rgba(219, 39, 119, 0.25)", scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img 
              src={photo} 
              alt={`Naila ${index + 1}`} 
              className="w-full h-auto grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
            <motion.p 
              className="text-center font-serif italic text-sm sm:text-base md:text-lg mt-3 sm:mt-4 text-gray-600"
              whileHover={{ color: "#db2777" }}
            >
              The most beautiful soul 😊✨
            </motion.p>
            <motion.p 
              className="text-center font-serif italic text-xs sm:text-sm mt-2 text-gray-500"
              whileHover={{ color: "#db2777", scale: 1.05 }}
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
        whileHover={{ scale: 1.3, rotate: 10 }}
      >
        🌸
      </motion.div>
    </motion.div>
  );
};

export default PhotoFrame;