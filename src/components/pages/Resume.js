import React from 'react';
import resume from "../../assets/JAH Resume 2023.pdf";

export default function Resume() {
  return (
    <section className='resume-container'>
      {/* <h2>Resume</h2> */}
      
       <h3 className='skills-h3'>Front End</h3>

          <div classname='skill-icons'>
            <div id='front-end'>
              <i className="fa-brands fa-html5 skill-icon"></i>
              <i class="fa-brands fa-css3"></i>
              <i class="fa-brands fa-square-js skill-icon"></i>
              <img className='skill-icon' src='https://user-images.githubusercontent.com/110498167/214700698-d97a7919-0b0a-4797-b3e9-2b50dfd58553.png' alt='jquery logo'></img>
              <i class="fa-brands fa-bootstrap"></i>
            </div>
          </div>

      <h3 className='skills-h3'>Back End</h3>
          <div className='skill-icons'>
          
            
          </div>

        <div className='resume-link'>
          <a className='resume' href = { resume } target = "_blank" rel="noreferrer" ><i className="fa-solid fa-file fa-2xl"></i></a>
          <p className='subtitle'>Jennifer's Resume</p>
        </div>
    </section>
  );
}
