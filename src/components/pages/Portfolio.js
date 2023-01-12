import React from 'react';
import dogtown from '../../assets/dogtown.png'
import spr from '../../assets/spr.png'
import furever from '../../assets/furever-friends.png'

export default function Portfolio() {
  return (
    <section id="portfolio">
                <h2>Work</h2>

                <ul class="work-container">
               
                    <li>
                        <a href="https://jsalexan.github.io/Seattle-Platypus-Rescue/"><img src= { spr } alt="Hands holding two baby platypuses."/>
                            <div class="overlay">
                                <span>Seattle Platypus Rescue</span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="https://min-andrew.github.io/Dog-park-finder/"><img src={ dogtown } alt="Small dogs in front of dog house."/>
                            <div class="overlay">
                                <span>Dog Town</span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="https://fast-atoll-54795.herokuapp.com/">
                        <img src={ furever } alt="A little beige dog drawing"/>
                            <div class="overlay">
                                <span>Furever Friends</span>
                            </div>
                        </a>
                    </li>

                </ul>
            </section>
  )
}
