import React from "react";
import phone from "../assets/Phone logo green (1).png"
import email from "../assets/Email logo green (1).png"
import github from "../assets/GitHub logo green (1).png"
import twitter from "../assets/Twitter logo green (1).png"

function Footer() {
  return (
    <footer className="footer">
    <section>
    <nav class="contact-me-container" id="contact-me">
        <ul>
            <li>
                <a href="tel:1-609-240-3935">
                    <img src={ phone } alt="My phone number is 609-240-3935"/></a>
            </li>
            <li>
                <a href="mailto:jsa.wa.us@gmail.com">
                    <img src={ email } alt="My email is jsa.wa.us@gmail.com"/></a>
            </li>
            <li>
                <a href="https://github.com/jsalexan">
                    <img src={ github } alt="My GitHub page"/></a>
            </li>
            <li>
                <a href="https://twitter.com/JSAH2000">
                    <img src={ twitter } alt="My Twitter profile."/></a>
            </li>
            
        </ul>
    </nav>
</section>

<h3>JAH Designs<br />2023</h3>

</footer>
)
};
export default Footer;