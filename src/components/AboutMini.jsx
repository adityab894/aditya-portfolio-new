import React from "react";
import image from "../assets/me.jpg";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const AboutMini = ({ htitle, container, container2 }) => {
  const mern = ["MongoDB", "Express.js", "React.js", "Node.js"];
  const isMobile = useMediaQuery({ maxWidth: 950 });

  return (
    <>
      {htitle !== "homeabout" ? (
        <div className="allow-select text-base md:text-lg">
          <motion.p
            variants={container(0.7)}
            initial="hidden"
            animate="visible"
            className="py-5"
          >
            Hey! You can call me
            <span className="texthilit1"> Adi's</span>!!
          </motion.p>
          <motion.p
            variants={container2(0.9)}
            initial="hidden"
            animate="visible"
            className="relative py-5"
          >
            I'm an <span className="font-bold">aspiring web developer</span>{" "}
            with a strong foundation in the&nbsp;
            <span className="xplain decoration-lhilit-1 dark:decoration-dhilit-1 underline-offset-4 dark:relative dark:underline">
              MERN stack
            </span>
            <span>. </span>
            <div className="hide texthilit1 dark:bg-primary bg-2ndry-1 absolute p-3">
              MERN stands for <span>{mern.join(", ")}</span>
            </div>
            As a recent full-stack development trainee, I'm eager to apply my
            skills to real-world projects and grow into a confident,
            industry-ready developer.
          </motion.p>
          <motion.div
            variants={container2(1.1)}
            initial="hidden"
            animate="visible"
          >
            <img
              className="size-60 object-contain md:float-right"
              src={image}
              alt="profilepic"
            />
          </motion.div>
          <motion.p
            variants={container(1.3)}
            initial="hidden"
            animate="visible"
            className="py-5"
          >
            I love bringing ideas to life through clean, responsive, and
            user-friendly web interfaces. While I've trained across the full
            stack, I'm especially passionate about front-end development and
            creating smooth, engaging user experiences.
          </motion.p>
          <motion.p
            {...(isMobile
              ? {
                  whileInView: { opacity: 1, x: 0 },
                  initial: { opacity: 0, x: -100 },
                  transition: { duration: 0.5 },
                }
              : {
                  variants: container(1.5),
                  initial: "hidden",
                  animate: "visible",
                })}
            className="py-5"
          >
            As a fresher, I'm constantly learning, building side projects, and
            keeping myself updated with the latest trends and tools in web
            development. I'm excited about opportunities where I can learn from
            experienced teams, contribute meaningfully, and sharpen my skills
            every day.
          </motion.p>
          <motion.p
            {...(isMobile
              ? {
                  whileInView: { opacity: 1, x: 0 },
                  initial: { opacity: 0, x: -100 },
                  transition: { duration: 0.5 },
                }
              : {
                  variants: container2(1.9),
                  initial: "hidden",
                  animate: "visible",
                })}
            className="py-5"
          >
            Let's connect and build something awesome together!
          </motion.p>
        </div>
      ) : (
        <div className="allow-select text-base md:text-lg">
          <motion.p
            variants={container(0.9)}
            initial="hidden"
            animate="visible"
            className="py-5"
          >
            Hey! You can call me
            <span className="texthilit1"> Adi's</span>!!
          </motion.p>
          <motion.p
            {...(isMobile
              ? {
                  whileInView: { opacity: 1, x: 0 },
                  initial: { opacity: 0, x: -100 },
                  transition: { duration: 0.5 },
                }
              : {
                  variants: container2(1.1),
                  initial: "hidden",
                  animate: "visible",
                })}
            className="relative py-5"
          >
            I'm an <span className="font-bold">aspiring web developer</span>{" "}
            with a strong foundation in the&nbsp;
            <span className="xplain decoration-lhilit-1 dark:decoration-dhilit-1 relative underline underline-offset-4">
              MERN stack
            </span>
            <div className="hide texthilit1 dark:bg-primary bg-2ndry-1 absolute p-3">
              MERN stands for <span>{mern.join(", ")}</span>
            </div>
            &nbsp;As a recent full-stack development trainee, I'm eager to apply
            my skills to real-world projects and grow into a confident,
            industry-ready developer. While I've trained across the full stack,
            I'm especially passionate about front-end development and creating
            clean, responsive, and engaging user experiences. I'm constantly
            learning, building side projects, and staying updated with the
            latest web development trends. I'm excited to join a team where I
            can contribute, learn from experienced developers, and sharpen my
            skills every day.
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="py-5"
          >
            Let's connect and build something awesome together!
          </motion.p>
        </div>
      )}
    </>
  );
};

export default AboutMini;
