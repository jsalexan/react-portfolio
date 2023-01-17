import React from "react";
import phone from "../assets/Phone logo green (1).png"
import email from "../assets/Email logo green (1).png"
import github from "../assets/GitHub logo green (1).png"
import twitter from "../assets/Twitter logo green (1).png"

function Footer() {
  return (
    <footer className="footer">
    
        <nav className="contact-me-container" id="contact-me">
            <ul>
                <li>
                    <a href="tel:1-609-240-3935">
                    <i class="fa-solid fa-phone fa-2xl"></i></a>
                </li>
                <li>
                    <a href="mailto:jsa.wa.us@gmail.com">
                    <i class="fa-solid fa-envelope fa-2xl"></i></a>
                </li>
                <li>
                    <a href="https://github.com/jsalexan">
                    <i class="fa-brands fa-github fa-2xl"></i></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jennifer-alexander-hill/">
                    <i class="fa-brands fa-linkedin fa-2xl"></i></a>
                </li>
                <li>
                    <a href="https://twitter.com/JSAH2000">
                    <i class="fa-brands fa-twitter fa-2xl"></i></a>
                </li>
                
            </ul>
        </nav>


    <h3>JAH Designs<br />2023</h3>

</footer>
)
};
export default Footer;