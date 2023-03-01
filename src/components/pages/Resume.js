import React from "react";

import resume from "../../assets/JAH Technical Resume.pdf";

export default function Resume() {
  return (
    <container className="resume-page-container">
      <section className="skill-container">
        <h3 className="skills-h3">Front End Skills</h3>

        <div className="skill-blocks">
          <div className="custom" variant="outline-light" disabled>
            HTML
          </div>
          <div className="custom" variant="outline-light" disabled>
            CSS
          </div>
          <div className="custom" variant="outline-light" disabled>
            JavaScript
          </div>
          <div className="custom" variant="outline-light" disabled custom>
            JQuery
          </div>
          <div className="custom" variant="outline-light" disabled custom>
            React
          </div>
          <div className="custom" variant="outline-light" disabled custom>
            Semantic UI
          </div>
          <div className="custom" variant="outline-light" disabled custom>
            Bootstrap
          </div>
          <div className="custom" variant="outline-light" disabled custom>
            Bulma
          </div>
        </div>

        <h3 className="skills-h3">Back End Skills</h3>

        <div className="skill-blocks">
          <div className="custom" variant="outline-light" disabled>
            Node
          </div>
          <div className="custom" variant="outline-light" disabled custom>
            MySQL
          </div>
          <div className="custom" variant="outline-light" disabled custom>
            Sequelize
          </div>
          <div className="custom" variant="outline-light" disabled custom>
            Express
          </div>
          <div className="custom" variant="outline-light" disabled custom>
            MongoDB
          </div>
          <div className="custom" variant="outline-light" disabled custom>
            Mongoose
          </div>
          <div className="custom" variant="outline-light" disabled custom>
            OOP
          </div>
          <div className="custom" variant="outline-light" disabled custom>
            REST APIs
          </div>
          <div className="custom" variant="outline-light" disabled custom>
            GraphQL
          </div>
          <div className="custom" variant="outline-light" disabled custom>
            Git
          </div>
        </div>

        <h3 className="skills-h3">More Skills</h3>
        <div className="skill-blocks">
          <div className="custom" variant="outline-light" disabled>
            WordPress
          </div>
          <div className="custom" variant="outline-light" disabled>
            Raiser's Edge
          </div>
          <div className="custom" variant="outline-light" disabled>
            Tessitura
          </div>
          <div className="custom" variant="outline-light" disabled custom>
            NeonCRM
          </div>
          <div className="custom" variant="outline-light" disabled custom>
            Zoho Sites
          </div>
         </div>
      </section>

      

      <section className="resume-container">
        <h3 className="skills-h3">Download Resume</h3>
        <div className="resume-link">
          <a className="resume" href={resume} target="_blank" rel="noreferrer">
            <img
              src="https://user-images.githubusercontent.com/110498167/214734937-d71ae0b3-f4be-4895-9a5e-c3e58c548bd5.png"
              alt="resume"
              id="resume-pic"
            ></img>
          </a>
        </div>
      </section>
    </container>
  );
}
