import React from "react";
import { useNavigate } from "react-router-dom";
import tate from "./video-bg.mp4";
import "./Intro.css"
const Intro = ()=>{

const navigate= useNavigate();

    return(
<div className="slider-content">
        <div className="video-container">
  <video className="background-video" src={tate} autoPlay loop muted />
</div>
<div className="slider-wrapper">
  <div className="slider-container">

    
    <div className="slide active red" data-order="1" >

      <div className="fake-bg red"></div>
      
      <div className="slide-content ">
        <div className="image-caption">
          <span className="line"></span>
          <span>Pranshu Yadav</span>

        </div>
        <div className="title-background">
          <span className="mask-wrap">
            <span className="mask">Pranshu </span>
          </span>
          <span className="mask-wrap">
            <span className="mask">Yadav</span>
          </span>
        </div>

        <div className="title-wrapper">
          <h1>
            <span className="mask-wrap">
              <span className="mask">Pranshu</span>
            </span>
            <span className="mask-wrap">
              <span className="mask">Yadav</span>
            </span>
          </h1>
          <span className="gallery" onClick={()=> navigate("/home")}>View gallery</span>
        </div>

      </div>
    </div>

  </div>
</div>

</div>
    )
}
export default Intro;