import React from 'react'
import './Locations.css';
import AccordionSection from './AccordionSection';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

function Locations() {
    return (
        <div>
            <Navbar />
            <h1 className='Careerhead'>Industry of One</h1>
            <p className='Careerheadcontent'>Across industries, we bring together the capabilities needed to help clients change and grow quickly.</p>
    
    <AccordionSection />
    <Footer />
        </div>
    )
}

export default Locations;

