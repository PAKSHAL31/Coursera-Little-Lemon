import React from 'react'

function SpecialCard({props}) {
  return (
      <div key={props.id} className="special-card">
            <img src={props.image} alt={props.name} />
            <div className="item-heading">
                <h3>{props.name}</h3> <p className="price">{props.price}</p>
            </div>
            <p className="item-description">{props.description}</p>
            <button className="order-btn">Order</button>
    </div>
  )
}

export default SpecialCard;
