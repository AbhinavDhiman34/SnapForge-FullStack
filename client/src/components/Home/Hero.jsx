import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navbar from "../Global/Navbar";

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);

  // Intro Animation (SVG mask)
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".febtech-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.inOut",
      transformOrigin: "50% 50%",
    }).to(".febtech-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "expo.inOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          // document.querySelector(".svg")?.remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  }, []);

  // Mousemove Parallax
  useGSAP(() => {
    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;

      gsap.to(".main .text", {
        x: `${xMove * 0.2}%`,
      });

      gsap.to(".sky", { x: xMove });
      gsap.to(".bg", { x: xMove * 1.7 });
    });
  }, [showContent]);

  return (
    <>
      {/* SVG Mask Loader */}

      {!showContent && (
        <div className="svg flex items-center justify-center fixed top-0 left-0 z-[2] w-full h-screen overflow-hidden bg-black">
          <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <mask id="febtechMask">
                <rect width="100%" height="100%" fill="black" />

                <g className="febtech-mask-group">
                  <text
                    x="50%"
                    y="50%"
                    fontSize="200"
                    textAnchor="middle"
                    fill="white"
                    dominantBaseline="middle"
                    fontFamily="Arial Black"
                  >
                    SF
                  </text>
                </g>
              </mask>
            </defs>
            <image
              href="/febbusiness.jpg"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              mask="url(#febtechMask)"
            />
          </svg>
        </div>
      )}

      {/* Main Content */}
      {showContent && (
        <div className="main w-full ">
          <Navbar />
          <div className="pt-8 landing w-full h-screen bg-black relative overflow-hidden">
            {/* Background layers */}
            <div className="imagesdiv relative w-full h-screen">
              <img
                className="absolute sky top-0 scale-[1.4] left-0 w-full h-full object-cover"
                src="/sky.png"
                alt="Sky"
              />
              <img
                className="absolute bg top-0 left-0 w-full scale-[1.1] h-full object-cover"
                src="/bg.png"
                alt="Background"
              />

              {/* Hero Text */}
              <div className="text border-4 border-white rounded-4xl text-white flex flex-col items-center px-10 py-8 gap-4 absolute top-1/2 left-1/2 transform  -translate-y-1/2 shadow-xl max-w-4xl">
                <h1 className="text-[7rem] leading-none font-extrabold">
                  SnapForge
                </h1>
                <h2 className="text-[6rem] leading-tight font-semibold -mt-6">
                  IT Solutions
                </h2>
                <p className="text-lg text-center text-white max-w-2xl">
                  <strong className="block font-semibold mb-2">
                    At SnapForge I.T. Solutions, we specialize in providing the
                    Services Your Business to grow Also We Provide Tools
                    Specialize tools for seo health checker and resume builder
                    and ats score checker
                  </strong>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
                  aliquam nobis iste sed dolorem ad laudantium labore voluptate
                  quidem rerum, voluptates mollitia officia? Recusandae corporis
                  cumque, doloremque iste doloribus deleniti?
                </p>

                <button className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4">
                  READY TO GROW?
                </button>
              </div>

              {/* Foreground Illustration */}
              <img
                className="absolute -bottom-39 -left-30 object-cover h-400  "
                src="/boybg.png"
                alt="Character"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
