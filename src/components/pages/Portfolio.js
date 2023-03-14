import React from "react";
import dogtown from "../../assets/dogtown.png";
import furever from "../../assets/furever-friends.png";
import theatre from "../../assets/musical-theatre.jpeg";
import tech from "../../assets/Blog square.png";
import memory from "../../assets/memory-friend.png";
import dogtor from "../../assets/Dogtor (1).png";
import regex from "../../assets/Regex.png";
import today from "../../assets/today.png";
import weather from "../../assets/weather.png";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <ul className="work-container">
        <li>
          <img src={dogtor} alt="Navy blue dog with health heart." />
          <div className="overlay">
            <span className="title">DOG-TER'S NOTES</span>
            <span className="proj-subtitles">
              An app to track your dog's health.
            </span>
            <span className="tech-subtitles"> ⌨MERN with GraphQL⌨</span>
            <div className="button-row">
              <a
                href="https://github.com/jsalexan/Dogtor-Notes"
                className="portfolio-btn btn"
              >
                GitHub
              </a>
              <a
                href="https://whispering-plains-29779.herokuapp.com/"
                className="portfolio-btn btn"
              >
                Website
              </a>
            </div>
          </div>
        </li>

        <li>
          <img src={dogtown} alt="Small dogs in front of dog house." />
          <div className="overlay">
            <span className="title">DOG TOWN</span>
            <span className="proj-subtitles">
              An app to help locate dog parks.
            </span>
            <span className="tech-subtitles">
              ⌨Google APIs, OpenWeather API⌨
            </span>
            <div className="button-row">
              <a
                href="https://github.com/jsalexan/DogTown"
                className="portfolio-btn btn"
              >
                GitHub
              </a>
              <a
                href="https://min-andrew.github.io/Dog-park-finder/"
                className="portfolio-btn btn"
              >
                Website
              </a>
            </div>
          </div>
        </li>

        <li>
          <img src={furever} alt="A little beige dog drawing" />
          <div className="overlay">
            <span className="title">FUREVER FRIENDS</span>
            <span className="proj-subtitles">
              A social media app for your dog.
            </span>
            <span className="tech-subtitles">⌨MVC with mySQL & Sequelize⌨</span>
            <div className="button-row">
              <a
                href="https://github.com/jsalexan/Furever-Friends"
                className="portfolio-btn btn"
              >
                GitHub
              </a>
              <a
                href="https://fast-atoll-54795.herokuapp.com/"
                className="portfolio-btn btn"
              >
                Website
              </a>
            </div>
          </div>
        </li>

        <li>
          <img src={theatre} alt="Moulin Rouge production" />
          <div className="overlay">
            <span className="title">BROADWAY QUIZ</span>
            <span className="proj-subtitles">A musical theatre quiz app.</span>
            <span className="tech-subtitles">⌨JavaScript, CSS, & HTML⌨</span>
            <div className="button-row">
              <a
                href="https://github.com/jsalexan/theatre-quiz"
                className="portfolio-btn btn"
              >
                GitHub
              </a>
              <a
                href="https://jsalexan.github.io/theatre-quiz/"
                className="portfolio-btn btn"
              >
                Website
              </a>
            </div>
          </div>
        </li>
        <li>
          <img
            src={tech}
            alt="Woman on her lap top with a hash symbol on the cover"
          />
          <div className="overlay">
            <span className="title">HASH TECH</span>
            <span className="proj-subtitles">A blog for women in tech.</span>
            <span className="tech-subtitles">⌨mySQL, NodeJS, & Express⌨</span>
            <div className="button-row">
              <a
                href="https://github.com/jsalexan/tech-blog"
                className="portfolio-btn btn"
              >
                GitHub
              </a>
              <a
                href="https://hash-tech.herokuapp.com/"
                className="portfolio-btn btn"
              >
                Website
              </a>
            </div>
          </div>
        </li>
        <li>
          <img src={memory} alt="Graphic of human head filled with flowers" />
          <div className="overlay">
            <span className="title">MEMORY FRIEND</span>
            <span className="proj-subtitles">
              A simple note taking application.
            </span>
            <span className="tech-subtitles">⌨JavaScript, NodeJS, & NPM⌨</span>
            <div className="button-row">
              <a
                href="https://github.com/jsalexan/note-taker"
                className="portfolio-btn btn"
              >
                GitHub
              </a>
              <a
                href="https://memory-friend.herokuapp.com/"
                className="portfolio-btn btn"
              >
                Website
              </a>
            </div>
          </div>
        </li>
        <li>
          <img src={today} alt="Multicolored calendar page" />
          <div className="overlay">
            <span className="title">DAILY SCHEDULE</span>
            <span className="proj-subtitles">
              A simple app for tracking your schedule.
            </span>
            <span className="tech-subtitles">⌨JavaScript, Moment, JQuery⌨</span>
            <div className="button-row">
              <a
                href="https://github.com/jsalexan/congenial-journey"
                className="portfolio-btn btn"
              >
                GitHub
              </a>
              <a
                href="https://jsalexan.github.io/congenial-journey/"
                className="portfolio-btn btn"
              >
                Website
              </a>
            </div>
          </div>
        </li>
        <li>
          <img src={regex} alt="Yellow planet graphic with asterisks" />
          <div className="overlay">
            <span className="title">REGEX GIST</span>
            <span className="proj-subtitles">Regex for matching email. </span>
            <span className="tech-subtitles">⌨Markdown, Regex, Gist⌨</span>
            <div className="button-row">
              <a
                href="https://github.com/jsalexan/regex-email"
                className="portfolio-btn btn"
              >
                GitHub
              </a>
              <a
                href="https://gist.github.com/jsalexan/e6893ff3f21a18280dc1e5bf52177000"
                className="portfolio-btn btn"
              >
                Website
              </a>
            </div>
          </div>
        </li>

        <li>
          <img src={weather} className="squares" alt="Weather application with icons" />
          <div className="overlay">
            <span className="title">WEATHER DASHBOARD</span>
            <span className="proj-subtitles">
              A weather dashboard with 5 day forecast.
            </span>
            <span className="tech-subtitles">⌨JavaScript, OpenWeather, JQuery⌨</span>
            <div className="button-row">
              <a
                href="https://github.com/jsalexan/weather-dashboard"
                className="portfolio-btn btn"
              >
                GitHub
              </a>
              <a
                href="https://jsalexan.github.io/weather-dashboard/"
                className="portfolio-btn btn"
              >
                Website
              </a>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
