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
  className={currentPage === "About" ? "nav-link active" : "nav-link"}
>
  About
</Nav.Link>
<Nav.Link
  href="#Portfolio"
  onClick={() => handlePageChange("Portfolio")}
  className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
>
  Portfolio
</Nav.Link>
<Nav.Link
  href="#Resume"
  onClick={() => handlePageChange("Resume")}
  className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
>
  Resume
</Nav.Link>
<Nav.Link
  href="#Contact"
  onClick={() => handlePageChange("Contact")}
  className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
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
