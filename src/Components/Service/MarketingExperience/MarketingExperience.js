import React from 'react'
import './MarketingExperience.css';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import CloudStats from './CloudStats';
import Marketingimg from '../../../assets/images/Marketing.jpg';
import CloudCardSection from './CloudCardSection';
import PartnersCarouselSection from './PartnersCarouselSection';
import { Link } from 'react-router-dom';
import customer3 from '../../../assets/images/customer3.jpg';

function MarketingExperience() {
    return (
        <div>
            <Navbar />
            <div className="cloud-section">
                <div className="cloud-image">
                    <img src={Marketingimg} alt="Cloud illustration" />
                </div>
                <div className="cloud-text">
                    <h1>Cloud Transformation Consulting</h1>
                    <p>
                        Fuel innovation and adaptability with cloud computing—enabling your enterprise to continuously grow and excel in today’s dynamic digital landscape.                  </p>
                </div>
            </div>
<h1 className='headings'>Marketing now</h1>
            <CloudStats />
<h1 className='headings'>Reinvent with Marketing services </h1>
            <CloudCardSection />
<h1 className='headings'>Partners in change</h1>
            <PartnersCarouselSection />
               <div className='head-container-6'>
        <img src={customer3} alt="Logo" className='head-2-img' />
        <h1>Learning careers</h1>
        <p>
          Technology drives business reinvention, but people determine its success. Equip them with the skills to accelerate growth.
        </p>
        <Link to="/" className="learn-more-btn">Learn More</Link>
      </div>
            <Footer />
        </div>
    )
}

export default MarketingExperience
