import React from 'react'
import '../App.css'
import Resume1 from "../Component/Pranshu Yadav.pdf"


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
        <div className='about-right' data-aos="zoom-in">
          <ul className='about-right-ul'>
            <li className='about-right-li'><span className='about-li-span'>Name:</span>Pranshu Yadav</li>
            
            <li className='about-right-li'><span className='about-li-span'>Email:</span>
              <a href="mailto:pranshu002y@gmail.com" className='tp'>pranshu002y@gmail.com</a></li>
            
            <li className='about-right-li'><span className='about-li-span'>Age:</span>23</li>
            
            <li className='about-right-li4'><span className='about-li-span'>From:</span>Gurgaon,India</li>


          </ul>
          <a href={Resume1} class="btn btn-pri dwn">Download CV</a>

        </div>
        </div>
        <div class="grid  ">
          <div class="row1">
            <div class="c6">
              <div class="featured">
                <h4 class="img-cent">
                  <span>1</span></h4>
                <p class="mb-0 ">Years Experiance</p>
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
                  <span>10</span>+</h4>
                <p class="mb-0 ">Projects Done</p>
              </div>
            </div>
            
          </div>
        </div>

      

    </>
  )
}

export default Aboutme