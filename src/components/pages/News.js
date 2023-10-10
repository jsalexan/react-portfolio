import React from "react";

export default function News() {
    return (
        <section id="news-page">
            <h1 className="news-heading">What I've Been Up To...</h1>
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
                                                                                
                                                                            Had a lot of fun figuring out the countdown mechanism, as well as adding some js to determine "minutes" vs "minute". Also, played with the Spotify API for the first time. Last, I incorporated a really fun confetti feature from a tutorial. Check it out!</p><br/><span className="meta">10/10/2023</span>
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
