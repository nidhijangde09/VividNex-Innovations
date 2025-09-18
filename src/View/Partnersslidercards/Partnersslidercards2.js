import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom';
import CustomerService2 from '../../assets/images/CustomerService2.jpg';
import './Partnersslidercards.css';
import CapitalProjects from './CapitalProjects';
import SixGridCards from './SixGridCards';
import AccordionSection from './AccordionSection';
import Footer from '../../Components/Footer/Footer';

function Partnersslidercards2() {
  return (
    <div>
            <Navbar />
            <div className="service-container">
                <div className="service-image">
                    <img src={CustomerService2} alt="Cloud consulting illustration" />
                </div>
                <div className="service-text">
                    <h1>Accenture + Microsoft</h1>
                    <p>
                        Inconsistent and impersonal interactions prevent organizations from effectively supporting their customers. Unlocking growth requires delivering seamless, data-driven experiences that feel intuitive, not reactive.
                    </p>
                </div>
            </div>
            <h1 className='headings-1'>Why transform capital project delivery?</h1>
            <CapitalProjects />
            <h1 className='headings-1'>Reinvent your industry</h1>
            <AccordionSection />
            <h1 className='headings-1'>Awards & recognition</h1>
            <SixGridCards />
            <Footer />
        </div>
  )
}

export default Partnersslidercards2
