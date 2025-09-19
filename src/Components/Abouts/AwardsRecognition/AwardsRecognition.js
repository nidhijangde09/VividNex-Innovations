import React from 'react'
import './AwardsRecognition.css';
import DataAIGridHoverCard from './DataAIGridHoverCard';
import Navbar from '../../Navbar/Navbar';
import CloudCardSection from './CloudCardSection';
import ConductSection from './ConductSection';
import InsightsGrid from './InsightsGrid';
import CardSection from './CardSection';
import Footer from '../../Footer/Footer';


function AwardsRecognition() {
    return (
        <div>
            <Navbar />
            <h1 className='Careerhead'>Industry of One</h1>
            <p className='Careerheadcontent'>Across industries, we bring together the capabilities needed to help clients change and grow quickly.</p>
            <h1 className='Careerheada'>Fostering a culture of belonging for<br></br> all our people to thrive</h1>
            <DataAIGridHoverCard />
            <h1 className='Careerheada'>Our brand strength continues to drive value and success</h1>
            <CloudCardSection />

            <h1 className='Careerheada'>Our brand strength continues to drive value and success</h1>
            <ConductSection />
            <h1 className='Careerheada'>Our brand strength continues to drive <br></br>value and success</h1>
            < InsightsGrid />
            <h1 className='Careerheada'>Our brand strength continues to drive <br></br>value and success</h1>
            <CardSection />
            <Footer />
        </div>
    )
}

export default AwardsRecognition
