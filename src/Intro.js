import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import tate from "./New video.mp4";
import "./Intro.css";

const Intro = () => {
  const navigate = useNavigate();
  const counterRef = useRef(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    AOS.init({
      duration: 2000,
      offset: 100,
    });

    const loaderImages = document.querySelectorAll(".loader-img");
    const progressObj = { value: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "auto";
      },
    });

    // 🔥 Initial setup for ALL images (dynamic)
    loaderImages.forEach((img, index) => {
      gsap.set(img, {
        xPercent: index % 2 === 0 ? -150 : 150,
        scale: index === loaderImages.length - 1 ? 1.2 : 1,
        opacity: 0,
      });
    });

    tl.addLabel("start");

    // Counter animation
    tl.to(
      progressObj,
      {
        value: 100,
        duration: 2.5,
        ease: "power2.inOut",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.innerText = Math.floor(progressObj.value);
          }
        },
      },
      "start"
    );

    // Image reveal animation (automatic based on number of images)
    loaderImages.forEach((img, index) => {
      tl.to(
        img,
        {
          xPercent: 0,
          scale: 1,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        `start+=${0.3 + index * 0.3}`
      );
    });

    // Loader slide up
    tl.to(
      loaderRef.current,
      {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut",
      },
      "start+=2.8"
    );

    // Hero Text Reveal (staggered)
    tl.fromTo(
      ".bg-text span",
      { y: 200, opacity: 0, rotate: 10, transformOrigin: "left top" },
      { y: 0, opacity: 1, rotate: 0, duration: 1.5, stagger: 0.2, ease: "power4.out" },
      "-=0.5"
    );

    // Center Image Reveal
    tl.fromTo(
      ".center-image img",
      { scale: 0.5, opacity: 0, filter: "blur(20px)" },
      { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.5, ease: "power3.out" },
      "-=1.2"
    );

    // Button Reveal
    tl.fromTo(
      ".white-btn",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=1.0"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="slider-content">
      {/* Loader */}
      <div className="loader" ref={loaderRef}>
        <div className="loader-content">
          <div className="loader-logo">PRANSHU YADAV</div>

          <div className="loader-images">
            <img
              src="https://res.cloudinary.com/dpiatasuq/image/upload/v1750786235/IMG_4445_ry3svl.jpg"
              alt="1"
              className="loader-img"
            />

            <img
              src="https://res.cloudinary.com/dpiatasuq/image/upload/v1717596593/Screenshot_Capture_-_2024-06-05_-_19-38-47_mnav2m.png"
              alt="2"
              className="loader-img"
            />

            <img
              src="https://res.cloudinary.com/dpiatasuq/image/upload/v1772405097/Screenshot_Capture_-_2026-02-26_-_02-11-22_kchp3s.png"
              alt="3"
              className="loader-img"
            />

            <img
              src="https://res.cloudinary.com/dpiatasuq/image/upload/v1772405141/Screenshot_Capture_-_2026-03-02_-_04-15-25_vuk7gw.png"
              alt="4"
              className="loader-img"
            />
          </div>

          <div className="loader-counter" ref={counterRef}>
            0
          </div>
        </div>
      </div>

      {/* Background Video */}
      <div className="video-container">
        <video
          className="background-video"
          src={tate}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

    

      <section className="hero">

  <div className="bg-text">
    <div className="text-line" style={{ overflow: "hidden", display: "inline-block", paddingBottom: "10px" }}>
      <span style={{ display: "inline-block", color: "transparent", WebkitTextStroke: "2px #000" }}>PRANSHU</span>
    </div>
    <br/>
    <div className="text-line" style={{ overflow: "hidden", display: "inline-block", paddingBottom: "10px" }}>
      <span style={{ display: "inline-block", color: "transparent", WebkitTextStroke: "2px #000" }}>YADAV</span>
    </div>
  </div>

 

  <div className="center-image">
    {/* <!-- Replace with your image --> */}
    <img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1772405141/Screenshot_Capture_-_2026-03-02_-_04-15-25_vuk7gw.png" alt="Portrait"/>

     <button
                  className="white-btn"
                  onClick={() => navigate("/home")}
                  // Removed AOS to let GSAP handle it
                >
                  View Gallery
                </button>
  </div>

</section> 
    </div>
  );
};

export default Intro;