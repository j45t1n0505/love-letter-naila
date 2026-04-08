import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Pause, Play, Volume2, VolumeX } from "lucide-react";
import musicFile1 from "../assets/romantic-music.mp3";
import musicFile2 from "../assets/romantic-music2.mp3";

const MusicPlayer = () => {
  const playlist = [musicFile1, musicFile2];
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef(null);

  // Auto-hide tooltip setelah 5 detik
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Handle ketika lagu selesai diputar
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      const nextTrack = (currentTrack + 1) % playlist.length;
      setCurrentTrack(nextTrack);
      setTimeout(() => {
        audio.play();
      }, 100);
    };

    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, [currentTrack, playlist.length]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
    setShowTooltip(false);
  };

  const toggleMute = () => {
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] flex flex-col items-end gap-2 sm:gap-3">
      <audio ref={audioRef} src={playlist[currentTrack]} />

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-white px-3 py-2 sm:px-4 rounded-full shadow-lg border border-romantic-light text-romantic-dark text-xs sm:text-sm font-medium mb-1"
          >
            Putar musik romantis? ✨
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-2">
        {/* Button Mute/Unmute */}
        <motion.button
          whileHover={{ scale: 1.15, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMute}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-pink-100 text-romantic-dark hover:bg-white transition-all duration-300 hover:shadow-xl hover:border-romantic"
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </motion.button>

        {/* Main Play/Pause Button */}
        <motion.button
          whileHover={{ scale: 1.15, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={togglePlay}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className={`p-4 rounded-full shadow-xl flex items-center justify-center transition-all duration-500 ${
            isPlaying 
            ? "bg-romantic text-white ring-4 ring-pink-100 hover:shadow-2xl hover:ring-pink-200" 
            : "bg-white text-romantic-dark border border-pink-200 hover:border-romantic hover:shadow-lg"
          }`}
        >
          {isPlaying ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Music size={24} />
            </motion.div>
          ) : (
            <Play size={24} fill="currentColor" />
          )}
        </motion.button>
      </div>

      {/* Visualizer Kecil (Opsional) */}
      {isPlaying && (
        <div className="flex gap-1 h-4 items-end px-2">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              animate={{ height: [4, 16, 8, 12, 4] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-1 bg-romantic rounded-full"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;