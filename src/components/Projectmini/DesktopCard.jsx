import React, { useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ANIMATION_CONFIG = { duration: 0.5, ease: "easeInOut" };

const DesktopCard = ({ project, isHovered, onMouseMove }) => {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback(
    (e) => {
      if (!cardRef.current || !isHovered) return;
      onMouseMove(e);
    },
    [isHovered, onMouseMove],
  );

  return (
    <AnimatePresence mode="wait">
      {isHovered ? (
        <motion.div
          ref={cardRef}
          key="hover"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            height: ANIMATION_CONFIG,
            opacity: ANIMATION_CONFIG,
          }}
          style={{ position: "relative" }}
          className="cursor-none"
          onMouseMove={handleMouseMove}
        >
          <div className="notification">
            <div className="notiglow"></div>
            <div className="notiborderglow"></div>
            <div className="notititle texthilit1 text-center">
              {project.title}
            </div>
            <div className="categories">
              {project.softUsed.map((tech, index) => (
                <span
                  key={index}
                  className="text-primary2 dark:text-2ndry-1 ml-2 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="default"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            height: { duration: 1, ease: "easeInOut" },
            opacity: { duration: 1, ease: "easeInOut" },
          }}
          style={{ overflow: "hidden" }}
        >
          <div className="bg-2ndry-2/10 dark:bg-primary-4/30 relative isolate my-8 flex flex-col items-center overflow-hidden rounded-xl shadow-xl/20 backdrop-blur-2xl [unicode-bidi:isolate]">
            <div className="relative w-full py-6 pr-4 pl-12 before:absolute before:left-6 before:z-[10] before:h-4/5 before:w-1 before:bg-[#373c3d] before:content-['']">
              <p className="whitespace-pre-wrap [&:not(:first-child)]:mt-3">
                <span className="block text-center font-bold">
                  {project.title}
                </span>{" "}
                <span className="text-primary-3 dark:text-primary-5">
                  {project.description}
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DesktopCard;
