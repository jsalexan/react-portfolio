import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <nav className="fixed-bottom" id="contact-me">
        <div className='contact-me-container' >
        <ul>
          <li>
            <a href="tel:1-609-240-3935">
              <i className="fa-solid fa-phone fa-2xl"></i>
            </a>
          </li>
          <li>
            <a href="mailto:jsa.wa.us@gmail.com">
              <i className="fa-solid fa-envelope fa-2xl"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/jsalexan">
              <i className="fa-brands fa-github fa-2xl"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jennifer-alexander-hill/">
              <i className="fa-brands fa-linkedin fa-2xl"></i>
            </a>
          </li>
        </ul>
        </div>
        <div>
          <h3>JAH Designs 2023</h3>
        </div>
      </nav>

    </footer>
  );
}
export default Footer;
