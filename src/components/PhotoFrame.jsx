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
            className="bg-white p-3 sm:p-4 shadow-2xl border border-gray-100"
            style={{ rotate: index === 0 ? "-2deg" : "2deg" }}
            whileHover={{ rotate: 0 }}
          >
            <img 
              src={photo} 
              alt={`Naila ${index + 1}`} 
              className="w-full h-auto grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
            <p className="text-center font-serif italic text-sm sm:text-base md:text-lg mt-3 sm:mt-4 text-gray-600">The most beautiful soul 😊✨</p>
            <p className="text-center font-serif italic text-xs sm:text-sm mt-2 text-gray-500">Forever in my heart🥰💖</p>
          </motion.div>
        ))}
      </div>
      <motion.div 
        className="absolute -top-4 -right-4 text-4xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        🌸
      </motion.div>
    </motion.div>
  );
};

export default PhotoFrame;