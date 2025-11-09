import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="title">
        <div className="title-behind">CONTACT</div>
        <div className="title-front">Get in Touch</div>
      </div>

     
      <section class="contact-banner">
    <div class="contact-content">
      <h2>ADDRESSS</h2>
      <p>Gurgaon,Haryana, India</p>
      <div class="contact-buttons">
        <a href="#" class="btn primary">(+91)9336828811</a>
        <a href="mailto:pranshu002y@gmail.com" class="btn secondary">let's Connect!</a>
      </div>
    </div>
    <div class="contact-image">
      <img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1750786235/IMG_4445_ry3svl.jpg"  alt="profile"/>
   
    </div>
  </section>


  <footer class="footer">
    <div class="footer-container">
      


      <div class="footer-socials">
      <a href="https://github.com/pranshu002y" target="_blank" rel="noreferrer" aria-label="GitHub">
  <i class="fab fa-github"></i>
</a>

        
        <a href="https://linkedin.com/in/pranshu-yadav-086b28192/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i></a>
      </div>
    </div>

    <div class="footer-bottom">
      <p>Copyright © 2025 Pranshu Yadav | All Rights Reserved</p>
    </div>
  </footer>

    </div>
  );
};

export default Contact;
