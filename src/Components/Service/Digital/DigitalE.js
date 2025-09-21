import React from 'react'
import './DigitalE.css';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import DigitalEIMG from '../../../assets/images/DigitalE.jpg'
import DataAIStats from './DataAIStats';
import DataAICardSection from './DataAICardSection';
import DataAIPartnersSection from './DataAIPartnersSection';
import SupplyChainHoverPanel from './SupplyChainHoverPanel';
import DataAIGridHoverCard from './DataAIGridHoverCard';
import customer3 from '../../../assets/images/customer3.jpg';
import Footer from '../../Footer/Footer';
import DigitalCareer from './DigitalCareer';
function DigitalE() {
    return (
        <div>
            <Navbar />
            <div className="service-container">
                <div className="service-image">
                    <img src={DigitalEIMG} alt="Cloud consulting illustration" />
                </div>
                <div className="service-text">
                    <h1>Digital engineering services</h1>
                    <p>
                        Generative AI is transforming businesses like no other technology in the past 30 years. Today, it drives business reinvention, with data readiness being the key to AI success.
                    </p>
                </div>
            </div>
            <h1 className='headings'>Digital engineering now</h1>
            <DataAIStats />
            <h1 className='headings'>Reinvent with cloud</h1>
            <DataAICardSection />
            <h1 className='headings'>Partners in change </h1>
            <DataAIPartnersSection />
            <h1 className='headings'> Areas we support</h1>
            <SupplyChainHoverPanel />
            <h1 className='headings'>Awards and recognition </h1>
            <DataAIGridHoverCard />

            <DigitalCareer />
            <Footer />

        </div>
    )
}

export default DigitalE
