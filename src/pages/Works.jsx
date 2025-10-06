import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../components/Footer";
import TitlesS from "../components/TitlesSlash";
import Titles from "../components/TitlesOther";
import Projectmini from "../components/Projectmini/Projectmini";
import { fullstack, frontend } from "../components/Projectmini/ProjectData";
import MouseHover from "../components/MouseHover";

const Works = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isImageVisible, setIsImageVisible] = useState(false);
  const animationFrameRef = useRef(null);
  const targetPosition = useRef({ x: 0, y: 0 });

  // Handle mouse move for cursor tracking
  const handleMouseMove = useCallback(
    (e) => {
      targetPosition.current = {
        x: e.clientX,
        y: e.clientY,
      };

      if (!isImageVisible) {
        setCursorPosition(targetPosition.current);
        setIsImageVisible(true);
      }
    },
    [isImageVisible],
  );

  // Animation loop for smooth cursor following
  useEffect(() => {
    if (!hoveredProject || !isImageVisible) return;

    const animate = () => {
      setCursorPosition((prev) => {
        const dx = targetPosition.current.x - prev.x;
        const dy = targetPosition.current.y - prev.y;
        const ease = 0.2;

        return {
          x: prev.x + dx * ease,
          y: prev.y + dy * ease,
        };
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [hoveredProject, isImageVisible]);

  // Reset when hover ends
  useEffect(() => {
    if (!hoveredProject) {
      setIsImageVisible(false);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }
  }, [hoveredProject]);

  const container = (delay) => ({
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  const currentProject = fullstack.find((p) => p.id === hoveredProject);

  return (
    <>
      <div className="fixed inset-0 z-[-2] bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      {/* Main content wrapper */}
      <div className="relative z-0"></div>
      <MouseHover />
      <Navbar />
      <div className="mycontainer">
        <TitlesS htitle="works" />
        <motion.p variants={container(0.5)} initial="hidden" animate="visible">
          All my works ...
        </motion.p>
        <div className="fullstack">
          <section className="headsectdiv">
            <Titles htitle="fullstack" />
          </section>
          <Projectmini title="fullstack" projects={fullstack} />
        </div>
        <div className="frontend">
          <section className="headsectdiv">
            <Titles htitle="frontend" />
          </section>
          <Projectmini title="frontend" projects={frontend} />
        </div>
        <hr />
        <br />
        <Footer />
      </div>
      &nbsp;
      <br />
      &nbsp;
    </>
  );
};

export default Works;
