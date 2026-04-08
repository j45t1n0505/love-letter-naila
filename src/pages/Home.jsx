import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "../components/FloatingHearts";
import Envelope from "../components/Envelope";
import LoveLetter from "../components/LoveLetter";
import PhotoFrame from "../components/PhotoFrame";
import Notes from "../components/Notes";
import MusicPlayer from "../components/MusicPlayer";
import naila1 from "../assets/naila1.jpg";
import naila2 from "../assets/naila2.jpg";

const Home = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
    setTimeout(() => setShowContent(true), 1500);
  };

  const letterContent = "Naila sayang, sejak hari pertama kita bertemu, duniaku terasa berubah warnanya. Kamu bukan sekadar seseorang yang hadir, tapi kamu adalah alasan kenapa aku percaya bahwa keajaiban itu ada. Terima kasih sudah menjadi rumah yang paling nyaman, menjadi pendengar yang paling sabar, dan menjadi cinta yang paling tulus. Aku berjanji untuk selalu menjagamu, tumbuh bersamamu, dan memastikan bahwa di masa depan nanti, hanya ada tawa kita yang menghiasi hari. Kamu adalah anugerah terindah, dan aku sangat mencintaimu.";

  return (
    <div className="min-h-screen bg-romantic-light/30 selection:bg-romantic selection:text-white">
      <FloatingHearts />
      <MusicPlayer />

      {/* Opening Section */}
      <section className="h-screen flex flex-col items-center justify-center px-4 text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, color: "#db2777" }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-romantic-dark mb-3 sm:mb-4 px-2 cursor-pointer"
        >
          Untuk Naila ❤️
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.02, color: "#d1556a" }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-light mb-8 sm:mb-10 md:mb-12 px-2 cursor-pointer"
        >
          Sebuah surat kecil dari seseorang yang sangat mencintaimu
        </motion.p>

        <Envelope isOpen={isOpened} onClick={handleOpen} />
      </section>

      {/* Main Content Section */}
      <AnimatePresence>
        {showContent && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pb-10 sm:pb-16 md:pb-20 px-3 sm:px-4 md:px-6"
          >
            <LoveLetter text={letterContent} />
            <PhotoFrame src={[naila1, naila2]} />
            <Notes />
            
            {/* Instagram Links */}
            <div className="mt-10 sm:mt-12 md:mt-14 text-center">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-sm sm:text-base text-gray-500 mb-4"
              >
                Follow kami di Instagram:
              </motion.p>
              <div className="flex justify-center gap-6 sm:gap-8 flex-wrap">
                <motion.a 
                  href="https://www.instagram.com/j45t1n/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: "#db2777" }}
                  className="text-gray-600 hover:text-romantic-dark text-sm sm:text-base font-medium transition-colors"
                >
                  @j45t1n
                </motion.a>
                <motion.a 
                  href="https://www.instagram.com/n4i1llastecu_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: "#db2777" }}
                  className="text-gray-600 hover:text-romantic-dark text-sm sm:text-base font-medium transition-colors"
                >
                  @n4i1llastecu_
                </motion.a>
              </div>
            </div>
            
            <footer className="mt-12 sm:mt-16 md:mt-20 text-center border-t border-pink-200 pt-8 sm:pt-10 px-4">
              <motion.p 
                className="font-serif italic text-romantic-dark text-base sm:text-lg md:text-xl cursor-pointer"
                whileHover={{ scale: 1.02, color: "#db2777" }}
              >
                "Untuk Naila, dengan cinta yang tidak akan pernah habis ❤️"
              </motion.p>
              <motion.p 
                className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-400 cursor-pointer"
                whileHover={{ scale: 1.05, color: "#db2777" }}
              >
                © 2026 Justine Khalid
              </motion.p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;