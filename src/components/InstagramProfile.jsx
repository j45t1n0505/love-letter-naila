import { motion } from "framer-motion";

const InstagramProfile = ({ username, profileUrl, profileImage }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-col items-center transition-all duration-300"
    >
      {/* Username Link */}
      <motion.a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15, color: "#db2777", y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="text-gray-600 hover:text-romantic-dark text-sm sm:text-base font-medium transition-colors mb-4 cursor-pointer"
      >
        {username}
      </motion.a>

      {/* Instagram Profile Picture with Frame */}
      <motion.a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.12, rotate: 3, y: -15 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="relative inline-block cursor-pointer group"
      >
        {/* Outer Frame - Decorative Border */}
        <motion.div 
          className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 p-3 sm:p-4 bg-gradient-to-br from-pink-200 via-romantic-light to-pink-100 rounded-full shadow-lg transition-all duration-300 group-hover:shadow-2xl"
          whileHover={{ 
            boxShadow: "0 20px 50px -12px rgba(219, 39, 119, 0.4)",
          }}
        >
          {/* Inner Frame - White Border */}
          <div className="absolute inset-3 sm:inset-4 bg-white rounded-full shadow-inner flex items-center justify-center overflow-hidden border-4 border-white">
            {/* Profile Image */}
            {profileImage ? (
              <motion.img
                src={profileImage}
                alt={`${username} profile`}
                className="w-full h-full object-cover rounded-full transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-pink-100 to-pink-50 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl md:text-4xl">📷</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute -top-2 -right-2 text-3xl sm:text-4xl"
          animate={{ rotate: 360, y: [0, -8, 0] }}
          transition={{ rotate: { repeat: Infinity, duration: 20 }, y: { repeat: Infinity, duration: 3 } }}
          whileHover={{ scale: 1.4, y: -15 }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute -bottom-2 -left-2 text-3xl sm:text-4xl"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 20 }}
          whileHover={{ scale: 1.4 }}
        >
          💕
        </motion.div>
      </motion.a>
    </motion.div>
  );
};

export default InstagramProfile;
