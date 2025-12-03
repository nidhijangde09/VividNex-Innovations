import React from 'react'
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import Aerospaceimg from '../../../../assets/images/Aerospaceimg.jpg';
import AerospaceStats from './AerospaceStats';
import AerospaceCardSection from './AerospaceCardSection';
import AerospaceSlider from './AerospaceSlider';
import AerospaceHoverPanel from './AerospaceHoverPanel';
import PartnersCarouselSection from './PartnersCarouselSection';
import AerospacePartnersSection from './AerospacePartnersSection';
import AerospaceSection from './AerospaceSection';
import './Aerospace.css';
import { Link } from 'react-router-dom';
import customer3 from '../../../../assets/images/customer3.jpg';
import AerospaceanddefenseCareer from './AerospaceanddefenseCareer';


function Aerospace() {
    return (
        <div>
            <Navbar />
            <div className="service-container">
                <div className="service-image">
                    <img src={Aerospaceimg} alt="Cloud consulting illustration" /> {/* Updated here */}
                </div>
                <div className="service-text">
                    <h1>Aerospace and defense services</h1>
                    <p>
                        The lines between physical and digital are fading. The metaverse opens new opportunities to interact, innovate, and engage—unlocking a powerful space to design inclusive, meaningful, and immersive experiences.
                    </p>
                </div>
            </div>
            <h1 className='headings'>Aerospace and defense </h1>
            <AerospaceStats />
            <h1 className='headings'> Innovate with Aerospace and defense </h1>
            <AerospaceCardSection />
            <h1 className='headings'>Support That Matters</h1>
            <AerospaceHoverPanel />

            <h1 className='headings'>What’s trending </h1>
            <AerospaceSlider />

            <h1 className='headings'>our partners </h1>
            <AerospacePartnersSection />

            <h1 className='headings'>Collaborations fueling progress</h1>
            <PartnersCarouselSection />

            <AerospaceanddefenseCareer />
            <Footer />
        </div>
    )
}

export default Aerospace;
