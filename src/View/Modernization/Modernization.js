import React from 'react'
import './Modernization.css';
import Navbar from '../../Components/Navbar/Navbar';
import Metaverseimg from '../../assets/images/Metaverse.jpg';
import ModernizationSection from './ModernizationSection';
import CapitalProjects from './CapitalProjects';
import AccordionSection from './AccordionSection';
import SixGridCards from './SixGridCards';
import Footer from '../../Components/Footer/Footer';

function Modernization() {
    return (
        <div>
            <Navbar />
            <div className="cloud-section">
                <div className="cloud-image">
                    <img src={Metaverseimg} alt="Cloud illustration" />
                </div>
                <div className="cloud-text">
                    <h1>Cloud Transformation</h1>
                    <p>
                       Unlock business value with a modernized cloud approach
                    </p>
                </div>
            </div>
            <h1 className='headings-1'>Why reinvent capital projects?</h1>
            <CapitalProjects />
            <h1 className='headings-1'>How AI is changing infrastructure <br></br> and capital projects</h1>
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
