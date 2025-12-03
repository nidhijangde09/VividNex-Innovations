import React from 'react'
import './Locations.css';
import AccordionSection from './AccordionSection';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

function Locations() {
    return (
        <div>
            <Navbar />
            <h1 className='Careerheads'>Office Locations</h1>
            <p className='Careerheadcontent'>With a presence across major business hubs worldwide, VividNex operates in 50+ cities and serves clients across multiple countries.</p>
    
    <AccordionSection />
    <Footer />
        </div>
    )
}

export default Locations;

