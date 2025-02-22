import React from "react";
import Aboutme from './Component/Aboutme';
import Contact from './Component/Contact';
import Fotter from './Component/Fotter';

import Portfol from './Component/Portfol';
import Resume from './Component/Resume';
import Services from './Component/Services';
import Top from './Component/Top';
const Home=()=>{
    return(
        <div className='main-head'>
        <div className='container top-section ' id='top-section1'>
          <Top />
        </div>
        <div className='container about-me' id='about-me1'>
          <Aboutme/>
        </div>
        <div className='container services' id='services1'>
          <Services/>
        </div>
        <div className='container resume' id='resume1'>
          <Resume/>
        </div>
        <div className='container portfol' id='portfol1'>
          <Portfol/>
        </div>


        <div className='container contact' id='contact1'>
          <Contact/>
        </div>
        <div className='container fotr' id='fotr1'>
          {/* <Fotter/> */}
        </div>
        
        </div>  
    )
}
export default Home;