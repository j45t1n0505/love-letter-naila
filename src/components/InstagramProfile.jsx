import { motion } from "framer-motion";

const InstagramProfile = ({ username, profileUrl, profileImage }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center"
    >
      {/* Username Link */}
      <motion.a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, color: "#db2777" }}
        className="text-gray-600 hover:text-romantic-dark text-sm sm:text-base font-medium transition-colors mb-4"
      >
        {username}
      </motion.a>

      {/* Instagram Profile Picture with Frame */}
      <motion.a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08, rotate: 2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="relative inline-block cursor-pointer"
      >
        {/* Outer Frame - Decorative Border */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 p-3 sm:p-4 bg-gradient-to-br from-pink-200 via-romantic-light to-pink-100 rounded-full shadow-lg">
          {/* Inner Frame - White Border */}
          <div className="absolute inset-3 sm:inset-4 bg-white rounded-full shadow-inner flex items-center justify-center overflow-hidden border-4 border-white">
            {/* Profile Image */}
            {profileImage ? (
              <img
                src={profileImage}
                alt={`${username} profile`}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-pink-100 to-pink-50 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl md:text-4xl">📷</span>
              </div>
            )}
          </div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute -top-2 -right-2 text-3xl sm:text-4xl"
          animate={{ rotate: 360, y: [0, -8, 0] }}
          transition={{ rotate: { repeat: Infinity, duration: 20 }, y: { repeat: Infinity, duration: 3 } }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute -bottom-2 -left-2 text-3xl sm:text-4xl"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 20 }}
        >
          💕
        </motion.div>
      </motion.a>
    </motion.div>
  );
};

export default InstagramProfile;
