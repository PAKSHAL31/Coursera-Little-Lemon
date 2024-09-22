import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomeSection';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import BookingPage from './Pages/BookingPage';
import AboutSection from './Pages/AboutSection';
import HomeSection from './Pages/HomeSection';

function App() {
  return (
    <div >
      <Router>
      <Navbar />
      <Routes>
          <Route path="/about" element = {<AboutSection />} />
          <Route path="/reserve" element = {<BookingPage />} />
          <Route path="/" element = {<HomeSection />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
