import React from 'react'
import './Awards.css';
import SixGridCards from './SixGridCards';
import CloudCardSection from './CloudCardSection';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';

function Awards() {
    return (
        <div>
            <Navbar />
            <h1 className='headings'> Areas we support</h1>
            <p className='Careerheadcontent'>We are honored to be recognized for our accomplishments as a global leader,  a great employer and a responsible company.</p>


            <h1 className='headings'>Fostering a culture of belonging for <br></br> all our people to thrive</h1>

            <SixGridCards />

            <h1 className='headings'>Our brand strength continues <br></br> to drive value and success</h1>

            <CloudCardSection />
<Footer />
        </div>
    )
}

export default Awards;
