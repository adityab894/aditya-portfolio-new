import React from "react";
import { motion, useInView } from "framer-motion";

/**
 * TypingEffect animates text as a typing effect, revealing one letter at a time.
 * @param {string} text - The text to animate.
 */
const TypingEffect = ({ text }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref}>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: 0.5 + index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
};

export default TypingEffect;
