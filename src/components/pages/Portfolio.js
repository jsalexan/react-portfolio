import React from 'react';
import dogtown from '../../assets/dogtown.png';
import furever from '../../assets/furever-friends.png';
import theatre from '../../assets/musical-theatre.jpeg';
import tech from '../../assets/Blog square.png';
import memory from '../../assets/memory-friend.png';
import dogtor from '../../assets/Dogtor (1).png';
import regex from '../../assets/Regex.png';


export default function Portfolio() {
  return (
    <section id="portfolio">
                {/* <h2>Portfolio</h2> */}

                <ul className="work-container">

                <li>
                        <img src={ dogtor } alt="Navy blue dog with health heart."/>
                            <div className="overlay">
                                <span>Dog-tor's Notes</span>
                                <div className='btn-row'>
                                <span className='proj-desc'>An app to help track your dog's health.</span> <br/>
                                <span className='tech-subtitles'>MERN with GraphQL</span> <br/>
                                    <a href="https://github.com/jsalexan/Dogtor-Notes" className='portfolio-btn btn'>GitHub</a>
                                    <a href="https://whispering-plains-29779.herokuapp.com/" className='portfolio-btn btn'>Website</a>
                                </div>
                                                      
                            </div>
                        
                    </li>

                    <li>
                        <img src={ dogtown } alt="Small dogs in front of dog house."/>
                            <div className="overlay">
                                <span>Dog Town</span>
                                <div className='btn-row'>
                                    <a href="https://github.com/jsalexan/DogTown" className='portfolio-btn btn'>GitHub</a>
                                    <a href="https://min-andrew.github.io/Dog-park-finder/" className='portfolio-btn btn'>Website</a>
                                </div>
                                <span className='tech-subtitles'>Google APIs, OpenWeather API</span> 
                            </div>
                        
                    </li>

                    <li>
                        <img src={ furever } alt="A little beige dog drawing"/>
                            <div className="overlay">
                                <span>Furever Friends</span>
                               <div className='btn-row'>
                                    <a href="https://github.com/jsalexan/Furever-Friends" className='portfolio-btn btn'>GitHub</a>
                                    <a href="https://fast-atoll-54795.herokuapp.com/" className='portfolio-btn btn'>Website</a>
                                </div>
                                <span className='tech-subtitles'>MVC with mySQL & Sequelize</span> 
                            </div>
                    </li>

                    <li>
                        <img src={ theatre } alt="Moulin Rouge production"/>
                            <div className="overlay">
                                <span>Broadway Quiz</span>
                                <div className='btn-row'>
                                    <a href="https://github.com/jsalexan/theatre-quiz" className='portfolio-btn btn'>GitHub</a>
                                    <a href="https://jsalexan.github.io/theatre-quiz/" className='portfolio-btn btn'>Website</a>
                                </div>
                                <span className='tech-subtitles'>JavaScript, CSS, & HTML</span> 
                            </div>
                    </li>
                    <li>
                        <img src= { tech } alt="Woman on her lap top with a hash symbol on the cover"/>
                            <div className="overlay">
                                <span>Hash Tech</span>
                                <div className='btn-row'>
                                    <a href="https://github.com/jsalexan/tech-blog" className='portfolio-btn btn'>GitHub</a>
                                    <a href="https://hash-tech.herokuapp.com/" className='portfolio-btn btn'>Website</a>
                                </div>
                                <span className='tech-subtitles'>mySQL, NodeJS, & Express</span> 
                            </div>
                    </li>
                    <li>
                        <img src= { memory } alt="Graphic of human head filled with flowers"/>
                            <div className="overlay">
                                <span>Memory Friend</span>
                                <div className='btn-row'>
                                    <a href="https://github.com/jsalexan/note-taker" className='portfolio-btn btn'>GitHub</a>
                                    <a href="https://memory-friend.herokuapp.com/" className='portfolio-btn btn'>Website</a>
                                </div>
                                <span className='tech-subtitles'>JavaScript, NodeJS, & NPM</span> 
                            </div>
                    </li>
                    <li>
                        <img src= { regex } alt="Yellow planet graphic with asterisks"/>
                            <div className="overlay">
                                <span>Regex Gist</span>
                                <div className='btn-row'>
                                    <a href="https://github.com/jsalexan/regex-email" className='portfolio-btn btn'>GitHub</a>
                                    <a href="https://gist.github.com/jsalexan/e6893ff3f21a18280dc1e5bf52177000" className='portfolio-btn btn'>Website</a>
                                </div>
                                <span className='tech-subtitles'>Markdown, Regex, Gist</span> 
                            </div>
                    </li>
                </ul>
            </section>
  )
}
