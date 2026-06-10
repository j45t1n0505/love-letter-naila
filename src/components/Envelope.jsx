import { motion } from "framer-motion";

const Envelope = ({ isOpen, onClick }) => {
  return (
    <motion.div 
      className="relative flex justify-center items-center py-12 sm:py-16 md:py-20 cursor-pointer px-4 group transition-all duration-300" 
      onClick={onClick}
      whileHover={{ scale: 1.08, y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <div style={{ perspective: "1000px" }}>
        <motion.div 
          className="relative w-64 sm:w-80 h-40 sm:h-56 bg-pink-200 rounded-bl-lg rounded-br-lg shadow-2xl overflow-visible transition-all duration-300 group-hover:shadow-3xl"
          animate={{ scale: isOpen ? 0.8 : 1 }}
          style={{ transformStyle: "preserve-3d" }}
          whileHover={{
            boxShadow: "0 25px 50px -12px rgba(219, 39, 119, 0.4)",
          }}
        >
          {/* Top Flap */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-0 border-l-[120px] sm:border-l-[160px] border-l-transparent border-r-[120px] sm:border-r-[160px] border-r-transparent border-t-[80px] sm:border-t-[110px] border-t-pink-300 origin-top z-20 transition-colors duration-300 group-hover:border-t-pink-400"
            animate={{ rotateX: isOpen ? 180 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
          />
        
        {/* Letter Preview */}
        <motion.div
          className="absolute left-4 right-4 bottom-4 bg-white h-48 shadow-inner z-40 p-4 transition-all duration-300"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? -120 : 0 }}
          transition={{ delay: isOpen ? 0.5 : 0, duration: 0.8 }}
          whileHover={{
            boxShadow: "0 10px 25px -5px rgba(219, 39, 119, 0.2)",
          }}
        >
          <div className="border border-pink-100 h-full flex flex-col items-center justify-center space-y-2 transition-colors duration-300">
            <motion.div 
              className="w-12 h-1 bg-pink-100 transition-colors duration-300"
              whileHover={{ backgroundColor: "#db2777" }}
            ></motion.div>
            <motion.div 
              className="w-20 h-1 bg-pink-100 transition-colors duration-300"
              whileHover={{ backgroundColor: "#db2777" }}
            ></motion.div>
        <motion.p 
          className="font-serif italic text-romantic-dark transition-colors duration-300"
          whileHover={{ color: "#db2777", scale: 1.05 }}
        >
          Special for you!! Naila💕
        </motion.p>
          </div>
        </motion.div>

        {/* Paper Cover */}
        <div className="absolute inset-0 border-b-4 border-pink-300 rounded-lg z-30 transition-colors duration-300 group-hover:border-pink-400" />
      </motion.div>
      </div>
      
      {!isOpen && (
        <motion.p 
          className="absolute -bottom-10 font-sans text-romantic-dark animate-bounce cursor-pointer transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.08, color: "#db2777", y: -3 }}
        >
          Klik untuk membuka surat 💌
        </motion.p>
      )}
    </motion.div>
  );
};

export default Envelope;