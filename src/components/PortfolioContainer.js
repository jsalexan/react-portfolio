import React, { useState } from 'react';
import Header from './Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './Footer';
import News from './pages/News';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'News') {
      return <News />;
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

    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
    
      {renderPage()}

      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />

    </div>
  );

  };