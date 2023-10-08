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
                        <br />
                        Hey there! 👋 I'm Jennifer, and I have a passion for problem solving. I thrive in the fast-paced world of tech, fueled by a love for learning and the challenge of picking up new skills on the fly.
                        <br /><br />
                        I earned my stripes at the full stack web development bootcamp at the University of Washington. Working with everything from CSS to ReactJS and databases like MySQL and MongoDB, I'm always honing my skills to craft seamless and user-friendly experiences.
                        <br /><br />
                        Also in my tech toolbox, you'll find creativity, collaboration, and a giant dollop of tenacity. My time working with nonprofits has sculpted me into a developer who not only loves coding but excels at communicating complex ideas. Whether I'm knee-deep in a code refactoring or hunkered down with the team debugging, I bring a collaborative spirit and a drive to deliver solutions that make an impact. 
                        <br /><br />
                        When I'm not hooked to my keyboard, you'll find me volunteering for Seattle Public Schools, polishing up their web content. Born and raised in NJ, now delighting in the rainy bliss of Seattle, I'm not just about coding – I'm into cooking, genealogical research, and picking away on a ukulele.
                        <br /><br />
                        Curious to know more about what I do? Dive into my projects, and hey, let's grab a virtual coffee sometime. I'm always up for a chat! ☕️✨ 
                        <br /><br />
                    </p>
              </div>
    </section>
  );
}
