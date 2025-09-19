import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom';
import CustomerService2 from '../../assets/images/CustomerService2.jpg';
import './Partnersslidercards.css';
import CapitalProjects from './CapitalProjects';
import SixGridCards from './SixGridCards';
import AccordionSection from './AccordionSection';
import Footer from '../../Components/Footer/Footer';


function Partnersslidercards() {
    return (
        <div>
            <Navbar />
            <div className="service-container">
                <div className="service-image">
                    <img src={CustomerService2} alt="Cloud consulting illustration" />
                </div>
                <div className="service-text">
                    <h1>Transform every customer engagement into an opportunity to drive growth.</h1>
                    <p>
                        Inconsistent, impersonal interactions can stall growth. Unlock opportunities by providing seamless, predictive, and data-driven customer experiences.
                        </p>

                </div>
            </div>
            <h1 className='headings-1'><p>Why revolutionize capital project delivery to drive better outcomes?</p>?</h1>
            <CapitalProjects />
            <h1 className='headings-1'>Reinvent your industry</h1>
            <AccordionSection />
            <h1 className='headings-1'>Honors & Achievements</h1>
            <SixGridCards />
            <Footer />
        </div>
    )
}

export default Partnersslidercards
