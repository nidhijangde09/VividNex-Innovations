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
                    <h1>Similar cloud consulting offerings</h1>
                    <p>
                        Cloud computing fuels business innovation and adaptability. Empower your enterprise to continuously evolve and thrive in a fast-paced digital world.
                    </p>
                </div>
            </div>
<h1 className='headings'>Marketing now</h1>
            <CloudStats />
<h1 className='headings'>Reinvent with Marketing services </h1>
            <CloudCardSection />
<h1 className='headings'>Partners in change</h1>
            <PartnersCarouselSection />
        
            <Footer />
        </div>
    )
}

export default MarketingExperience
