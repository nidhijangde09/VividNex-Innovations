import React from 'react';
import './WhyWorkWithUs.css';
import girl from '../../../assets/images/girl.jpg';

const WhyWorkWithUs = () => {
    return (
        <div className="whywork-section">
            <div className="whywork-content">
                <h2>Reasons to Collaborate with Us</h2>
                <div className="whywork-underline"></div>
                <p>
                   "Accelerate transformation and unlock business value with Vividnex and the world’s leading technology platforms. Our strong partnerships with top technology providers and emerging innovators enable us to deliver co-developed solutions, industry-specific offerings, and advanced expertise, creating integrated systems that drive measurable results."
                </p>
            </div>
            <div className="whywork-image">
                <img src={girl} alt="Team working" />
            </div>
        </div>
    );
};

export default WhyWorkWithUs;
