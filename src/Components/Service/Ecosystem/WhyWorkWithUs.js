import React from 'react';
import './WhyWorkWithUs.css';
import girl from '../../../assets/images/girl.jpg';

const WhyWorkWithUs = () => {
    return (
        <div className="whywork-section">
            <div className="whywork-content">
                <h2>Why work with us</h2>
                <div className="whywork-underline"></div>
                <p>
                    Embrace new ways of working to accelerate transformation with the world’s leading platforms. Our deep partnerships with today’s top technology providers—and tomorrow’s innovators—enable us to deliver co-developed solutions, industry-focused offerings, and advanced expertise. Together, we build integrated, interoperable systems that redefine what technology can achieve for your business.
                </p>
            </div>
            <div className="whywork-image">
                <img src={girl} alt="Team working" />
            </div>
        </div>
    );
};

export default WhyWorkWithUs;
