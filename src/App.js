import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Cloud from './Components/Service/Cloud/Cloud';
import './App.css';

const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Sample route */}
      <Route path="/Cloud" element={<Cloud />} />
      </Routes>
    </Router>
  );
};

export default App;
