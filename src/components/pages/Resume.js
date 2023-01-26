import React from "react";
import resume from "../../assets/JAH Resume 2023.pdf";

export default function Resume() {
  return (
    <section className="resume-page-container">

      <div className="skill-icon-container">
        <h3 className="skills-h3">Front End</h3>
        <div id="front-end">
          <i className="fa-brands fa-html5 fa-2xl"></i>
          <i className="fa-brands fa-css3 fa-2xl"></i>
          <i className="fa-brands fa-square-js fa-2xl"></i>
          <img
            className="fa-2xl skill-icon"
            src="https://user-images.githubusercontent.com/110498167/214726764-205f9f81-7aae-4ced-8f37-66bba1979cc1.png"
            alt="jquery logo"
          ></img>
          <i className="fa-brands fa-bootstrap fa-2xl"></i>
          <img
            className="fa-2xl skill-icon"
            src="https://user-images.githubusercontent.com/110498167/214729648-ceb59225-d0ee-4f02-94eb-ba650e9204a5.png"
            alt="react logo"
          ></img>
          <img
            className="fa-2xl skill-icon"
            src="https://user-images.githubusercontent.com/110498167/214729672-2a504825-75b0-484b-8d01-f05396dc951a.png"
            alt="expressJS logo"
          ></img>
          <img
            className="fa-2xl skill-icon"
            src="https://user-images.githubusercontent.com/110498167/214729457-f212292c-2ba8-4e2e-a678-8e14dad5edbe.png"
            alt="Handlebars logo"
          ></img>
        </div>
      

      <div className="skill-icons">
        <h3 className="skills-h3">Back End</h3>
        <div id="back-end">
          <img
            className="fa-2xl skill-icon"
            src="https://user-images.githubusercontent.com/110498167/214729772-d9feb312-54d9-457f-b5a1-4de00ed60c84.png"
            alt="mysql logo"
          ></img>
          <img
            className="fa-2xl skill-icon"
            src="https://user-images.githubusercontent.com/110498167/214729728-b1d877d4-32d6-44a4-bba7-21bb507aa1c0.png"
            alt="mongoDB logo"
          ></img>
          <img
            className="fa-2xl skill-icon"
            src="https://user-images.githubusercontent.com/110498167/214729505-ab9492ec-316c-48c1-87fd-9f6c5463be4b.png"
            alt="nodeJS logo"
          ></img>
          <img
            className="fa-2xl skill-icon"
            src="https://user-images.githubusercontent.com/110498167/214729398-c77df406-8071-401b-b378-dd09240a807a.png"
            alt="webpack logo"
          ></img>
          <img
            className="fa-2xl skill-icon"
            src="https://user-images.githubusercontent.com/110498167/214729355-39d81b24-7f49-4f45-8fde-7923fa6ea757.png"
            alt="graphQL logo"
          ></img>
        </div>
      </div>
      </div>

      <div className="resume-container">
        <div className="resume-link">
          <a className="resume" href={resume} target="_blank" rel="noreferrer">
            <img src='https://user-images.githubusercontent.com/110498167/214734937-d71ae0b3-f4be-4895-9a5e-c3e58c548bd5.png' alt='resume' id='resume-pic'></img>
          </a>
          <p className="subtitle">Jennifer's Resume</p>
        </div>
      </div>
    </section>
  );
}
