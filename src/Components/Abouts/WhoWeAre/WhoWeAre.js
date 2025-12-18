import React from 'react'
import Navbar from '../../Navbar/Navbar';
import aboutimg from '../../../assets/images/aboutimg.jpg';
import './WhoWeAre.css';
import AccordionSection from './AccordionSection';
import QuoteSection from './QuoteSection';
import BankingHoverPanel from './BankingHoverPanel';
import CloudStats from './CloudStats';
import DataAIGridHoverCard from './DataAIGridHoverCard';
import Footer from '../../Footer/Footer';



function WhoWeAre() {
    return (
        <div>
            <Navbar />
            <div className="service-container">
                <div className="service-image">
                    <img src={aboutimg} alt="Cloud consulting illustration" />
                </div>
                <div className="service-text">
                    <h1>About recruiting at <br></br>Vividnex</h1>
                    <p>
                        Here’s what happens after you apply for a role:
                    </p>
                </div>
            </div>
            <h1 className='Careerhead'>Driving meaningful impact</h1>
            <p className='Careerheadcontent'>We’re dedicated to making a meaningful impact globally—acting responsibly toward our people, our clients, and the communities we serve.</p>
            <AccordionSection />
           
            <h1 className='Careerhead1'>Industry </h1>
            <p className='Careerheadcontent1'>At VividNex, we bring together technology, strategy, and innovation to help every client transform with speed and confidence. Across industries, we deliver tailored solutions that empower growth and lasting impact.</p>
            <BankingHoverPanel />
            <CloudStats />

             <h1 className='Careerhead'>Recognized for the difference we make together</h1>
             <DataAIGridHoverCard />
             <Footer />
        </div>
    )
}

export default WhoWeAre;












