import React from "react";

export default function News() {
    return (
        <section id="news-page">
            <h1 className="news-heading">What I've Been Up To...</h1>
            <div className="news-container">
                <div id="news-left">
                    <a href="https://jsalexan.github.io/muppafones/">
                        <img className="news-image" src="https://res.cloudinary.com/dlxjksvbc/image/upload/v1699055738/Puff_-_circle_v4bdi2.png" alt="Small teal puff getting hit with wooden mallet"></img>
                    </a>
                </div>
                <div id="news-right">
                    <div className="update1">
                        <h3 className="news-headline">Puffafones</h3>
                        <p className="news-text">As a Muppets fan, I wanted to create my version of the <a href="https://www.youtube.com/watch?v=p1YAUeOk2Hk">Muppaphones</a>. This was an exercise in using CSS transitions and animations, custom audio, event listeners, DOM manipulation, page interaction flow, conditional logic, and creativity. Next step is to put in some protocols to prevent the animation from sticking when overloaded. I'd like to add more animation/sound to the puffs so they aren't static as they wait to be whacked. It would be interesting to allow the user to select a song from a list and then be given a color guide to play it. Maybe even with backing tracks. I'd like to make the app responsive in some way. Right now it only works correctly on desktop.
</p><br/><span className="meta">11/03/2023</span>
                    </div>
                </div>
            </div>
            <div className="news-container">
                <div id="news-left">
                    <a href="https://github.com/jsalexan/chrome-ext-concerts">
                        <img className="news-image" src="https://res.cloudinary.com/dlxjksvbc/image/upload/v1697757536/Chrome_-circle_fiv2tj.png" alt="Two colorful wings"></img>
                    </a>
                </div>
                <div id="news-right">
                    <div className="update1">
                        <h3 className="news-headline">Upcoming Concerts Chrome Extension</h3>
                        <p className="news-text">This was a quick project, but really interesting to learn. With the help of a <a href="https://www.youtube.com/watch?v=B8Ihv3xsWYs">tutorial</a> and Rapid API, I created my own Chrome extension for viewing upcoming concerts in my area. To personalize it, I added JavaScript to show the user concerts 30 days out from today's date,included code to show and reformat the date of the event, and added pictures. Last I added CSS to style the data. This won't be my last extension. Very cool!
</p><br/><span className="meta">10/19/2023</span>
                    </div>
                </div>
            </div>
            <div className="news-container">
                <div id="news-left">
                    <a href="https://jsalexan.github.io/tay-clock/">
                        <img className="news-image" src="https://res.cloudinary.com/dlxjksvbc/image/upload/v1696973508/Taylor_Circle_rqzbti.png" alt="Taylor Swift concert poster"></img>
                    </a>
                </div>
                <div id="news-right">
                    <div className="update1">
                        <h3 className="news-headline">New Taylor Swift Countdown!</h3>
                        <p className="news-text">In response to all the excitement around the Era's tour, I've created this simple countdown app. Select the concert you're attending, then count the seconds until the big event.
                                                                                
                                                                            Had a lot of fun figuring out the countdown mechanism, as well as adding some js to determine "minutes" vs "minute". Also, played with the Spotify API for the first time. Last, I incorporated a really fun confetti feature from a CSS tutorial. Check it out!</p><br/><span className="meta">10/10/2023</span>
                    </div>
                </div>

            </div>
            <div className="news-container">
                <div id="news-left">
                    <a href="https://fairmountparkpta.org/">
                        <img className="news-image" src="https://res.cloudinary.com/dlxjksvbc/image/upload/v1696974250/FEPTA_-circle_h5vvor.png" alt="Two colorful wings"></img>
                    </a>
                </div>
                <div id="news-right">
                    <div className="update1">
                        <h3 className="news-headline">WordPress Freelancing</h3>
                        <p className="news-text">Over the summer, I was contracted to redesign the website for a PTA group in West Seattle. I hadn't worked with WordPress in a number of years, so it was a fun break. The site will be maintained by numerous people, with limited to no tech background, so it was important to keep that in mind during development, while helping them achieve their vision. Take a look at the site! There have been some changes since I turned it over, but you can get a sense of the project.</p><br/><span className="meta">09/09/2023</span>
                    </div>
                </div>
            </div>
            <div className="upcoming-news"></div>
        </section>
    )
}
