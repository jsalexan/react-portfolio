import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header({ currentPage, handlePageChange }) {
    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Container>
  <Navbar.Brand href="#About" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About Me</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#Portfolio" onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Nav.Link>
      <Nav.Link href="#Resume" onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</Nav.Link>
      <Nav.Link href="#Contact" onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</Nav.Link>

</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      );
    }
    export default Header;






  