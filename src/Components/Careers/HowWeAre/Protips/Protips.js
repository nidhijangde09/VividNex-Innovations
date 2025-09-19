import React from 'react'
import './Protips.css';
import Navbar from "../../../Navbar/Navbar";
import Protipsimg from "../../../../assets/images/Protipsimg.jpg";
import CardGrid from './CardGrid';
import ConnectSection from './ConnectSection';
import Insights from './Insights';
import Footer from '../../../Footer/Footer';


function Protips() {
    return (
        <div>
            <Navbar />

            {/* Service section */}
            <div className="service-container">
                <div className="service-image">
                    <img src={Protipsimg} alt="Cloud consulting illustration" />
                </div>
                <div className="service-text">
                    <h1>With Vividnex, your possibilities are limitless.</h1>
                    <p>
                        Join Vividnex to drive impact, deliver lasting value, and build a sustainable, connected tomorrow.
                    </p>
                </div>
            </div>
            
<h1 className="Careerhead">Explore opportunities at Vividnex and let your talent shine.</h1>
            <CardGrid />
            <h1 className="Careerhead">Get advice for interviews</h1>
            <Insights />
  <h1 className="Careerhead">Stay connected</h1>
            <ConnectSection />
            <Footer />
        </div>
    )
}

export default Protips;
