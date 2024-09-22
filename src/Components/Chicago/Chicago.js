import React from 'react';
import './Chicago.css';
import img from '../../Assets/restauranfood.jpg';
import { Link } from 'react-router-dom';
function Chicago() {
  return (
    <div>
      <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p style={{width:'400px'}}>We are a family owned Mediterranean restuarant, focused on tradtitonal recipies with a modern twist .</p>
        <Link to='/reserve'>
        <button className="cta-button">Reserve a Table</button>
        </Link>
      </div>
      <div className="hero-image">
        <img src={img} alt="Restaurant" />
      </div>
    </section>
    </div>
  )
}

export default Chicago;
