import { motion } from "framer-motion";

const FloatingHearts = () => {
  const hearts = Array.from({ length: 15 });
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "110vh", x: Math.random() * 100 + "vw", opacity: 0 }}
          animate={{
            y: "-10vh",
            opacity: [0, 1, 1, 0],
            rotate: [0, 45, -45, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 7,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          className="absolute text-romantic-dark/20 text-lg sm:text-xl md:text-2xl"
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;