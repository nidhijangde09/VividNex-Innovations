import React from 'react'
import './Modernization.css';
import Navbar from '../../Components/Navbar/Navbar';
import Metaverseimg from '../../assets/images/Metaverse.jpg';
import ModernizationSection from './ModernizationSection';
import CapitalProjects from './CapitalProjects';
import AccordionSection from './AccordionSection';
import SixGridCards from './SixGridCards';
import Footer from '../../Components/Footer/Footer';



function Modernization2() {
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
                        Unlock agility and innovation with cloud computing. Vividnex enables your business to continuously transform and succeed in a digital-first world.
                        </p>
                    </div>
                </div>
                <h1 className='headings-1'>Why rethink the way capital projects are delivered</h1>
                <CapitalProjects />
                <h1 className='headings-1'><p>Reimagining infrastructure and capital projects <br></br> through AI</p>
</h1>
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

export default Modernization2
