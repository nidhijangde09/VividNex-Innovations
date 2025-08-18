import React from 'react'
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import Aerospaceimg from '../../../../assets/images/Aerospaceimg.jpg';
import AerospaceStats from './AerospaceStats';
import AerospaceCardSection from './AerospaceCardSection';
import AerospaceSlider from './AerospaceSlider';
import AerospaceHoverPanel from './AerospaceHoverPanel';
import PartnersCarouselSection from './PartnersCarouselSection';
import AerospacePartnersSection from './AerospacePartnersSection';
import AerospaceSection from './AerospaceSection';
import './Aerospace.css';
import { Link } from 'react-router-dom';
import customer3 from '../../../../assets/images/customer3.jpg';



function Aerospace() {
    return (
        <div>
            <Navbar />
            <div className="service-container">
                <div className="service-image">
                    <img src={Aerospaceimg} alt="Cloud consulting illustration" /> {/* Updated here */}
                </div>
                <div className="service-text">
                    <h1>Aerospace and defense services</h1>
                    <p>
                        The lines between physical and digital are fading. The metaverse unlocks new opportunities to interact, innovate, and engage. It’s a powerful new space to design inclusive, meaningful, and immersive experiences.+
                    </p>
                </div>
            </div>
            <h1 className='headings-1'>Aerospace and defense now</h1>
            <AerospaceStats />
            <h1 className='headings-1'>How to reinvent</h1>
            <AerospaceCardSection />
            <h1 className='headings-1'>Areas we support</h1>
            <AerospaceHoverPanel />

            <h1 className='headings-1'>What’s trending</h1>
            <AerospaceSlider />
            
            <h1 className='headings-1'>Our extended partner ecosystem</h1>
            <AerospacePartnersSection />
           
            <h1 className='headings-1'>Partners in change</h1>
            <PartnersCarouselSection />

             <h1 className='headings-1'>Our Leader</h1>
             <AerospaceSection />
               <div className='head-container-6'>
        <img src={customer3} alt="Logo" className='head-2-img' />
        <h1>Cloud careers</h1>
        <p>
          Join our cloud team to help clients across industries build smarter, future-ready solutions.
        </p>
        <Link to="/" className="learn-more-btn">Learn More</Link>
      </div>
            <Footer />
        </div>
    )
}

export default Aerospace;
