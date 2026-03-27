import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Aboutme from './Component/Aboutme';
import Contact from './Component/Contact';
// import Fotter from './Component/Fotter';

import Portfol from './Component/Portfol';
import Resume from './Component/Resume';
import Services from './Component/Services';
import Top from './Component/Top';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Home = () => {
  useEffect(() => {
    const miniCircle = document.getElementById('minicircle');
    const moveCircle = (e) => {
      if (miniCircle) {
        miniCircle.style.left = `${e.clientX}px`;
        miniCircle.style.top = `${e.clientY}px`;
      }
    };
    document.addEventListener('mousemove', moveCircle);
    return () => document.removeEventListener('mousemove', moveCircle);
  }, []);

  return (
    <>
      <div className='main-head'>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className='container top-section' id='top-section1'>
          <Top />
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className='container about-me' id='about-me1'>
          <Aboutme />
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className='container services' id='services1'>
          <Services />
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className='container resume' id='resume1'>
          <Resume />
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className='container portfol' id='portfol1'>
          <Portfol />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className='container contact' id='contact1'>
          <Contact />
        </motion.div>
        
        <div className='container fotr' id='fotr1'></div>
      </div>  
    </>
  )
}
export default Home;