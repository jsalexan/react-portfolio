import React, { useState } from 'react';
import profilePic from '../../assets/polaroid.png';

export default function About() {
  
    const [highlightedWord, setHighlightedWord] = useState(null);
  
    const handleWordHover = (word) => {
      setHighlightedWord(word);
    };
  
    const handleWordLeave = () => {
      setHighlightedWord(null);
    };
  return (
    <section id="about-me">
        <header className='top-bar'>

        </header>
            <div className="about-me-container">
                <img className="polaroid" src={ profilePic } alt="Jennifer Alexander-Hill, a woman with brown hair."/>
                    <p>
                    <h4 className='heading'>
      <span
        className={highlightedWord === 'Study' ? 'highlighted' : ''}
        onMouseEnter={() => handleWordHover('Study')}
        onMouseLeave={handleWordLeave}
      >
        Study.
      </span>{' '}
      <span
        className={highlightedWord === 'Simplify' ? 'highlighted' : ''}
        onMouseEnter={() => handleWordHover('Simplify')}
        onMouseLeave={handleWordLeave}
      >
        Simplify.
      </span>{' '}
      <span
        className={highlightedWord === 'Solve' ? 'highlighted' : ''}
        onMouseEnter={() => handleWordHover('Solve')}
        onMouseLeave={handleWordLeave}
      >
        Solve.
      </span>
    </h4>
                        <br /><br />
                        Jennifer Alexander-Hill is a problem-solver. Whether its developing fundraising CRMs for nonprofit organizations, or – as she finds herself these days – buried in a code refactoring, Jennifer excels in creatively exploring the big picture and then diving deep into the details to help you reach your goals. 
                        <br /><br />
                        A graduate of the full stack web development bootcamp at the University of Washington, Jennifer has hands-on experience in everything from CSS, JavaScript, and ReactJS to MySQL, MongoDB, and GraphQL. She prides herself on her stellar work-ethic and her passion for learning new technologies, with a particular interest in creating a simple, intuitive user experience. In her free time, Jennifer volunteers for Seattle Public Schools as a web editor. 
                        <br /><br />
                        Originally from New Jersey, Jennifer loves Seattle weather, experimenting with CSS, musical theatre, genealogical research, and her ukuleles. 
                        <br /><br />
                        Learn more about her work and then reach out for a chat. 
                    </p>
              </div>
    </section>
  );
}
