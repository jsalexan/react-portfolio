import React from "react";
import resumeClip from "../../assets/resume.png";
import HTML from "../../assets/HTML-LOGO.png";
import CSS from "../../assets/CSS-LOGO.png";
import CANVA from "../../assets/CANVA-LOGO.png";
import JAVASCRIPT from "../../assets/JAVASCRIPT-LOGO.png";
import JQUERY from "../../assets/JQUERY-LOGO.png";
import REACT from "../../assets/REACT-LOGO.png";
import BOOTSTRAP from "../../assets/BOOTSTRAP-LOGO.png";
import SEMANTIC from "../../assets/SEMANTIC-LOGO.png";
import FIGMA from "../../assets/FIGMA-LOGO.png";
import EXPRESS from "../../assets/EXPRESS-LOGO.png";
import GIT from "../../assets/GIT-LOGO.png";
import GITHUB from "../../assets/GITHUB-LOGO.png";
import GITLAB from "../../assets/GITLAB-LOGO.png";
import GRAPHQL from "../../assets/GRAPHQL-LOGO.png";
import INSOMNIA from "../../assets/INSOMNIA-LOGO.png";
import JSON from "../../assets/JSON-LOGO.png";
import BULMA from "../../assets/BULMA-LOGO.png";
import MONGO from "../../assets/MONGO-LOGO.png";
import MONGOOSE from "../../assets/MONGOOSE-LOGO.png";
import MYSQL from "../../assets/MYSQL-LOGO.png";
import NEON from "../../assets/NEON-LOGO.png";
import NODE from "../../assets/NODE-LOGO.png";
import NPM from "../../assets/NPM-LOGO.png";
import OFFICE from "../../assets/OFFICE-LOGO.png";
import OOP from "../../assets/OOP-LOGO.png";
import RE from "../../assets/RE-LOGO.png";
import REST from "../../assets/REST-LOGO.png";
import SEQUELIZE from "../../assets/SEQUELIZE-LOGO.png";
import TESSITURA from "../../assets/TESSITURA-LOGO.png";
import WEBPACK from "../../assets/WEBPACK-LOGO.png";
import WORDPRESS from "../../assets/WORDPRESS-LOGO.png";
import ZOHO from "../../assets/ZOHO-LOGO.png";
import resume from "../../assets/JAH Technical Resume.pdf";
import resumePic from "../../assets/resume-pic.png";

export default function Resume() {
  return (
    <container className="resume-page-container">
      <section className="skill-container">
        <h3 className="skills-h3">FRONT END SKILLS</h3>
          <div className="skill-blocks">
          <img className="tech-stack" src={HTML} alt="HTML logo"></img>
          <img className="tech-stack" src={CSS} alt="HTML logo"></img>
          <img className="tech-stack" src={JAVASCRIPT} alt="HTML logo"></img>
          <img className="tech-stack" src={JQUERY} alt="HTML logo"></img>
          <img className="tech-stack" src={REACT} alt="HTML logo"></img>
          <img className="tech-stack" src={BOOTSTRAP} alt="HTML logo"></img>
          <img className="tech-stack" src={SEMANTIC} alt="HTML logo"></img>
          <img className="tech-stack" src={BULMA} alt="HTML logo"></img>
        </div>

        <h3 className="skills-h3">BACK END SKILLS</h3>

        <div className="skill-blocks">
          <img className="tech-stack" src={NODE} alt="NODE logo"></img>
          <img className="tech-stack" src={MYSQL} alt="MYSQL logo"></img>
          <img
            className="tech-stack"
            src={SEQUELIZE}
            alt="SEQUELIZE logo"
          ></img>
          <img className="tech-stack" src={EXPRESS} alt="EXPRESS logo"></img>
          <img className="tech-stack" src={MONGO} alt="MONGODB logo"></img>
          <img className="tech-stack" src={MONGOOSE} alt="MONGOOSE logo"></img>
          <img
            className="tech-stack"
            src={OOP}
            alt="OBJECT ORIENTED PROGRAM logo"
          ></img>
          <img className="tech-stack" src={REST} alt="REST APIS logo"></img>
          <img
            className="tech-stack"
            src={GRAPHQL}
            alt="APOLLO GRAPHQL logo"
          ></img>
          <img className="tech-stack" src={GIT} alt="GIT logo"></img>
          <img className="tech-stack" src={INSOMNIA} alt="INSOMNIA logo"></img>
          <img className="tech-stack" src={JSON} alt="JSON logo"></img>
          <img className="tech-stack" src={NPM} alt="NPM logo"></img>
          <img className="tech-stack" src={WEBPACK} alt="WEBPACK logo"></img>
        </div>

        <h3 className="skills-h3">MORE SKILLS</h3>
        <div className="skill-blocks">
          <img className="tech-stack" src={GITHUB} alt="GITHUB logo"></img>
          <img className="tech-stack" src={GITLAB} alt="GITLAB logo"></img>
          <img
            className="tech-stack"
            src={WORDPRESS}
            alt="WORDPRESS logo"
          ></img>
          <img className="tech-stack" src={RE} alt="RAISER'S EDGE logo"></img>
          <img
            className="tech-stack"
            src={TESSITURA}
            alt="TESSITURA logo"
          ></img>
          <img className="tech-stack" src={ZOHO} alt="ZOHO SITES logo"></img>
          <img className="tech-stack" src={NEON} alt="NEON CRM logo"></img>
          <img className="tech-stack" src={FIGMA} alt="FIGMA logo"></img>
          <img className="tech-stack" src={CANVA} alt="CANVA logo"></img>
          <img
            className="tech-stack"
            src={OFFICE}
            alt="MICROSOFT OFFICE logo"
          ></img>
        </div>
      </section>

      <section className="resume-container">
        <h3 className="skills-h3">RESUME</h3>
        <div className="resume-link">
          <a className="resume" href={resume} target="_blank" rel="noreferrer">
            <img src={resumeClip} alt="resume" id="resume-pic"></img>
          </a>
        </div>
      </section>
    </container>
  );
}
