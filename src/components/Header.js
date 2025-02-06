import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Jodi's Portfolio</h1>
      <nav className="header-nav">
        <ul className="header-list">
          <li className="header-list-item"><Link to="/" className="header-link">Home</Link></li>
          <li className="header-list-item"><Link to="/about" className="header-link">About</Link></li>
          <li className="header-list-item"><Link to="/projects" className="header-link">Projects</Link></li>
          <li className="header-list-item"><Link to="/contact" className="header-link">Contact</Link></li>
          <li className="header-list-item"><Link to="/blog" className="header-link">Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
