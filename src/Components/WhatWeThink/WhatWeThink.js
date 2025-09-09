import React from 'react';
import './WhatWeThink.css';
import FilterSection from './FilterSection'; // ⬅️ Import the new component
import Navbar from '../Navbar/Navbar';
import CardGrid from './CardGrid';
import GetForesight from './GetForesight';
import Footer from '../Footer/Footer';
function WhatWeThink() {
  return (
    <div>
   <Navbar />
   < FilterSection />
   <CardGrid />
   <GetForesight/>
   <Footer />
    </div>
  );
}

export default WhatWeThink;