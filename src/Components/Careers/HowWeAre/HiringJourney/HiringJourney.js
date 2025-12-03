import React from 'react';
import './HiringJourney.css';
import Navbar from '../../../Navbar/Navbar';
import aboutimg from '../../../../assets/images/aboutimg.jpg';
import BankingHoverPanel from './BankingHoverPanel';
import ConnectSection from './ConnectSection';
import Footer from '../../../Footer/Footer';
import AccordionSection from './AccordionSection';
function HiringJourney() {
    return (
        <div>
            <Navbar />
           {/* Service section */}
            <div className="service-container">
                <div className="service-image">
                    <img src={aboutimg} alt="Cloud consulting illustration" />
                </div>
                <div className="service-text">
                    <h1>About recruiting process <br></br> at Vividnex </h1>
                    <p>
                       After applying, this is what your Vividnex journey looks like:
                    </p>
                </div>
            </div>
        <BankingHoverPanel />
  
<AccordionSection />

        <ConnectSection />

        <Footer />
        </div>
    )
}

export default HiringJourney

