import React from 'react'
import '../App.css'
import Resume1 from "../Component/Pranshu Yadav.pdf"
import Counter from './Counter';
import "../Profilecard.css";

function Aboutme() {
  return (
    <>
      <div className='title'>
        <div className='title-behind'>About Me</div>
        <div className='title-front'>KNOW ME MORE</div>
      </div>
      <div className='about'>
        <div className='about-left' data-aos="zoom-out">
          <div className='about-left-title'>I'm <span class="tp">Pranshu Yadav,</span> Full Stack Developer</div>
          <p className='about-left-content'>
            I help you build brand for your business at an affordable price.I'm a skilled MERN stack developer. With a passion for coding and a keen eye for detail, I specialize in crafting web applications using the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. I'm dedicated to delivering efficient, scalable, and user-friendly solutions that meet the unique needs of clients. With my strong problem-solving abilities and a drive for continuous learning, I strive to stay up-to-date with the latest technologies and industry trends.
          </p>
          <p>Delivering work within time and budget which meets client’s requirements is our moto.
          </p>
        </div>
        {/* <div className='about-right' data-aos="zoom-in">
          <ul className='about-right-ul'>
            <li className='about-right-li'><span className='about-li-span'>Name:</span>Pranshu Yadav</li>
            
            <li className='about-right-li'><span className='about-li-span'>Email:</span>
              <a href="mailto:pranshu002y@gmail.com" className='tp'>pranshu002y@gmail.com</a></li>
            
            <li className='about-right-li'><span className='about-li-span'>Age:</span>23</li>
            
            <li className='about-right-li4'><span className='about-li-span'>From:</span>Gurgaon,India</li>


          </ul>
          <a href={Resume1} class="btn btn-pri dwn">Download CV</a>

        </div> */}



        <div class="course-card">
    <img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1750786235/IMG_4445_ry3svl.jpg" class="bg-img"/>

    <div class="overlay">
 
      <div class="top-section">
        <div class="user">
          <img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1750786235/IMG_4445_ry3svl.jpg" alt="User"/>
          <div class="user-info">
            <p class="name">Pranshu Yadav</p>
          </div>
        </div>

    
        <div class="icons">
          <span> <a href="https://github.com/pranshu002y" target="_blank" rel="noreferrer" aria-label="GitHub">
  <i class="fab fa-github"></i>
</a></span>
          <span> <a href="https://linkedin.com/in/pranshu-yadav-086b28192/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i></a></span>
          <span> <a href="https://instagram.com" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i></a></span>
        </div>
      </div>

    
      <div class="content">
        <div class="sessions">
          <p>23 yr <span class="live">Gurgaon</span></p>
        </div>
        <h2>9336828811</h2>
      </div>

  
      <div class="buttons">
        <button class="join">Connect</button>
        <button class="consult">Download CV</button>
      </div>
    </div>
  </div>

        </div>
        <div class="grid  ">
          <div class="row1">
            <div class="c6">
              <div class="featured">
                <h4 class="img-cent">
                <Counter
  from={0}
  to={1.5}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/></h4>
                <p class="mb-0 ">Years Experience</p>
              </div>
            </div>
            {/* <div class="c6">
              <div class="featured">
                <h4 class="img-cent">
                  <span>0</span>+</h4>
                <p class="mb-0 ">Happy Clients</p>
              </div>
            </div> */}
            <div class="c6">
              <div class="featured">
                <h4 class="img-cent">
                <Counter
  from={0}
  to={10}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/>
</h4>
                <p class="mb-0 ">Projects Done</p>
              </div>
            </div>
            
          </div>
        </div>

      

    </>
  )
}

export default Aboutme