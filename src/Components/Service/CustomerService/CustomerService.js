import React from 'react';
import { Link } from 'react-router-dom';
import CustomerService2 from '../../../assets/images/CustomerService2.jpg';
import './CustomerService.css';
import Stats from './Stats';
import CustomerServiceCareer from './CustomerServiceCareer';
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
            <h1 className='headings'> Customer service </h1>
            <Stats />
            <h1 className='headings'>Innovate with Customer service</h1>
            <CustomerCardSection />

            <h1 className='headings'>What’s next in Customer service ? </h1>
            <CustomerSlider />


            <h1 className='headings'>Partners in change</h1>
            <PartnersCarousel />

            <CustomerServiceCareer />
            <Footer />
        </div>
    );
}
