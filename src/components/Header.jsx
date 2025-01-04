import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">MAUSAM.AI</div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#api">API</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contactus">Contact US</a></li>
        
        </ul>
      </nav>
    </header>
  );
};

export default Header;
