import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import tate from "./New video.mp4";
import "./Intro.css";
import DecryptedText from './Component/DecryptedText';

const Intro = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
     
      duration: 2000, 
      offset: 100, 
    });
    AOS.refresh(); 
  }, []);

  return (
    <div onClick={() => navigate("/home")} className="slider-content">
      <div className="video-container">
        <video className="background-video" src={tate} autoPlay loop muted />
      </div>
      <div className="slider-wrapper" >
        <div className="slider-container" >
          <div className="slide active red" data-order="1">
            <div className="fake-bg red"></div>
            <div className="slide-content" >
              <div className="image-caption">
                <span className="line"></span>
                
                <span data-aos="fade-right"> Pranshu Yadav</span>
              </div>
              <div className="title-background">
                <span className="mask-wrap">
                  <span className="mask" data-aos="fade-right"> Pranshu </span>
                </span>
                <span className="mask-wrap">
                  <span className="mask" data-aos="fade-right"> Yadav</span>
                </span>
              </div>
              <div className="title-wrapper">
                <h1>
                  <span className="mask-wrap">
                    <span
                      className="mask"
                      data-aos="fade-right"
                    >
                      Pranshu
                    </span>
                  </span>
                  <span className="mask-wrap">
                    <span
                      className="mask"
                      data-aos="fade-right"
                    >
                         <DecryptedText
  texts={['Yadav', '']}
  mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={1000}
/>
                    </span>
                  </span>
                </h1>
                <button  className="btn btn-pri dwn" onClick={() => navigate("/home")} data-aos="fade-right">
             Launch Site
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


