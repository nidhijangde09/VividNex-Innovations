import React from 'react'
import './Lifescience';
import Navbar from '../../../Navbar/Navbar';
import Lifescienceimg from '../../../../assets/images/LifeScience.jpg';
import Footer from '../../../Footer/Footer';
import BankingStats from './BankingStats';
import BankingCardSection from './BankingCardSection';
import BankingSlider from './BankingSlider';
import BankingGridHoverCard from './BankingGridHoverCard';
import BankingSection from './BankingSection';
import customer3 from '../../../../assets/images/customer3.jpg';
import { Link } from 'react-router-dom';
import PartnersCarouselSection from './PartnersCarouselSection';

function Lifescience() {
    return (
        <div>
            <Navbar />
            <div className="service-container">
                <div className="service-image">
                    <img src={Lifescienceimg} alt="Cloud consulting illustration" /> {/* Updated here */}
                </div>
                <div className="service-text">
                    <h1>Lifescience consulting</h1>
                    <p>
                        The lines between physical and digital are fading. The metaverse unlocks new opportunities to interact, innovate, and engage. It’s a powerful new space to design inclusive, meaningful, and immersive experiences.
                    </p>
                </div>
            </div>
            <h1 className='headings'>Lifescience now</h1>
            <BankingStats />
            <h1 className='headings'>How to reinvent</h1>
            <BankingCardSection />

            <h1 className='headings'>What’s trending in banking</h1>
            <BankingSlider />
            <h1 className='headings'>Awards & recognition</h1>
            <BankingGridHoverCard />
            <h1 className='headings'>Partners in change</h1>
            <PartnersCarouselSection />
  
           

            <Footer />
        </div>
    )
}

export default Lifescience
