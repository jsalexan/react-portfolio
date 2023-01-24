import React from 'react';
import resume from "../../assets/JAH Resume 2023.pdf";

export default function Resume() {
  return (
    <section className='resume-container'>
      <h2>Resume</h2>
      
       <h3 className='skills-h3'>Skills</h3>
        <div className='skill-group'>
          
          <ul classname='skills'>
            <li>HTML</li>
            <li>CSS</li>
            
          </ul>
          </div>
        <div className='resume-link'>
          <a className='resume' href = { resume } target = "_blank" rel="noreferrer" ><i className="fa-solid fa-file fa-2xl"></i></a>
          <p className='subtitle'>Jennifer's Resume</p>
        </div>
    </section>
  );
}
