import React from 'react'
import './Modernization.css';
import Navbar from '../../../Navbar/Navbar';
import Metaverseimg from '../../../../assets/images/Metaverse.jpg';
import ModernizationSection from './ModernizationSection';
import CapitalProjects from './CapitalProjects';
import AccordionSection from './AccordionSection';
import SixGridCards from './SixGridCards';
import Footer from '../../../Footer/Footer';



function Modernization2ET() {
    return (
        <div>
            <div>
                <Navbar />
                <div className="cloud-section">
                    <div className="cloud-image">
                        <img src={Metaverseimg} alt="Cloud illustration" />
                    </div>
                    <div className="cloud-text">
                        <h1>Similar cloud consulting offerings</h1>
                        <p>
                            Cloud computing fuels business innovation and adaptability. Empower your enterprise to continuously evolve and thrive in a fast-paced digital world.
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
        </div>
    )
}

export default Modernization2ET
