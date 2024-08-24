import React from "react";
import { easeInOut, easeOut, motion } from "framer-motion";
import Project1 from "../assets/images/Project1.png";
import Project2 from "../assets/images/Project2.png";
function Projects() {
  return (
    <>
      <div className="page3 p-8" id="page3">
        <div className="flex flex-col gap-20">
          <div className="cursor-pointer">
            <h1 className="text-white text-center text-6xl uppercase font-extrabold tracking-wide">
              My projects
            </h1>
          </div>
          <div className="flex gap-10 items-center justify-evenly">
            <motion.div
              whileHover={{
                scale: 1.1,
                ease: easeOut,
              }}
              className="w-96"
            >
              <a href="https://techso.vercel.app/" target="_blank">
                <img
                  src={Project1}
                  alt=""
                  className="rounded-xl w-full h-full object-cover object-center"
                />
              </a>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
                ease: easeOut,
              }}
              className="w-96"
            >
              <a
                href="https://portfolio-eight-flax-81.vercel.app/"
                target="_blank"
              >
                <img
                  src="https://images.unsplash.com/photo-1722641277067-a7fba0ad1a59?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="rounded-xl w-full h-full object-cover object-center"
                />
              </a>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
                ease: easeOut,
              }}
              className="w-96"
            >
              <a href="https://tech-cyan-one.vercel.app/" target="_blank">
                <img
                  src={Project2}
                  alt=""
                  className="rounded-xl w-full h-full object-cover object-center"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
