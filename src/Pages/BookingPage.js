import React from 'react'
import BookingForm from '../Components/BookingForm/BookingForm';
import { useReducer } from 'react';
import BookingSlot from '../Components/BookingForm/BookingSlot';
const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return initialState; // Update this to return different times based on the date
    default:
      return state;
  }
};

function BookingPage() {
  
const [availableTimes, dispatch] = useReducer(timesReducer, initialState);

const updateTimes = (selectedDate) => {
  dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
};
  return (
    
    <div>
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
      <div className="booking-slots">
        <h2>Available Booking Slots:</h2>
        {availableTimes.map((time, index) => (
          <BookingSlot key={index} time={time} />
        ))}
      </div>
    </div>
  ) 
}

export default BookingPage;
