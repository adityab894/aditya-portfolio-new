import React from "react";

import mongologo from "./Images/mognologo.png";
import expresslogo from "./Images/expresslogo.png";
import reactlogo from "./Images/reactlogo.svg";
import nodelogo from "./Images/nodelogo.png";
import postmanlogo from "./Images/postmanlogo.png";
import tailwindlogo from "./Images/tailwindlogo.png";
import { motion } from "framer-motion";

const SkillsFront = ({ container, container2 }) => {
  // Accept both duration and delay for staggered animation
  const skillanime = (duration, delay) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        delay: delay,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  const logos = [
    {
      tool: "MongoDB",
      image: mongologo,
      tooltip: "MongoDB - NoSQL database used to store application data",
    },
    {
      tool: "Express.js",
      image: expresslogo,
      tooltip: "Express.js - Backend framework used to build APIs",
    },
    {
      tool: "React",
      image: reactlogo,
      tooltip: "React - JavaScript library for building user interfaces",
    },
    {
      tool: "Node.js",
      image: nodelogo,
      tooltip: "Node.js - JavaScript runtime to run backend code",
    },
    {
      tool: "Postman",
      image: postmanlogo,
      tooltip: "Postman - Tool used to test APIs and inspect responses",
    },
    {
      tool: "Tailwind CSS",
      image: tailwindlogo,
      tooltip: "Tailwind CSS - Utility-first CSS framework for styling UIs",
    },
  ];

  return (
    <>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -150 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6"
      >
        {logos.map((logo, index) => (
          <motion.section
            key={index}
            variants={skillanime(2 + index * 0.7)}
            initial="initial"
            animate="animate"
            className="skillLogo"
          >
            <div className="group relative">
              <img
                src={logo.image}
                alt={logo.tool}
                className="hover:bg-primary-3 rounded-md"
              />
              {/* Tooltip */}
              <div className="dark:border-primary-3 dark:bg-primary-2 border-2ndry-2 bg-2ndry-1 dark:text-2ndry-1 text-primary-2 invisible absolute bottom-full left-1/2 z-10 mb-2 w-max max-w-[200px] -translate-x-1/2 transform rounded-lg border-1 px-3 py-2 text-center text-sm font-medium opacity-0 shadow-lg transition-opacity duration-300 group-hover:visible group-hover:opacity-100">
                {logo.tooltip}
              </div>
            </div>
          </motion.section>
        ))}
      </motion.div>
    </>
  );
};

export default SkillsFront;
