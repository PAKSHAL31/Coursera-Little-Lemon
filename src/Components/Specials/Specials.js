import React from 'react';
import './Specials.css';
import img1 from '../../Assets/greeksalad.jpg';
import img2 from '../../Assets/lemondessert.jpg';
import img3 from '../../Assets/bruchetta.svg';

function Specials() {
    const specialsData = [
        { id: 1, name: 'GreekSalad', price: '$12.99', description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',image:img1 },
        { id: 2, name: 'Bruschetta', price: '$7.99', description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',image:img2 },
        { id: 3, name: 'Lemon Dessert', price: '$5.99', description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",image:img3 }
      ];
  return (
    <div>
       <section className="specials">
      <div className="specials-header">
        <h1>This Week's Specials !</h1>
        <button className="menu-button">Online Menu</button>
      </div>
      <div className="specials-cards">
        {specialsData.map((special) => (
          <div key={special.id} className="special-card">
            <img src={special.image} alt={special.name} />
            <div className="item-heading">
                <h3>{special.name}</h3> <p className="price">{special.price}</p>
            </div>
            <p className="item-description">{special.description}</p>
            <button className="order-btn">Order</button>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default Specials;
