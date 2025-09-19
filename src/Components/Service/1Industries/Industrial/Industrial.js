import React from 'react'
import Industrialimg from '../../../../assets/images/IndustrialImg.jpg';
import BankingHoverPanel from './BankingHoverPanel';
import BankingSlider from './BankingSlider';
import EnergyGridHoverCard from './EnergyGridHoverCard';

import EnergyCardSection from './EnergyCardSection';
import BankingSection from './BankingSection';
import customer3 from '../../../../assets/images/customer3.jpg';
import { Link } from 'react-router-dom';
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import EnergyStats from './EnergyStats';

function Industrial() {
    return (
        <div>
            <Navbar />
            <div className="service-container">
                <div className="service-image">
                    <img src={Industrialimg} alt="Cloud consulting illustration" /> {/* Updated here */}
                </div>
                <div className="service-text">
                    <h1>Industrial consulting</h1>
                    <p>
                        Change is the catalyst in the chemical industry. To capture emerging opportunities—from achieving net zero to launching breakthrough products—chemical companies must embrace innovation at every step.
                    </p>
                </div>
            </div>
            <h1 className='headings'>Chemical industry now</h1>
            <EnergyStats />

            <EnergyCardSection />

            <BankingHoverPanel />

            <BankingSlider />

            <EnergyGridHoverCard />

          
            <Footer />
        </div>

    )
}

export default Industrial;
