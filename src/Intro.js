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

    loaderImages.forEach((img, index) => {
      gsap.set(img, {
        xPercent: index % 2 === 0 ? -150 : 150,
        opacity: 0,
      });
    });

    tl.addLabel("start");

    tl.to(progressObj, {
      value: 100,
      duration: 2.5,
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.innerText = Math.floor(progressObj.value);
        }
      },
    });

    loaderImages.forEach((img, index) => {
      tl.to(
        img,
        {
          xPercent: 0,
          opacity: 1,
          duration: 0.7,
        },
        `start+=${0.3 + index * 0.3}`
      );
    });

    tl.to(
      loaderRef.current,
      {
        yPercent: -100,
        duration: 1.2,
      },
      "start+=2.8"
    );

    return () => tl.kill();
  }, []);

  return (
    <div className="slider-content">
      {/* Loader */}
      <div className="loader" ref={loaderRef}>
        <div className="loader-content">
          <div className="loader-logo">PRANSHU YADAV</div>

          <div className="loader-images">
            <img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1750786235/IMG_4445_ry3svl.jpg" className="loader-img" />
            <img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1717596593/Screenshot_Capture_-_2024-06-05_-_19-38-47_mnav2m.png" className="loader-img" />
            <img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1772405097/Screenshot_Capture_-_2026-02-26_-_02-11-22_kchp3s.png" className="loader-img" />
            <img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1772405141/Screenshot_Capture_-_2026-03-02_-_04-15-25_vuk7gw.png" className="loader-img" />
          </div>

          <div className="loader-counter" ref={counterRef}>0</div>
        </div>
      </div>

      {/* Background Video */}
      <div className="video-container">
        <video className="background-video" src={tate} autoPlay loop muted playsInline />
      </div>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          {/* Rings */}
          <div className="ring ring1"></div>
          <div className="ring ring2"></div>
          <div className="ring ring3"></div>

          {/* Orbits */}
          <div className="orbit orbit1">
            <div className="label">Frontend Developer</div>
          </div>

          <div className="orbit orbit2">
            
            <div className="label" style={{ transform: "rotate(240deg) translateY(-125px) rotate(-240deg)" }}>
              Web Designer
            </div>
          </div>

          <div className="orbit orbit3">
            
            <div className="label highlight" style={{ transform: "rotate(140deg) translateY(-175px) rotate(-140deg)" }}>
            Full Stack Developer
            </div>
          
          </div>
        </div>

        {/* BIG BACK TEXT */}
        <div className="bg-text">
          PRANSHU<br />YADAV
        </div>

        {/* ✅ CENTER IMAGE FIXED */}
        <div className="center-image">
          <img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1772405141/Screenshot_Capture_-_2026-03-02_-_04-15-25_vuk7gw.png" />

          <button
            className="white-btn"
            onClick={() => navigate("/home")}
          >
            View Gallery
          </button>
        </div>
      </section>
    </div>
  );
};

export default Intro;