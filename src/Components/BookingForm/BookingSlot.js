import React from 'react';

function BookingSlot({ time }) {
  return (
    <div className="booking-slot">
      <p>{time}</p>
      {/* Add any additional details or actions, like booking the slot */}
    </div>
  );
}

export default BookingSlot;
