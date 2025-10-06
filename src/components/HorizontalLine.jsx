import React from "react";
import { motion } from "framer-motion";
import "./css/HorizontalLine.css";

const HorizontalLine = ({ delay }) => {
  return (
    <div>
      <motion.div
        className="bg-lhilit-1 dark:bg-dhilit-1 relative h-1 sm:w-auto"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ delay: delay, duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.5 }} // once: true means animate only first time in view
        style={{ overflow: "hidden" }}
      >
        <div className="line1 dark:bg-primary bg-2ndry-1 absolute h-1 w-2"></div>
        <div className="line2 dark:bg-primary bg-2ndry-1 absolute h-1 w-1"></div>
      </motion.div>
    </div>
  );
};

export default HorizontalLine;
