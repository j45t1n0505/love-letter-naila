import { useRef } from 'react';

export const useScrollReveal = () => {
  const ref = useRef(null);

  const scrollVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return { ref, variants: scrollVariants };
};
