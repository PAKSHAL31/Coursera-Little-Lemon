import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <nav className="navbar">
      <div className="logo">
        Little Lemon
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/reserve">Reservations</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/orderonline">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar
