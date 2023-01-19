import React from 'react';
import profilePic from '../../assets/picture logo (1).png';

export default function About() {
  return (
    <section id="about-me">
        <h2>Jennifer Alexander-Hill</h2>
            <div className="about-me-container">
                <img src={ profilePic } alt="Jennifer Alexander-Hill, a woman with brown hair and blue eyes."/>
                    <p>
                        <b>Study. Simplify. Solve.</b>
                        <br /><br />
                        Jennifer Alexander-Hill is a problem-solver. Whether its managing the three-ring circus of a theatrical production, developing fundraising CRMs for nonprofit organizations, or – as she finds herself these days – buried deep in a code refactoring, Jennifer excels in exploring the big picture and then diving deep into the details to help you reach your goals. 
                        <br /><br />
                        Jennifer is currently enrolled in the full stack web development bootcamp at the University of Washington. She also volunteers for Seattle Public Schools as a web editor. 
                        <br /><br />
                        Originally from the east coast, Jennifer loves Seattle weather, experimenting with CSS, musical theatre, her ukuleles, and hemp milk lattes. Learn more about her work below and then reach out for a chat. 
                    </p>
              </div>
    </section>
  );
}
