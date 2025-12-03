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
            <h1 className='Careerheads'>Awards & Recognition</h1>
            <p className='Careerheadcontent'>Proud to be acknowledged for our achievements as an industry leader, an employer of choice, and a company committed to responsibility.</p>
            <h1 className='Careerheada'>Cultivating a community where everyone feels they belong and can reach their potential</h1>
            <DataAIGridHoverCard />
            <h1 className='Careerheada'>Our trusted brand delivers success and impact</h1>
            <CloudCardSection />

            <h1 className='Careerheada'>Operating responsibly with sustainability at our core</h1>
            <ConductSection />
            <h1 className='Careerheada'>Empowering our people to learn, grow, and succeed</h1>
            < InsightsGrid />
            <h1 className='Careerheada'>Dedicated to continuous growth and improvement</h1>
            <CardSection />
            <Footer />
        </div>
    )
}

export default AwardsRecognition
