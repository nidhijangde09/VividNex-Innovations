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
            <p className='Careerheadcontent'>As we help our clients advance their environmental,<br></br>
                social and governance goals by connecting sustainability to their transformations, <br></br>
                we also operate our business with a strong commitment to the environment, ethics and human rights,<br></br>
                and we work to create value in society through our communities around the world. </p>

            <h1 className='Careerhead1'>We work to embed sustainability<br></br> into everything we do </h1>
            <p className='Careerheadcontent1'>We began to measure and disclose our environmental impact in 2007, and we <br></br>continue to hold ourselves accountable to clear, measurable goals that are aligned <br></br>with climate science. For example, in 2020, we established a 2025 carbon removal <br></br>goal—previously referred to as our 2025 net-zero goal—and we are on track to achieve this goal.<br></br>


                Our environment goals span three areas: reducing and removing our carbon emissions, <br></br>moving toward zero waste and planning for water risk. </p>


            <SustainabilityTabs />
            <h1 className='Careerhead1'>We work to embed sustainability<br></br> into everything we do </h1>
            <p className='Careerheadcontent1'>We began to measure and disclose our environmental impact in 2007, and we <br></br>continue to hold ourselves accountable to clear, measurable goals that are aligned <br></br>with climate science. For example, in 2020, we established a 2025 carbon removal <br></br>goal—previously referred to as our 2025 net-zero goal—and we are on track to achieve this goal.<br></br>


                Our environment goals span three areas: reducing and removing our carbon emissions, <br></br>moving toward zero waste and planning for water risk. </p>


            <h1 className='Careerhead1'>We work to embed sustainability<br></br> into everything we do </h1>
            <p className='Careerheadcontent1'>We began to measure and disclose our environmental impact in 2007, and we <br></br>continue to hold ourselves accountable to clear, measurable goals that are aligned <br></br>with climate science. For example, in 2020, we established a 2025 carbon removal <br></br>goal—previously referred to as our 2025 net-zero goal—and we are on track to achieve this goal.<br></br>


                Our environment goals span three areas: reducing and removing our carbon emissions, <br></br>moving toward zero waste and planning for water risk. </p>


            <ConductSection />

            <h1 className='Careerhead1'>We drive value through<br></br>sustainability</h1>

            <WellBeingSection />

            <h1 className='Careerhead1'>We drive value through<br></br>sustainability</h1>
            <EnvironmentalTabs />
            <h1 className='Careerhead1'> We drive value through<br></br>sustainability</h1>
            <DataAIGridHoverCard />
            <Footer />
        </div>

    )
}

export default Sustainability
