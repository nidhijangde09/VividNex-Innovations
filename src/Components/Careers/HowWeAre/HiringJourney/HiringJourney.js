import React from 'react';
import './HiringJourney.css';
import Navbar from '../../../Navbar/Navbar';
import aboutimg from '../../../../assets/images/aboutimg.jpg';
import BankingHoverPanel from './BankingHoverPanel';

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
                    <h1>About recruiting process <br></br> at Vividnex Accenture</h1>
                    <p>
                       After applying, this is what your Vividnex journey looks like:
                    </p>
                </div>
            </div>
        <BankingHoverPanel />
        </div>
    )
}

export default HiringJourney

