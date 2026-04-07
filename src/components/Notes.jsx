import { motion } from "framer-motion";

const Notes = () => {
  const notes = [
    { text: "Aku sayang kamu ❤️", color: "bg-yellow-100", rotate: "-rotate-3" },
    { text: "Kamu adalah rumahku 🏠", color: "bg-blue-100", rotate: "rotate-6" },
    { text: "Terima kasih sudah hadir ✨", color: "bg-pink-100", rotate: "-rotate-6" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 my-12 sm:my-16 md:my-20 px-4">
      {notes.map((note, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.08, zIndex: 50, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)", rotate: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className={`${note.color} ${note.rotate} p-4 sm:p-6 shadow-lg w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center text-center font-serif italic text-base sm:text-lg md:text-xl text-gray-700 border-b-4 border-black/10 cursor-pointer`}
        >
          {note.text}
        </motion.div>
      ))}
    </div>
  );
};

export default Notes;