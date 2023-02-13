import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import banner from '../assets/Bordertop.png';



export default function Header() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
  }
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (

     <header>
     
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* <img className="bordertop img-responsive" src={ banner } alt="celtic pattern" /> */}
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      </header>
  );

  };