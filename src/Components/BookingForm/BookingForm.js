import React, { useState } from 'react';
import './BookingForm.css';
import { FaCalendar, FaClock, FaUser, FaGift } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
function BookingForm({ availableTimes, updateTimes,submitForm }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); 

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    submitForm(formData);
    setIsModalOpen(true); 
  };

  const closeModalAndRedirect = () => {
    setIsModalOpen(false);
    navigate('/'); // Redirect to homepage
  };

  return (
    <>
    {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Booking Confirmed</h2>
            <p>Your table has been successfully booked!</p>
            <button onClick={closeModalAndRedirect}>Ok</button>
          </div>
        </div>
      )}
    {!isModalOpen && (<form className="booking-form" onSubmit={handleSubmit}>
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
          aria-label="Choose date" 
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

      <input type="submit" value="Make Your Reservation" aria-label="Submit reservation"/>
    </form>)}
  
    
      </>
);
}

export default BookingForm;
