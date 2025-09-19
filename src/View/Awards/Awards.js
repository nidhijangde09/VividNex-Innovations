import React from 'react'
import './Awards.css';
import SixGridCards from './SixGridCards';
import CloudCardSection from './CloudCardSection';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';

function Awards() {
    return (
        <div>
            <Navbar />
            <h1 className='headings'> Areas we support</h1>
            <p className='Careerheadcontent'>Vividnex is honored to be acknowledged as a global leader, a top employer, and a company committed to responsibility and impact.</p>



            <h1 className='headings'>Building a culture of belonging to help <br></br> every team member thrive and succeed.</h1>

            <SixGridCards />

            <h1 className='headings'>Leveraging our brand strength <br></br> to deliver impact and drive growth.</h1>

            <CloudCardSection />
<Footer />
        </div>
    )
}

export default Awards;
