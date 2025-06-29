import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaVolleyballBall,FaPhoneAlt,FaMailBulk} from "react-icons/fa";


const Contact = () => {
  return (
    <div>
      <div className="title">
        <div className="title-behind">CONTACT</div>
        <div className="title-front">Get in Touch</div>
      </div>

      <div className="iscontact">
        <div className="contact-left">
          <h2 className="follow">ADDRESSS</h2>
          <p>Gurgaon,India</p>
          <p className="tel"> <FaPhoneAlt className="telp"/> (+91)9336828811</p>
          <p className="tel"> <FaMailBulk className="telp"/> pranshu002y@gmail.com</p>
          
        </div>
        <div className="contact-right">
          {/* <h2 className="follow">SEND US A NOTE</h2>
          <div className="contact-right-input">
          <input className="cri" type="text" placeholder="  Name" />
          <input className="cri" type="email" placeholder="Email" />
          </div>
          <textarea className="txtar" name="sdsf" placeholder="  Enter the text here" id="" cols="30" rows="10"></textarea> */}
          <button className="btn btn-pri conk"><a href="mailto:pranshu002y@gmail.com">let's be friends


</a></button>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
