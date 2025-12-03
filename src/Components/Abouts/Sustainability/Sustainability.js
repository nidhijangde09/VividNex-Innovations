import React from 'react';
import './Sustainability.css';
import SustainabilityTabs from './SustainabilityTabs';
import ConductSection from './ConductSection';
import WellBeingSection from './WellBeingSection';
import Navbar from '../../Navbar/Navbar';
import EnvironmentalTabs from './EnvironmentalTabs';
import DataAIGridHoverCard from './DataAIGridHoverCard';
import Footer from '../../Footer/Footer';

function Sustainability() {
    return (
        <div>
            <Navbar />
            <h1 className='Careerhead'>We believe every business <br></br>must be a sustainable business </h1>
            <p className='Careerheadcontent2'>As we help our clients advance their environmental,<br></br>
                social and governance goals by connecting sustainability to their transformations, <br></br>
                we also operate our business with a strong commitment to the environment, ethics and human rights,<br></br>
                and we work to create value in society through our communities around the world. </p>

            <h1 className='Careerhead2'>We integrate sustainability into every aspect of our operations.</h1>
            <p className='Careerheadcontent1'>We are committed to embedding sustainability in all aspects of our operations. Since 2007, we have measured and disclosed our environmental impact, holding ourselves accountable to clear, science-based targets. For instance, in 2020, we set a 2025 carbon removal goal—formerly known as our 2025 net-zero target—and we remain on track to achieve it.

                Our environmental priorities focus on three key areas: reducing and removing carbon emissions, progressing toward zero waste, and managing water risk. </p>


            <SustainabilityTabs />
            <h1 className='Careerhead2'>VividNex Development</h1>
            <p className='Careerheadcontent1'>Operating at the intersection of civil society, government, and the private sector, we champion and support impactful cross-sector collaborations.<br></br>
                <br></br>

                VividNex Development Partnerships (VDP) helps clients—including leading NGOs, private foundations, public donor agencies, and private sector organizations—tackle society’s most pressing challenges. For over 20 years, VDP has driven initiatives that foster partnerships, collective impact, and social equity, advancing the UN Sustainable Development Goals (SDGs) and improving lives globally.
                <br></br> <br></br>
                In fiscal 2024, VividNex Development Partnerships led 429 engagements across 33 countries spanning eight key impact areas. </p>


            <h1 className='Careerhead2'>Empowering communities, one step at a time</h1>
            <p className='Careerheadcontent1'>We are dedicated to strengthening the social, economic, and environmental resilience of the communities where we operate worldwide. By collaborating with our clients, ecosystem and nonprofit partners, and engaging our 791,000-strong workforce, we drive scalable impact in the following areas:</p>


            <ConductSection />

            <h1 className='Careerhead2'>We create impact by embedding sustainability in everything we do.</h1>

            <WellBeingSection />

            <h1 className='Careerhead2'>Latest developments in sustainability and social impact</h1>
            <EnvironmentalTabs />
            <h1 className='Careerhead2'> Globally acknowledged as sustainability leaders.</h1>
            <DataAIGridHoverCard />
            <Footer />
        </div>

    )
}

export default Sustainability
