import React from 'react'
import { Link } from 'react-router-dom';
import ai from '../../../assets/images/ai.jpg';
import './Dataai.css';
import Navbar from '../../Navbar/Navbar';
import DataAIStats from './DataAIStats';
import DataAICardSection from './DataAICardSection';
import DataAIPartnersSection from './DataAIPartnersSection';
import DataAIGridHoverCards from './DataAIGridHoverCard';
import customer3 from '../../../assets/images/customer3.jpg';
import AISlider from './AISlider';

import Footer from '../../Footer/Footer';

export default function Dataai() {
  return (
    <div>
      <Navbar />
       <div className="service-container">
                <div className="service-image">
                    <img src={ai} alt="Cloud consulting illustration" />
                </div>
                <div className="service-text">
                    <h1>AI services</h1>
                    <p>
                       Generative AI is transforming businesses like no other technology in the past 30 years. Today, it drives business reinvention, with data readiness being the key to AI success.
                    </p>
                </div>
            </div>
            <DataAIStats />
            <DataAICardSection />
             <h1 className='headings-1'>What’s next in Data & AI ? </h1>
            <AISlider/>
             <h1 className='headings-1'>Partners in change </h1>
            <DataAIPartnersSection />
              <h1 className='headings-1'>Awards and recognition </h1>
            <DataAIGridHoverCards />
           
              <div className='head-container-6'>
                                <img src={customer3} alt="Logo" className='head-2-img' />
                                <h1>Data careers​</h1>
                                <p>
                             Harness AI and data to transform every part of your business responsibly.
                                </p>
                               <Link to="/" className="learn-more-btn">Learn More</Link>
                              </div>
                              <Footer />
    </div>
  )
}
