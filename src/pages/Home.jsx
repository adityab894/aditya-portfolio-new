"use client";

import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/aditya.png";
import image2 from "../assets/aditya.png";
import Titles from "../components/TitlesHome";
import "../styles/Home.css";
import ContactMini from "../components/ContactMini";
import SkillFront from "../components/SkillsFront";
import Dot from "../assets/Dots.svg";
import Footer from "../components/Footer";
import "../styles/ButtonAnimation.css";
import Projectmini from "../components/Projectmini/Projectmini";
import Navbar from "../Navbar";
import AboutMini from "../components/AboutMini";
import Quote from "../components/Quote";
import { motion, useInView } from "framer-motion";
import MouseHover from "../components/MouseHover";

// TypingEffect Component
function TypingEffect({ text = " web developer" }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className="texthilit1">
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: 2 + index * 0.3 }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
}

const Home = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });
  const container2 = (delay) => ({
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <>
      <div className="fixed inset-0 z-[-2] bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* Main content wrapper */}
      <div className="relative z-0"></div>
      <MouseHover />
      <Navbar />
      <div className="mycontainer">
        <header className="">
          <div className="grid-col-2 grid items-center md:flex">
            <div className="relative pb-10 text-wrap">
              <div className="allow-select">
                <motion.h1
                  variants={container(0.5)}
                  initial="hidden"
                  animate="visible"
                  className="head1"
                >
                  Hey, I'm Aditya Bisht, an intuitive
                </motion.h1>
                <div className="head1">
                  <TypingEffect text=" web developer" />
                </div>
                <motion.h4
                  variants={container(0.7)}
                  initial="hidden"
                  animate="visible"
                  className="head4"
                >
                  who develops responsive and interactive websites that are
                  coherent to your needs.
                </motion.h4>
              </div>
              <motion.p
                variants={container(0.9)}
                initial="hidden"
                animate="visible"
                className="dark:text-2ndry-2 text-primary-2 allow-select mr-2 ml-6"
              >
                I specialize in Front End Development and Full Stack (trained in
                MERN stack development).
              </motion.p>
              <motion.p
                variants={container(1.3)}
                initial="hidden"
                animate="visible"
              >
                Let us craft user-friendly websites together!
              </motion.p>
            </div>
            <div className="col-span-1">
              <div className="hidden md:relative md:block">
                <motion.img
                  variants={container2(1.1)}
                  initial="hidden"
                  animate="visible"
                  className="absolute top-0 left-25 size-60 object-contain"
                  id="imgCover2dots"
                  src={Dot}
                  alt="Dot"
                />
                <div className="">
                  <motion.div
                    id="imgCover2"
                    variants={container2(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-lhilit-1 dark:bg-dhilit-1 relative size-60"
                  ></motion.div>
                  <motion.div
                    variants={container2(0.9)}
                    initial="hidden"
                    animate="visible"
                    id="imgCover3"
                    className="bg-2ndry-2 absolute top-0 size-60"
                  ></motion.div>
                  <motion.img
                    variants={container2(0.9)}
                    initial="hidden"
                    animate="visible"
                    className="absolute top-0 left-0 size-60 object-contain"
                    id="imgCover"
                    src={image2}
                    alt="profilepic"
                  />
                  <motion.img
                    variants={container2(0.9)}
                    initial="hidden"
                    animate="visible"
                    className="absolute top-0 left-0 size-60 object-contain"
                    id="imgCoverTp"
                    src={image}
                    alt="profilepic"
                  />
                </div>
              </div>
              <div className="smallimage relative md:hidden">
                <img
                  className="relative top-1 left-1/4 size-40 object-contain"
                  id=""
                  src={image}
                  alt="profilepic2"
                />
              </div>
            </div>
          </div>
        </header>
        <br />
        <br />
        <br />

        <div id="projects ">
          <header className="headsectdiv">
            <Titles htitle="works" />
            <div>
              <motion.button
                className="btn2b right relative left-3/4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, delay: 0.3 },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/projects#projects"
                  className="border-2ndry-2 btn2 border-2 p-1"
                >
                  <span className="spn2">
                    {" "}
                    view
                    <span className="texthilit1 pr-1">&#126;&gt;</span>
                  </span>
                </Link>
              </motion.button>
            </div>
          </header>
          <Projectmini container={container} container2={container2} />
        </div>
        <div id="skills">
          <header className="headsectdiv">
            <Titles htitle="skills" />
            <div className="">
              <motion.button
                className="btn2b right relative left-3/4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, delay: 0.5 },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/about#skillset"
                  className="border-2ndry-2 btn2 border-2 p-1"
                >
                  <span className="spn2">
                    {" "}
                    see
                    <span className="texthilit1 pr-1">&#126;&gt;</span>
                  </span>
                </Link>
              </motion.button>
            </div>
          </header>
          <div>
            <SkillFront container={container} container2={container2} />
          </div>
        </div>
        <div id="aboutme py-5">
          <header className="headsectdiv">
            <Titles htitle="about" />
            <div className="col-span-1"></div>
          </header>
          <AboutMini
            htitle="homeabout"
            container={container}
            container2={container2}
          />
          <div className="contactmebutton relative">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="border-lhilit-1 dark:border-dhilit-1 group relative inline-block border-2 text-sm font-medium"
            >
              <Link to="/about#about" className="size-4">
                <span className="line dark:bg-primary bg-2ndry-1 size-3"></span>
                <div className="dark:bg-primary px-3 py-3"> Read more ...</div>
              </Link>
            </motion.div>
          </div>
          <Quote />
        </div>
        <div id="contact" className="py-10">
          <header className="headsectdiv">
            <Titles htitle="contact" />
          </header>
          <ContactMini container={container} container2={container2} />
        </div>
        <hr />
        <br />
        <Footer />
      </div>
      <br />
    </>
  );
};

export default Home;
