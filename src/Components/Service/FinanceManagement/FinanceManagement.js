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
                    <h1>Turn every customer interaction into a catalyst for growth.</h1>
                    <p>
                        Inconsistent and impersonal interactions prevent organizations from effectively supporting their customers. Unlocking growth requires delivering seamless, data-driven experiences that feel intuitive, not reactive.
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
