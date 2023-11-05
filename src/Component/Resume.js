import React from "react";
import Resume1 from "../../src/pranshu yadav.pdf";

const Resume = () => {
  return (
    <div>
      <div className="title">
        <div className="title-behind">SUMMARY</div>
        <div className="title-front">RESUME</div>
      </div>

      <div>
        <div className="row1">
          <div className="row-right">
            <h2 className="edu">MY EDUCATION</h2>

            <div class="education-box">
              <p class="year ">2019 - 2023</p>
              <h3 class="branch ">Computer Science And Engineering</h3>
              <p class="uni">Lovely Professional University</p>
              <p class="mb-0 ">Bachelor Of Technology</p>
            </div>
            <div class="education-box">
              <p class="year">2016 - 2018</p>
              <h3 class="branch ">Intermediate</h3>
              <p class="uni">R L B School</p>
              <p class="mb-0 "></p>
            </div>
            <div class="education-box">
              <p class="year">2016</p>
              <h3 class="branch ">High School</h3>
              <p class="uni"> R L B School</p>
              <p class="mb-0 "></p>
            </div>
          </div>
          <div className="row-left">
            <h2 className="edu">MY EXPERENCIES</h2>
            <div class="education-box">
              <p class="year">Sep 2023 - Present</p>
              <h3 class="branch ">Associate Analyst </h3>
              <p class="uni">Global Logic</p>
              <p class="mb-0 ">
                The project includes review of E-commerce apparel generated by
                Artificial INtelligence, testing the quality and auditing them
                according to the guidelines set by the Google.The project
                requires observation and quality analysis, judging up of the
                garments over different aspects and reporting them to the Google
                Team. auditing the issue and responds to the tickets generated
                accordingly.
              </p>
            </div>
            <div class="education-box">
              <p class="year">Jul 2023 - Aug 2023</p>
              <h3 class="branch ">Business Development Associate </h3>
              <p class="uni">Minimalix </p>
              <p class="mb-0 ">
                I have a deep understanding of market dynamics and the ability
                to identify and capitalize on growth opportunities.I've
                successfully nurtured talent, fostered a culture of innovation,
                and guided my teams to achieve their full potential.
              </p>
            </div>
            <div class="education-box">
              <p class="year">Jan 2023 - Jun 2023</p>
              <h3 class="branch ">Associate Software Developer</h3>
              <p class="uni">Venturepact </p>
              <p class="mb-0 ">
                Developing and launching the web applicationn using front end
                technologies that meets the user requirements of the company and
                its users.Coordinated a team of 10 members and indivually
                handled the presentaion and research from clients and
                implementing the requirements.
              </p>
            </div>
          </div>
        </div>

        <h2 className="skills">SKILLSET</h2>
        <div className="row5">
          <div className="clmd">
            <p className="fw"> HTML | CSS | JAVASCRIPT </p>
            
          </div>

          <div className="clmd">
            <p className="fw">GITHUB/GITLAB | C/C++ | ASANA </p>
            
          </div>

          <div className="clmd">
            <p className="fw"> JIRA | SQL | DATA ANALYSIS | QUALITY ANALYSIS | EXCEL </p>
            
          </div>

          <div className="clmd">
            <p className="fw"> REACT JS | NEXT JS | NODE JS | FIGMA </p>
            
          </div>

          <div className="clmd">
            <p className="fw">MATERIAL UI | SASS | FIGMA | BOOTSTRAP </p>
           
          </div>

          <div className="clmd">
            <p className="fw"> TEAM PLAYER | POWER POINT PRESENTATION | ADAPTABLE </p>
           
          </div>
          <a
            href={Resume1}
            class="btn btn-pri dwn cv"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
