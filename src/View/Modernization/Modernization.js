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
                    <h1>Cloud Advisory & Implementation</h1>
                    <p>
                        Fuel innovation and adaptability with cloud computing. Vividnex empowers organizations to stay ahead and flourish in a rapidly changing digital landscape.
                    </p>
                </div>
            </div>
            <h1 className='headings-1'>Why rethink and transform capital projects??</h1>
            <CapitalProjects />
            <h1 className='headings-1'><p>AI-driven change in infrastructure <br> </br>and capital projects</p>
</h1>
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
