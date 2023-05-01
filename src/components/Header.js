import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Signature from "../assets/Signature.png";

function Header({ currentPage, handlePageChange }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Navbar 
      collapseOnSelect 
      expand="lg" 
      variant="dark" 
      sticky="top"
    >
      <Container>
        <Link 
          to="/"
          onClick={() => handlePageChange("About")}
          className="nav-link active"
        >
          <img
            src={Signature}
            alt="fake signature of Jennifer Alexander-Hill"
            className="signature"
          />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Link 
              to="/"
              onClick={() => handlePageChange("About")}
              className={`nav-link ${currentPage === "About" ? "active" : ""}`}
            >
              About
            </Link>
            <Link 
              to="/Portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={`nav-link ${currentPage === "Portfolio" ? "active" : ""}`}
            >
              Portfolio
            </Link>
            <Link 
              to="/Resume"
              onClick={() => handlePageChange("Resume")}
              className={`nav-link ${currentPage === "Resume" ? "active" : ""}`}
            >
              Resume
            </Link>
            <Link 
              to="/Contact"
              onClick={() => handlePageChange("Contact")}
              className={`nav-link ${currentPage === "Contact" ? "active" : ""}`}
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
