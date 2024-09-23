
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import BookingPage from './Pages/BookingPage';
import HomeSection from './Pages/HomeSection';

function App() {
  return (
    <div >
      <Router>
      <Navbar />
      <Routes>
          <Route path="/reserve" element = {<BookingPage />} />
          <Route path="/" element = {<HomeSection />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
