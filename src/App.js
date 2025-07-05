import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Cloud from './Components/Service/Cloud/Cloud';
import CareerPage from './Components/Career/CareerPage';
import Service from './Components/Service/What-we-do/Service';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cloud" element={<Cloud />} />
        <Route path="/CareerPage" element={<CareerPage />} />
        <Route path="/Service" element={<Service />} />
      </Routes>
    </Router>
  );
};

export default App;
