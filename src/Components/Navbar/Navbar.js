import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Logo.svg';
import { useState } from 'react';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar" style={{zIndex:'3'}}>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className={`nav-links-container ${isOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/reserve" onClick={toggleMenu}>Reservations</Link></li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? (
            <span className="close">&times;</span>
          ) : (
            <span className="open">&#9776;</span>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar
