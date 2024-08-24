import React, { useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import myImage from "../assets/images/myImage.JPG";
import Typed from "typed.js";
import eduvideo from "../assets/videos/education.mp4";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
function Home() {
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
    window.scrollTo({ top: 0, behaviour: "smooth" });

    gsap.to("#navbar", {
      background: "#000",
      height: "60px",
      duration: 0.2,
      scrollTrigger: {
        trigger: "#navbar",
        scroller: "body",
        start: "top 26%",
        end: "top 19%",
        scrub: 0.3,
      },
    });
    gsap.to("#main", {
      background: "#000",
      duration: 0.2,
      scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top 22%",
        end: "top -8%",
        scrub: 0.6,
      },
    });

    var elems = document.querySelectorAll(".elem");

    elems.forEach(function (val) {
      val.addEventListener("mouseenter", function () {
        val.childNodes[1].style.display = "flex";
      });
      val.addEventListener("mouseleave", function () {
        val.childNodes[1].style.display = "none";
      });
      val.addEventListener("mousemove", function (e) {
        val.childNodes[1].style.left = e.clientX + "px";
      });
    });
  }, []);

  return (
    <>
      <motion.div
        initial={{ rotate: "2deg", scale: 0.8, borderRadius: "8%" }}
        animate={{ rotate: "0deg", scale: 1, borderRadius: "0px" }}
        transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        className="h-full w-full overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1502139214982-d0ad755818d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className=""
          />
        </div>
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
                className="fontchange tracking-wider"
              >
                {item}
              </motion.div>
            ))}
          </div>
          <div className="text-white flex text-xl font-semibold tracking-tight gap-12">
            {["Home", "Projects", "Contact"].map((item, index) => (
              <div
                key={index}
                className="hover_animate w-full relative cursor-pointer"
              >
                <Link to={`${item.toLowerCase()}`}>{item}</Link>
              </div>
            ))}
          </div>
        </div>

        <div id="main" className="relative">
          <div
            className="page1 h-screen px-12 flex items-center justify-between overflow-hidden"
            id="page1"
          >
            <div>
              <div className="w-96 backdrop-blur-xl px-2 py-4 border-[1px] border-zinc-600/30 rounded-xl">
                <h1 className="text-4xl font-semibold border-b-2 border-zinc-400/20 text-sky-300/50">
                  Hello there!
                </h1>
                <h1 className="pt-4 text-3xl font-semibold whitespace-nowrap tracking-tight text-zinc-300/90">
                  Welcome to my Portfolio!
                </h1>
                <div className="text-zinc-400 pt-4">
                  <h1 className="text-3xl">I am,</h1>
                  <div className="text-2xl pt-2">
                    <span ref={el} />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-72 w-72 overflow-hidden">
              <div className="animate_border_ring h-full w-full relative overflow-hidden">
                <img
                  src={myImage}
                  alt=""
                  className="h-full w-full object-cover object-top select-none rounded-full p-10"
                />
              </div>
            </div>
          </div>

          <div className="page2 text-white mb-20">
            <div className="w-full overflow-hidden whitespace-nowrap flex text-[120px]">
              <motion.h1
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="marquee_text pl-4"
              >
                Namaste I am Kaushal
              </motion.h1>
              <motion.h1
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="marquee_text pl-4"
              >
                Namaste I am Kaushal
              </motion.h1>
              <motion.h1
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="marquee_text pl-4"
              >
                Namaste I am Kaushal
              </motion.h1>
              <motion.h1
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="marquee_text pl-4"
              >
                Namaste I am Kaushal
              </motion.h1>
              <motion.h1
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="marquee_text pl-4"
              >
                Namaste I am Kaushal
              </motion.h1>
            </div>
          </div>
          <div
            className="page3 flex items-center justify-center h-screen w-full mt-32"
            id="page3"
          >
            <div className="h-full w-full text-4xl bg-[url('https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-top">
              <div className="elem h-[20%] w-full border-b-2 border-t-2 border-white flex items-center justify-start relative">
                <h1 className="text-[#fff] px-4">R</h1>
                <div className="h-32 w-32 border-2 rounded-full border-[#95c11e] items-center justify-center text-sky-600 absolute hidden select-none cursor-pointer">
                  ISE
                </div>
              </div>
              <div className="elem h-[20%] w-full border-b-2 border-white flex items-center justify-start relative">
                <h1 className="text-[#fff] px-3">I</h1>
                <div className="h-32 w-32 border-2 rounded-full border-[#95c11e] items-center justify-center text-sky-600 absolute hidden select-none cursor-pointer">
                  NSPIRE
                </div>
              </div>
              <div className="elem h-[20%] w-full border-b-2 border-white flex items-center justify-start relative">
                <h1 className="text-[#fff] px-3">S</h1>
                <div className="h-32 w-32 border-2 rounded-full border-[#95c11e]  items-center justify-center text-sky-600 absolute hidden select-none cursor-pointer">
                  OUR
                </div>
              </div>
              <div className="elem h-[20%] w-full border-b-2 border-white flex items-center justify-start relative">
                <h1 className="text-[#fff] px-3">E</h1>
                <div className="h-32 w-32 border-2 rounded-full border-[#95c11e]  items-center justify-center text-sky-600 absolute hidden select-none cursor-pointer">
                  ARN
                </div>
              </div>
            </div>
          </div>

          <div className="page4 h-screen overflow-hidden" id="page4">
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
              <div className="relative text-5xl font-semibold tracking-wider text-center text-[#95c11e] cursor-pointer mt-32">
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
                      <li>SLC taken at Capital College</li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Home;
