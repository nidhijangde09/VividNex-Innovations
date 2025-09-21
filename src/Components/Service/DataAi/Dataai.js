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
import DataAiCareer from './DataAiCareer';

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
              <h1 className='headings'> Data & AI  </h1>
            <DataAIStats />
              <h1 className='headings'>Innovate with Data & AI ? </h1>
            <DataAICardSection />
             <h1 className='headings'>What’s next in Data & AI ? </h1>
            <AISlider/>
             <h1 className='headings'>Partners in change </h1>
            <DataAIPartnersSection />
              <h1 className='headings'>Awards and recognition </h1>
            <DataAIGridHoverCards />
           
        <DataAiCareer/>
                              <Footer />
    </div>
  )
}
