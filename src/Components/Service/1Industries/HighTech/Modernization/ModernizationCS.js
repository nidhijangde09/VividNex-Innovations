import React from 'react'
import './Modernization.css';
import Navbar from '../../../../Navbar/Navbar';
import Metaverseimg from '../../../../../assets/images/Metaverse.jpg';
import ModernizationSection from './ModernizationSection';
import CapitalProjects from './CapitalProjects';
import AccordionSection from './AccordionSection';
import SixGridCards from './SixGridCards';
import Footer from '../../../../Footer/Footer';

function Modernization() {
    return (
        <div>
            <Navbar />
            <div className="cloud-section">
                <div className="cloud-image">
                    <img src={Metaverseimg} alt="Cloud illustration" />
                </div>
                <div className="cloud-text">
                    <h1>Transform ideas into plans, and plans into success</h1>
                    <p>
                       Craft and execute customer experience strategies, workforce solutions, and operating models that enhance satisfaction while fueling profitability and long-term growth.
                    </p>
                </div>
            </div>
            <h1 className='headings-1'>Why reinvent capital projects?</h1>
            <CapitalProjects />
            <h1 className='headings-1'>How vision, strategy, and execution are evolving in today’s business landscape</h1>
            <ModernizationSection />
            <h1 className='headings-1'>What you can do</h1>
            <AccordionSection />
            <h1 className='headings-1'>Awards & recognition</h1>
            <SixGridCards />
            <Footer />
        </div>
    )
}

export default Modernization
