import React from "react";
import { motion } from "framer-motion";

const FunFacts = () => {
  const funfacts = [
    "A cup of coffee is a ticket to heaven",
    "Speak English, Hindi, and Marathi(Basic)",
    "Likes to explore tech",
    "Ready to take on a challenge",
    "Loves Community Building ",
    "Loves guiding and Mentoring students",
  ];

  const getRandomInitial = () => {
    const directions = [
      { x: -200, y: 0 },
      { x: 200, y: 0 },
      { x: 0, y: -200 },
      { x: 0, y: 200 },
      { x: -200, y: -200 },
      { x: 200, y: -200 },
      { x: -200, y: 200 },
      { x: 200, y: 200 },
    ];
    return directions[Math.floor(Math.random() * directions.length)];
  };

  const getRandomDuration = () => 1.5 + Math.random();
  const getRandomOscillationDuration = () => 1.5 + Math.random() * 2;
  const getRandomDelay = () => Math.random() * 0.5;

  return (
    <div className="flex flex-wrap justify-center">
      {funfacts.map((funfact, index) => {
        const initial = getRandomInitial();
        const entranceDuration = getRandomDuration();
        const oscillationDuration = getRandomOscillationDuration();
        const oscillationDelay = getRandomDelay();

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, ...initial }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              transition: {
                duration: entranceDuration,
                ease: "easeOut",
              },
            }}
            viewport={{ once: true }}
            className="mt-2 mr-2 inline-flex text-base/10 last:mr-0"
          >
            {/* Nested motion.div ONLY for oscillation */}
            <motion.div
              animate={{
                y: [-5, 5, -5],
              }}
              transition={{
                y: {
                  duration: oscillationDuration,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: entranceDuration + oscillationDelay,
                },
              }}
              className="dark:border-primary-3 border-2ndry-2 border-1 px-2"
            >
              <p>{funfact}</p>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FunFacts;
