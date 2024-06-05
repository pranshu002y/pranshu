Personalised portfolio using the front end development technologies(Html,css,react) the portfolio includes basic layout design comprises of pages linked through routes.

@media (max-width: 786px) {
    html {
      font-size: 8px; /* Adjust the font size for smaller screens */
    }
  
    .header-wrapper {
      padding: 1rem; /* Adjust padding for the header */
    }
  
    .header-wrapper .title-wrapper {
      width: 80%; /* Adjust the width of the title wrapper */
    }
  
    .slider-content {
      margin-top: 5px; /* Adjust the margin-top for the slider content */
    }
  
    .slider-content .title-wrapper h1 {
      font-size: 8rem; /* Adjust the font size for smaller screens */
    }
  
    /* Add more styles as needed for smaller screens */
  }

  /* Existing styles */

@media (max-width: 768px) {
    html {
      font-size: 8px; 

      /* Adjust the font size for smaller screens */
    }
  
    .header-wrapper {
        
        padding: 1rem; /* Adjust padding for the header */
    }
  
    .header-wrapper .title-wrapper {
        width: 80%; /* Adjust the width of the title wrapper */
    }
  
    .slider-content {
        margin-top: 5px; /* Adjust the margin-top for the slider content */
    }
  
    .slider-content .title-wrapper h1 {
      font-size: 8rem; /* Adjust the font size for smaller screens */
    }
  
    /* Add more styles as needed for smaller screens */
  }
  
  @media (max-width: 480px) {
    html {
      font-size: 6px; /* Further adjust the font size for mobile screens */
    }
  
    .header-wrapper {
      padding: 0.5rem; /* Adjust padding for the header on mobile screens */
    }
  
    .slider-content {
      margin-top: 3px;
      
       /* Further adjust the margin-top for mobile screens */
    }
  
    .slider-content .title-wrapper h1 {
      font-size: 6rem; /* Adjust the font size for mobile screens */
    }
    .video-container{
       display: none;
    }
    
    .slider-content .title-wrapper{
        color: white;
    }
  
    /* Add more styles as needed for mobile screens */
  }
  

  @media (max-width: 768px) {

    .services-list-items {
      flex-basis: 100%;
      flex-direction: column;
      align-items: flex-start;
    }
    .bar,
    .bar1 {
      width: 100%;
      height: auto;
      flex-direction: row;
      position: absolute;
      justify-content: space-between;
      padding-right: 3rem;
      padding-left: 1rem;
      align-items: center;
      
  
  
    }
  
    .ham {
      visibility: visible;
  
    }
  
    .luffy,
    .nav-items {
      display: none;
    }
  
    .hireme,
    .about-me,
    .services,
    .resume,
    .portfol,
    .testimonial,
    .contact,
    .fotr {
      margin-left: 0;
      margin-bottom: 1rem;
  
    }
  
    .about {
      flex-direction: column;
      align-items: center;
      font-size: 12px;
  
    }
  
    .about-right {
  
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      font-size: 10px;
  
    }
  
    .row1 {
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    .services {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 500px;
      overflow: scroll;
  
    }
  
    .row5 {
  
      font-size: 10px;
    }
  
    .iscontact {
      flex-direction: column;
      align-items: center;
  
    }
  
    .fot-last {
      align-items: center;
    }
  
    .contact-left {
      width: auto;
    }
  
    .nav-icon {
      width: auto;
    }
  
    .fot-last,
    .last {
      font-size: 12px;
    }
  .foot {
    width: 100%;
    height: 50px;
    background-color: black;
    color: white;
    align-items: center;
  }
  
  
  }
  
  @media (max-width: 425px) and (max-width: 768px) {
    .services-list-items {
      flex-basis: 100%;
      flex-direction: column;
      align-items: flex-start;
    }
    .bar,
    .bar1 {
      width: 100%;
      height: auto;
      flex-direction: row;
      position: absolute;
      justify-content: space-between;
      padding-right: 3rem;
      padding-left: 1rem;
      align-items: center;
      
  
  
    }
  
    .ham {
      visibility: visible;
  
    }
  
    .luffy,
    .nav-items {
      display: none;
    }
  
    .hireme,
    .about-me,
    .services,
    .resume,
    .portfol,
    .testimonial,
    .contact,
    .fotr {
      margin-left: 0;
      margin-bottom: 1rem;
  
    }
  
    .about {
      flex-direction: column;
      align-items: center;
      font-size: 12px;
  
    }
  
    .about-right {
  
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      font-size: 10px;
  
    }
  
    .row1 {
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    .services {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 500px;
      overflow: scroll;
  
    }
  
    .row5 {
  
      font-size: 10px;
    }
  
    .iscontact {
      flex-direction: column;
      align-items: center;
  
    }
  
    .fot-last {
      align-items: center;
    }
  
    .contact-left {
      width: auto;
    }
  
    .nav-icon {
      width: auto;
    }
  
    .fot-last,
    .last {
      font-size: 12px;
    }
  .foot {
    width: 100%;
    height: 50px;
    background-color: black;
    color: white;
    align-items: center;
  }
  }
  @media (max-width: 320px) and (max-width: 375px) {
    .services-list-items {
      flex-basis: 100%;
      flex-direction: column;
      align-items: flex-start;
    }
    .bar,
    .bar1 {
      width: 100%;
      height: auto;
      flex-direction: row;
      position: absolute;
      justify-content: space-between;
      padding-right: 3rem;
      padding-left: 1rem;
      align-items: center;
  
  
    }
  
    .ham {
      visibility: visible;
  
    }
  
    .luffy,
    .nav-items {
      display: none;
    }
  
    .hireme,
    .about-me,
    .services,
    .resume,
    .portfol,
    .testimonial,
    .contact,
    .fotr {
      margin-left: 0;
      margin-bottom: 1rem;
  
    }
  
    .about {
      flex-direction: column;
      align-items: center;
      font-size: 12px;
  
    }
  
    .about-right {
  
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      font-size: 10px;
  
    }
  
    .row1 {
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    .services {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 500px;
      overflow: scroll;
  
    }
  
    .row5 {
  
      font-size: 10px;
    }
  
    .iscontact {
      flex-direction: column;
      align-items: center;
  
    }
  
    .fot-last {
      align-items: center;
    }
  
    .contact-left {
      width: auto;
    }
  
    .nav-icon {
      width: auto;
    }
  
    .fot-last,
    .last {
      font-size: 12px;
    }
  .foot {
    width: 100%;
    height: 50px;
    background-color: black;
    color: white;
    align-items: center;
  }
  }
  