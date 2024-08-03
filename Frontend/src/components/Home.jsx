import React, { useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import myImage from "../assets/images/myImage.JPG";
import Typed from "typed.js";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [isHovering, setHovering] = useState(false);
  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Kaushal", "Web developer", "Student", "Fresher"],
      typeSpeed: 90,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    gsap.to("#navbar", {
      background: "#000",
      height: "72px",
      duration: 0.2,
      scrollTrigger: {
        trigger: "#navbar",
        start: "top 0%",
        end: "top -11%",
        scrub: 0.3,
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

    window.addEventListener("mousemove", (e) => {
      const cursor = document.getElementById("cursor");
      cursor.style.display = "block";
      cursor.style.left = e.x + "px";
      cursor.style.top = e.y + "px";
    });
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${myImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className="w-full fixed h-20 flex items-center justify-between px-8 z-50"
        id="navbar"
      >
        <div className="text-white text-2xl font-semibold tracking-wide flex">
          {["K", "a", "u", "s", "h", "a", "l"].map((item, index) => (
            <motion.div
              key={index} // Add key to avoid React warnings
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

      <div
        id="cursor"
        className="h-32 w-32 bg-[#95C11E] fixed rounded-full -translate-x-1/2 -translate-y-1/2 blur-[80px] hidden"
      ></div>

      <div className="z-40" id="main">
        <div className="page1 px-10 pt-32 flex items-center justify-between h-screen">
          <div className="w-96 backdrop-blur-xl rounded-xl p-4">
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
                  className="hovering flex items-center text-6xl justify-center text-[#95c11e] font-semibold tracking-tight h-40 relative"
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
        <div className="page2 h-screen text-white">
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
        <div className="page3"></div>
      </div>
    </>
  );
}

export default Home;
