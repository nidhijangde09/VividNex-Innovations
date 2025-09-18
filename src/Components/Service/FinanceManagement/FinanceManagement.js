import React from 'react'
import Navbar from '../../Navbar/Navbar'
import risk1 from'../../../assets/images/risk1.jpg';
import  './FinanceManagement.css';

import FinanceManagementStats from './FinanceManagementStats';
import FinanceManagementCardSection from './FinanceManagementCardSection';
import FinanceManagementSlider from './FinanceManagementSlider';
import FinancePartnersSlider from './FinancePartnersSlider';
import FinanceSixGridCards from './FinanceSixGridCards';

import Footer from '../../Footer/Footer';

function FinanceManagement() {
  return (
    <div>
        <Navbar />
       <div className="service-container">
                <div className="service-image">
                    <img src={risk1} alt="Cloud consulting illustration" />
                </div>
                <div className="service-text">
                    <h1>Transform every customer interaction into an opportunity for growth.</h1>
                    <p>
                       "Fragmented and impersonal interactions hinder organizations from effectively serving their customers. Driving growth requires seamless, data-powered experiences that feel intuitive rather than reactive."
                    </p>
                </div>
            </div>
            <FinanceManagementStats />
            <FinanceManagementCardSection />
           <h1 className='headings'>What’s trending in finance and risk <br></br> management</h1>
            <FinanceManagementSlider />
            <h1 className='headings'>Awards and recognition</h1>
            <FinanceSixGridCards />
            <h1 className='headings'>Partners in change</h1>
            <FinancePartnersSlider />
             
       <Footer />
    </div>
  )
}

export default FinanceManagement
