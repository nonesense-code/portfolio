import React, { useEffect, useState } from "react";
import { easeInOut, easeOut, motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import myImage from "../assets/images/myImage.JPG";
import Project1 from "../assets/images/Project1.png";
import Project2 from "../assets/images/Project2.png";
import Typed from "typed.js";
import eduvideo from "../assets/videos/education.mp4";
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [isHovering, setHovering] = useState(false);
  const [isBgVisible, setBgVisible] = useState(false);
  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Kaushal", "Web developer", "Student", "Freelancer"],
      typeSpeed: 90,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    // window.scrollTo({ top: 0, behaviour: "smooth" });
    gsap.to("#navbar", {
      background: "#000",
      height: "60px",
      duration: 0.2,
      scrollTrigger: {
        trigger: "#navbar",
        start: "top 0%",
        end: "top -11%",
        scrub: 0.6,
      },
    });

    gsap.to("#main", {
      backgroundColor: "#000",
      scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -20%",
        end: "top -40%",
        scrub: 0.4,
      },
    });

    ScrollTrigger.create({
      trigger: "#page1",
      start: "top center",
      end: "bottom center",
      onEnter: () => setBgVisible(true), // Show background image
      onLeave: () => setBgVisible(false), // Hide background image
      onEnterBack: () => setBgVisible(true), // Show background image
      onLeaveBack: () => setBgVisible(false), // Hide background image
    });
  }, []);

  return (
    <>
      {/* Conditional rendering for background image */}
      {isBgVisible ? (
        <div
          className="fixed inset-0 -z-10"
          style={{
            backgroundImage: `url(${myImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      ) : (
        <div className="fixed inset-0 -z-10 bg-black"></div>
      )}
      <div
        className="w-full fixed h-20 flex items-center justify-between px-8 z-50"
        id="navbar"
      >
        <div className="text-white text-2xl font-semibold tracking-wide flex">
          {["K", "a", "u", "s", "h", "a", "l"].map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: "80%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: index * 0.04,
                ease: easeInOut,
              }}
            >
              {item}
            </motion.div>
          ))}
        </div>
        <div></div>
      </div>

      <div className="z-40" id="main">
        <div
          className="page1 px-10 pt-32 flex items-center justify-between h-screen"
          id="page1"
        >
          <div className="w-96 backdrop-blur-xl p-4 border-[1px] border-zinc-600/30 rounded-xl">
            <h1 className="text-4xl font-semibold border-b-2 border-zinc-400/20 text-sky-300/50">
              Hello there!
            </h1>
            <h1 className="pt-4 text-3xl font-semibold whitespace-nowrap tracking-tight text-zinc-300/90">
              Welcome to my Portfolio 👋🏼
            </h1>
            <div className="text-zinc-400 pt-4">
              <h1 className="text-3xl">I am,</h1>
              <div className="text-2xl pt-2">
                <span ref={el} />
              </div>
            </div>
          </div>
          <div className="w-96 backdrop-blur-sm rounded-xl p-4">
            <div>
              {!isHovering ? (
                <div
                  onMouseEnter={() => {
                    setHovering(true);
                  }}
                  className="hovering flex items-center text-6xl justify-center font-semibold tracking-tight h-40 relative"
                >
                  Hover me
                </div>
              ) : (
                <div
                  onMouseLeave={() => {
                    setHovering(false);
                  }}
                  className="h-40 w-full"
                >
                  <img
                    src="https://t3.ftcdn.net/jpg/06/05/92/12/360_F_605921203_pjFlIiOTdIthn36WU0uAMdkXogyxZPkQ.jpg"
                    alt=""
                    className="rounded-xl h-full w-full object-cover border-4 border-stone-400/30"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="page2 text-white mb-20">
          <div className="w-full overflow-hidden whitespace-nowrap flex text-[120px]">
            <motion.h1
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="marquee_text pl-4"
            >
              Namaste I am Kaushal
            </motion.h1>
            <motion.h1
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="marquee_text pl-4"
            >
              Namaste I am Kaushal
            </motion.h1>
            <motion.h1
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="marquee_text pl-4"
            >
              Namaste I am Kaushal
            </motion.h1>
            <motion.h1
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="marquee_text pl-4"
            >
              Namaste I am Kaushal
            </motion.h1>
          </div>
        </div>
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
        <div className="page4 h-screen overflow-hidden mt-32" id="page4">
          <div
            className="absolute rounded-t-2xl overflow-hidden"
            id="bookvideo"
          >
            <video
              className="brightness-[40%] blur-sm"
              src={eduvideo}
              loop
              muted
              autoPlay
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="text-black relative py-10 p-8 flex items-center justify-center flex-col">
            <div className="relative text-5xl font-semibold tracking-wider mt-12 text-center text-[#95c11e] cursor-pointer">
              <h1 className="edu_animate">Education</h1>
            </div>
            <div
              className="edu_details flex items-center justify-evenly w-full pt-24"
              id="eds"
            >
              <div className="flex flex-col items-center justify-center gap-6 h-96 w-96 px-8 py-2 text-blue-400 font-semibold backdrop-blur-sm text-2xl">
                <div className="text-4xl font-semibold tracking-wide cursor-pointer text-stone-400">
                  Online Education
                </div>
                <div>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-6 h-96 w-96 px-8 py-2 text-blue-400 font-semibold backdrop-blur-sm text-2xl">
                <div className="text-4xl font-semibold tracking-wide cursor-pointer text-stone-400">
                  School Level
                </div>
                <div>
                  <ul>
                    <li className="whitespace-nowrap">
                      Completed SEE with certificate
                    </li>
                    <li>SLC taken at Capital College, Kathmandu.</li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
