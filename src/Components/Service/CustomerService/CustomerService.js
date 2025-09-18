import React from 'react';
import { Link } from 'react-router-dom';
import CustomerService2 from '../../../assets/images/CustomerService2.jpg';
import './CustomerService.css';
import Stats from './Stats';
import customer3 from '../../../assets/images/customer3.jpg';
import CustomerCardSection from './CustomerCardSection';
import PartnersCarousel from './PartnersCarousel';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import CustomerSlider from './CustomerSlider';
export default function CustomerService() {
    return (
        <div>
            <Navbar />
            <div className="service-container">
                <div className="service-image">
                    <img src={CustomerService2} alt="Cloud consulting illustration" />
                </div>
                <div className="service-text">
                    <h1>Turn every customer interaction into a catalyst for growth.</h1>
                    <p>
                        Inconsistent and impersonal interactions prevent organizations from effectively supporting their customers. Unlocking growth requires delivering seamless, data-driven experiences that feel intuitive, not reactive.
                    </p>
                </div>
            </div>
           
            <Stats />
             <h1 className='headings-1'>What’s next in Customer service ? </h1>
            <CustomerSlider/>
            
            <CustomerCardSection />
             <h1 className='headings-1'>Partners in change</h1>

            <PartnersCarousel />

          <div className='head-container-6'>
        <img src={customer3} alt="Logo" className='head-2-img' />
        <h1>Build your future with a career in customer service.</h1>
        <p>
    Design inspiring experiences and lasting moments that transform customer relationships with your brand.
        </p>
       <Link to="/" className="learn-more-btn">Learn More</Link>
      </div>
      <Footer />
        </div>
    );
}
