import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

export const useScrollIntoView = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return { ref, isInView };
};
