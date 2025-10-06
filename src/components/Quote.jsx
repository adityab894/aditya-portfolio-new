import React from "react";
import { motion } from "framer-motion";

const Quote = () => {
  const quoteText =
    "Dedication, perseverance, patience, and focus, are basics to achieve anything ";
  const author = "___By Aditya B";

  // Create multiple copies for seamless loop
  const quotes = Array(3).fill({ text: quoteText, author });

  return (
    <div className="relative w-full overflow-hidden">
      {/* SVG definitions for mask gradients */}
      <svg className="absolute h-0 w-0">
        <defs>
          <linearGradient id="fade-mask" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="35%" stopColor="white" stopOpacity="1" />
            <stop offset="65%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="fade-mask-element">
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#fade-mask)"
            />
          </mask>
        </defs>
      </svg>

      {/* Container for the scrolling quote */}
      <div
        className="relative flex h-16 items-center lg:h-20"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 35%, black 65%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 35%, black 65%, transparent 100%)",
        }}
      >
        {/* Animated quote container */}
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            },
          }}
        >
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="quote inline-flex items-center px-8 lg:text-2xl"
            >
              <span>{quote.text}</span>
              <span className="ml-2 text-sm lg:text-base">{quote.author}</span>
              {/* Separator between quotes */}
              {index < quotes.length - 1 && (
                <span className="mx-8 text-gray-400">•</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Quote;
