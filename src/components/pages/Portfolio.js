import React from 'react';
import dogtown from '../../assets/dogtown.png'
import spr from '../../assets/spr.png'
import furever from '../../assets/furever-friends.png'
import theatre from '../../assets/musical-theatre.jpeg'

export default function Portfolio() {
  return (
    <section id="portfolio">
                <h2>Work</h2>

                <ul className="work-container">
               
                    <li>
                        <a href="https://jsalexan.github.io/Seattle-Platypus-Rescue/"><img src= { spr } alt="Hands holding two baby platypuses."/>
                            <div className="overlay">
                                <span>Seattle Platypus Rescue</span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="https://min-andrew.github.io/Dog-park-finder/"><img src={ dogtown } alt="Small dogs in front of dog house."/>
                            <div className="overlay">
                                <span>Dog Town</span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="https://fast-atoll-54795.herokuapp.com/">
                        <img src={ furever } alt="A little beige dog drawing"/>
                            <div className="overlay">
                                <span>Furever Friends</span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="https://jsalexan.github.io/theatre-quiz/">
                        <img src={ theatre } alt="Moulin Rouge production"/>
                            <div className="overlay">
                                <span>Musical Theatre Quiz</span>
                            </div>
                        </a>
                    </li>

                </ul>
            </section>
  )
}
