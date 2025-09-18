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
                    <h1>About recruiting at <br></br>Accenture</h1>
                    <p>
                        Here’s what happens after you apply for a role:
                    </p>
                </div>
            </div>
            <h1 className='Careerhead'>Creating positive change</h1>
            <p className='Careerheadcontent'>We’re committed to creating positive change around the world and ensuring we act as<br></br> responsible business leaders for our people, our clients, and the communities we call home.</p>
            <AccordionSection />
            <h1 className='Careerhead'>Leading with vision and experience</h1>
            <QuoteSection />
            <h1 className='Careerhead1'>Industry of One</h1>
            <p className='Careerheadcontent1'>Across industries, we bring together the capabilities needed to help clients change and grow quickly.</p>
            <BankingHoverPanel />
            <CloudStats />

             <h1 className='Careerhead'>We’re recognized for the value we <br></br>create together</h1>
             <DataAIGridHoverCard />
             <Footer />
        </div>
    )
}

export default WhoWeAre;
