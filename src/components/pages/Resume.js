import React from 'react';
import resume from "../../assets/Alexander-Hill resume - 3-15-2017.pdf";

export default function Resume() {
  return (
    <section className='resume-container'>
      <h2>Resume</h2>
        <div className='resume-link'>
          <a className='resume' href = { resume } target = "_blank" rel="noreferrer" ><i className="fa-solid fa-file fa-2xl"></i></a>
          <p className='subtitle'>Jennifer's Resume</p>
        </div>
    </section>
  );
}
