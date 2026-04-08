import { motion } from "framer-motion";

const Notes = () => {
  const notes = [
    { text: "Aku sayang kamu ❤️", color: "bg-yellow-100", rotate: "-rotate-3" },
    { text: "Kamu adalah rumahku 🏠", color: "bg-blue-100", rotate: "rotate-6" },
    { text: "Terima kasih sudah hadir ✨", color: "bg-pink-100", rotate: "-rotate-6" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

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
      className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 my-12 sm:my-16 md:my-20 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {notes.map((note, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          whileHover={{ 
            scale: 1.12, 
            zIndex: 50, 
            boxShadow: "0 20px 40px -5px rgba(219, 39, 119, 0.3)", 
            rotate: 0,
            y: -10,
            transition: { type: "spring", stiffness: 300, damping: 15 }
          }}
          className={`${note.color} ${note.rotate} p-4 sm:p-6 shadow-lg w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center text-center font-serif italic text-base sm:text-lg md:text-xl text-gray-700 border-b-4 border-black/10 cursor-pointer transition-all duration-300 hover:shadow-xl`}
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="block"
          >
            {note.text}
          </motion.span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Notes;