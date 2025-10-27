import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import tate from "./New video.mp4";
import "./Intro.css";

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
                <span data-aos="fade-right">Pranshu Yadav</span>
              </div>
              <div className="title-background">
                <span className="mask-wrap">
                  <span className="mask" data-aos="fade-right">Pranshu </span>
                </span>
                <span className="mask-wrap">
                  <span className="mask" data-aos="fade-right">Yadav</span>
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
                      Yadav
                    </span>
                  </span>
                </h1>
                <button className="hiremebtn" onClick={() => navigate("/home")} data-aos="fade-right">
                  View gallery
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


