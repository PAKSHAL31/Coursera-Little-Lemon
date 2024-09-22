import React, { useState } from 'react';
import './BookingForm.css';
import { FaCalendar, FaClock, FaUser, FaGift } from 'react-icons/fa'; // Import icons

function BookingForm({availableTimes, updateTimes}) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'date') {
        updateTimes(value);
      }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation Data:', formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="date">
          <FaCalendar className="input-icon" />
          Choose date
        </label>
        <input 
          type="date" 
          id="date" 
          name="date" 
          value={formData.date} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div className="form-group">
        <label htmlFor="time">
          <FaClock className="input-icon" />
          Choose time
        </label>
        <select 
          id="time" 
          name="time" 
          value={formData.time} 
          onChange={handleChange} 
          required
        >
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="guests">
          <FaUser className="input-icon" />
          Number of guests
        </label>
        <input 
          type="number" 
          id="guests" 
          name="guests" 
          value={formData.guests} 
          onChange={handleChange} 
          min="1" 
          max="10" 
          required 
        />
      </div>

      <div className="form-group">
        <label htmlFor="occasion">
          <FaGift className="input-icon" />
          Occasion
        </label>
        <select 
          id="occasion" 
          name="occasion" 
          value={formData.occasion} 
          onChange={handleChange}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <input type="submit" value="Make Your Reservation" />
    </form>
  );
}

export default BookingForm;
