import React, { useReducer, useEffect } from 'react';
import BookingForm from '../Components/BookingForm/BookingForm';
const initialState = [];

const timesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TIMES':
      return action.payload;
    default:
      return state;
  }
};

function BookingPage() {
  const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function(formData) {
    return true;
};
  
  const [availableTimes, dispatch] = useReducer(timesReducer, initialState);


  // Fetch available times for today's date
  const initializeTimes = async () => {
    const today = new Date();// Format as YYYY-MM-DD
    const times = await fetchAPI(today); // Call the API
    dispatch({ type: 'SET_TIMES', payload: times });
  };

  // Update available times based on selected date
  const updateTimes = async (selectedDate) => {
    const times = await fetchAPI(new Date(selectedDate)); // Call the API
    dispatch({ type: 'SET_TIMES', payload: times });
  };

  
    function submitForm (formData) {
        if (submitAPI(formData)) {
            //navigate("/confirmed")
            console.log("Submitted")
        }
    }
  // Initialize times on component mount
  useEffect(() => {
    initializeTimes();
  }, []);

  return (
    <div>
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />
    </div>
  );
}

export default BookingPage;
