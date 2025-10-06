import React from "react";
import { motion, useInView } from "framer-motion";
import HorizontalLine from "./HorizontalLine";
import TypingEffect from "../animations/TypingEffect"; // Import the reusable TypingEffect
TypingEffect;

const TitlesHome = ({ htitle }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  // Calculate total typing effect duration
  // TypingEffect: first letter delay 0.5, each letter adds 0.1, each letter animates for 0.2s
  // We'll start the line after the last letter's animation starts (0.5 + (n-1)*0.1), plus its duration (0.2)
  const typingDelay = 0.5 + (htitle.length - 1) * 0.1 + 0.2;

  return (
    <>
      <h2 className="head2" ref={ref}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: 0.4 }}
          className="texthilit1"
        >
          #
        </motion.span>
        <TypingEffect text={htitle} />
      </h2>
      {htitle.toLowerCase() === "contact" ? null : (
        <div className="pt-4 sm:col-span-1 md:col-span-3">
          <HorizontalLine delay={typingDelay} />
        </div>
      )}
    </>
  );
};

export default TitlesHome;
