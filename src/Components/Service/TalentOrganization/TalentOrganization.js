import React from 'react'
import Navbar from '../../Navbar/Navbar';
import sustainabilityImg from '../../../assets/images/sustainability.jpg';
import TalentOrganizationStats from './TalentOrganizationStats';
import TalentOrganizationCardSection from './TalentOrganizationCardSection';
import TalentOrganizationSlider from './TalentOrganizationSlider';

import PartnersCarouselSection from './PartnersCarouselSection';
import TalentOrganizationPartnersSection from './TalentOrganizationPartnersSection';
import TalentOrganizationsHoverCards from './TalentOrganizationsHoverCards';
import TalentOrganizationCareer from './TalentOrganizationCareer';
import { Link } from 'react-router-dom';

import Footer from '../../Footer/Footer';

function TalentOrganization() {
    return (
        <div>
            <Navbar />
            <div className="service-container">
                <div className="service-image">
                    <img src={sustainabilityImg} alt="Cloud consulting illustration" /> {/* Updated here */}
                </div>
                <div className="service-text">
                    <h1>Talent & Organization</h1>
                    <p>
                        The boundaries between physical and digital worlds are dissolving. The metaverse opens new opportunities to connect, innovate, and create—shaping inclusive, meaningful, and immersive experiences.
                    </p>
                </div>
            </div>
            <h1 className='headings'>Talent & Organization </h1>
            < TalentOrganizationStats />
            <h1 className='headings'>Innovate with  Talent & Organization</h1>
            <TalentOrganizationCardSection />
            <h1 className='headings'>What’s trending</h1>
            <TalentOrganizationSlider />
           
            <h1 className='headings'>Partners in change</h1>
            <PartnersCarouselSection />
            <h1 className='headings'>See our extended partner ecosystem</h1>
            <TalentOrganizationPartnersSection />
            <h1 className='headings'>Awards and recognition</h1>
            <TalentOrganizationsHoverCards />
          <TalentOrganizationCareer />
            <Footer />
        </div>
    )
}

export default TalentOrganization
