import React from "react";
import Skillset from "./Skillset";
// import Resume1 from "../../src/Pranshu Yadav.pdf";

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
            <h2 className="edu" data-aos="fade-up-right">
              MY EDUCATION
            </h2>

            <div class="travel-card" data-aos="fade-up-right">
              <div class="card-header">
                <div class="mode">🚶‍♀️ 2019 - 2023</div>

                <button class="next-btn">Jalandhar 📍</button>
              </div>

              <div class="card-body">
                <div class="distance">
                  <h3>Bachelor Of Technology</h3>
                  <p>Computer Science And Engineering</p>
                </div>
              </div>

              <div class="stops">
                <div>
                  <p>Lovely Professional University</p>
                </div>
                <div class="thumbnails">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaP2WTTlLw-A8nQEw2g_JxPHVNh3XCo1Oc0A&s"
                    alt=""
                  />
                  <img
                    src="https://www.lpu.in/authenticate/lpu%20logo.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="travel-card" data-aos="fade-up-right">
              <div class="card-header">
                <div class="mode">🚶‍♀️ 2016 - 2018</div>

                <button class="next-btn">Lucknow 📍</button>
              </div>

              <div class="card-body">
                <div class="distance">
                  <h3>Intermediate</h3>
                  {/* <p>R L B School</p> */}
                </div>
              </div>

              <div class="stops">
                <div>
                  <p>R L B School</p>
                </div>
                <div class="thumbnails">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKHpMBf-fSuqn6moTO4vwYBNRiiikbrh5RKg&s"
                    alt=""
                  />
                  <img
                    src="https://content.jdmagicbox.com/comp/lucknow/u4/0522px522.x522.220921235652.f3u4/catalogue/rani-laxmi-bai-memorial-school-indira-nagar-sector-14-lucknow-private-schools-B3qZAlPQir.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="travel-card" data-aos="fade-up-right">
              <div class="card-header">
                <div class="mode">🚶‍♀️ 2016</div>
                <button class="next-btn">Lucknow 📍</button>
              </div>

              <div class="card-body">
                <div class="distance">
                  <h3>High School</h3>
                  {/* <p>Computer Science And Engineering</p> */}
                </div>
              </div>

              <div class="stops">
                <div>
                  <p>R L B School</p>
                </div>
                <div class="thumbnails">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKHpMBf-fSuqn6moTO4vwYBNRiiikbrh5RKg&s"
                    alt=""
                  />
                  <img
                    src="https://content.jdmagicbox.com/comp/lucknow/u4/0522px522.x522.220921235652.f3u4/catalogue/rani-laxmi-bai-memorial-school-indira-nagar-sector-14-lucknow-private-schools-B3qZAlPQir.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row-left" data-aos="fade-down-left">
            <h2 className="edu">MY EXPERIENCES </h2>

            <div class="card" data-aos="fade-down-left">
              <div class="card-header">
                <div class="logo">Nov 2024 - Present</div>
                <div class="menu">
                  <span>Gurgaon</span>
                  <button class="arrow">📍</button>
                </div>
              </div>

              <div class="content">
                <h3>
                  Associate Research Analyst <span>↗</span>
                </h3>
                <p class="highlight1">HighSpring India LLP</p>
                <p class="desc">
                  Worked on web-based data research and API-driven dataset exploration, gaining practical exposure to how data flows across modern web applications.

Cleaned, structured, and validated large datasets (98%+ accuracy) used in dashboards and performance systems, supporting data-driven decision-making and improving product insights.

Collaborated with engineering teams on AI-powered web products (Google Gemini & SGE), identifying UX gaps, improving response quality, and contributing to better user-facing outputs.

Developed strong skills in debugging, data handling, and understanding user behavior, enabling a smooth transition into frontend development and building user-centric web applications.

APIs, Data Handling, UI/UX Analysis, Web Data Structures, Excel, SEO, JavaScript (Basics), React 
                </p>
              </div>

              <div class="indicator">
                <span class="dot active"></span>
              </div>
            </div>

            <div class="card" data-aos="fade-down-left">
              <div class="card-header">
                <div class="logo">Sep 2023 - Jan 2024</div>
                <div class="menu">
                  <span>Gurgaon</span>
                  <button class="arrow">📍</button>
                </div>
              </div>

              <div class="content">
                <h3>
                  Associate Analyst <span>↗</span>
                </h3>
                <p class="highlight1"> Global Logic</p>
                <p class="desc">
                  The project includes review of E-commerce apparel generated by
                  Artificial INtelligence, testing the quality and auditing them
                  according to the guidelines set by the Google.The project
                  requires observation and quality analysis, judging up of the
                  garments over different aspects and reporting them to the
                  Google Team. auditing the issue and responds to the tickets
                  generated accordingly.
                </p>
              </div>

              <div class="indicator">
                <span class="dot active"></span>
              </div>
            </div>

            <div class="card" data-aos="fade-down-left">
              <div class="card-header">
                <div class="logo">Jan 2023 - Jun 2023</div>
                <div class="menu">
                  <span>Punjab</span>
                  <button class="arrow">📍</button>
                </div>
              </div>

              <div class="content">
                <h3>
                  Associate Software Developer <span>↗</span>
                </h3>
                <p class="highlight1"> Venturepact</p>
                <p class="desc">
                  Developing and launching the web applicationn using front end
                  technologies that meets the user requirements of the company
                  and its users.Coordinated a team of 10 members and indivually
                  handled the presentaion and research from clients and
                  implementing the requirements.
                </p>
              </div>

              <div class="indicator">
                <span class="dot active"></span>
              </div>
            </div>
          </div>
        </div>
        <Skillset />
      </div>
    </div>
  );
};

export default Resume;
