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

      {/* Main Content */}
      <div className="slider-wrapper">
        <div className="slider-container">
          <div className="slide active red">
            <div className="fake-bg red"></div>

            <div className="slide-content">
              <div className="image-caption">
                <span className="line"></span>
                <span data-aos="fade-right">Pranshu Yadav</span>
              </div>

              <div className="title-wrapper">
                <h1>
                  <span data-aos="fade-right">Pranshu</span>
                  <br />
                  <span data-aos="fade-right">Yadav</span>
                </h1>

                <button
                  className="btn btn-pri dwn"
                  onClick={() => navigate("/home")}
                  data-aos="fade-right"
                >
                  View Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;