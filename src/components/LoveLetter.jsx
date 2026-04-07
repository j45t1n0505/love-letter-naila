import { motion } from "framer-motion";

const LoveLetter = ({ text }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ boxShadow: "0 0 30px rgba(219, 39, 119, 0.15)", scale: 1.01, y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="max-w-3xl mx-auto my-8 sm:my-10 md:my-12 p-6 sm:p-10 md:p-20 bg-[#fffdfa] shadow-2xl relative border-l-[8px] sm:border-l-[15px] border-romantic cursor-pointer"
    >
      <div className="font-serif text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-loose italic">
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={letter}>
            {char}
          </motion.span>
        ))}
      </div>
      
      <div className="mt-8 sm:mt-10 md:mt-12 text-right font-serif italic text-lg sm:text-xl md:text-2xl text-romantic-dark">
        <p>Aku tak sadar mengapa tiba-tiba mendambakan dirimu, dikala aku melihatmu tersenyum</p>
        <p className="mt-4">Justine Khalid</p>
      </div>
    </motion.div>
  );
};

export default LoveLetter;