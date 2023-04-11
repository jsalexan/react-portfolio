import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Signature from "../assets/Signature.png";

function Header({ currentPage, handlePageChange }) {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <Navbar 
    collapseOnSelect expand="lg" variant="dark" sticky="top">
      <Container>
      <Navbar.Brand
  href="/"
  onClick={() => handlePageChange("About")}
  className="nav-link active"
>
  <img
    src={Signature}
    alt="fake signature of Jennifer Alexander-Hill"
    className="signature"
  />
</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link
              href="#About"
              onClick={() => handlePageChange("About")}
              className="nav-link"
              
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#Portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className="nav-link"
              
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="#Resume"
              onClick={() => handlePageChange("Resume")}
              className="nav-link"
              
            >
              Resume
            </Nav.Link>
            <Nav.Link
              href="#Contact"
              onClick={() => handlePageChange("Contact")}
              className="nav-link"
              
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
