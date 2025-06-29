import "../App.css";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaVolleyballBall } from "react-icons/fa";
import { FcSettings } from "react-icons/fc";
import Typewriter from "react-ts-typewriter";
import { useState ,useEffect} from "react";
import Resume1 from "../../src/pranshu yadav.pdf";
import { useNavigate } from "react-router-dom";
function Top() {
  const [clicked, isClicked] = useState(false);
  const [set, isset] = useState(true);
const navigate = useNavigate();
  useEffect(() => {
    
  }, []);
  function setColor (newColor){
    document.documentElement.style.setProperty('--fc--green', newColor);
}
function finc (e){
  document.documentElement.style.setProperty('font-size', e);
}
function rtl1 (e){
  document.documentElement.style.setProperty('direction', e);
}



  return (
    <>
     <div id="minicircle"></div>
      <div className={set ? "bar" : "bar1"}>

        <img
          src="https://res.cloudinary.com/dpiatasuq/image/upload/v1750786235/IMG_4445_ry3svl.jpg"
          alt="lady" className="luffy"
        />
        <div className="bar-title" onClick={()=> navigate("/intro")}>Pranshu Yadav</div>
        <ul className="nav-items">
          <li>
            <a href="#top-section1">Home</a>
          </li>
          <li>
            <a href="#about-me1">About Me</a>
          </li>
          <li>
            <a href="#services1">What I Do</a>
          </li>
          <li>
            <a href="#resume1">Resume</a>
          </li>
          <li>
            <a href="#portfol1">Portfolio</a>
          </li>
          
          <li>
            <a href="#contact1">Contact</a>
          </li>
        </ul>
        <div class="nav-icon">
         <a href="https://www.linkedin.com/in/pranshu-yadav-086b28192/"><FaLinkedinIn className="icon" /></a>
         <a href="https://github.com/pranshu002y"> <FaGithub className="icon" /></a>
          <a href="https://www.instagram.com/pranshu_yadav15/"><FaVolleyballBall className="icon" /></a>
        </div>
      </div>
      
      <div className={clicked ? "star" : "star1"}>
        <button
          className="starstar"
          onClick={() => {
            isClicked(!clicked);
          }}
        >
          <FcSettings className="set1" />
        </button>
        <div className="star-item-icon">
          <ul className="side-list">
            <li onClick={()=>rtl1("rtl")}>Rtl</li>
            <li onClick={() => isset(!set)}>dark Mode</li>
            <li >seamless</li>
            <li onClick={()=>finc("20px")}>A+</li>
            <li onClick={()=>finc("10px")}>A-</li>
            <li>
              theme
              <ul className="theme_color">
                <div className="tc1">
                <div onClick={() => setColor('orange')} className="circle" style={{backgroundColor:"orange"}}></div>
                <div onClick={() => setColor('yellow')} className="circle" style={{backgroundColor:"yellow"}}></div>
                <div onClick={() => setColor('red')} className="circle" style={{backgroundColor:"red"}}></div>
                </div>
                <div className="tc1">
                <div onClick={() => setColor('green')} className="circle" style={{backgroundColor:"green"}}></div>
                <div onClick={() => setColor('pink')} className="circle" style={{backgroundColor:"pink"}}></div>
                <div onClick={() => setColor('aqua')} className="circle" style={{backgroundColor:"aqua"}}></div>
                </div>

              </ul>
            </li>
            <li onClick={()=>{finc("16px");setColor("green")}}>Reset</li>
          </ul>
        </div>
      </div>
      
      <div className="hireme">
      <button className="ham">🍔</button>

        <div className="hire-mid hire-one">Hey!</div>
        <div className="hire-mid hire-two">
          <Typewriter
            text={"I'm a Full-Stack Developer"}
            speed={100}
            loop={true}
          />
        </div>
        <div className="hire-mid hire-three">Gurgaon, India.</div>
        <a href={Resume1}><button className="hiremebtn">Hire Me</button></a>
      </div>
    </>
  );
}

export default Top;
