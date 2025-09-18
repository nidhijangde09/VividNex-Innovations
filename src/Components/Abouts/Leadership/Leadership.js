import React from 'react'
import './Leadership.css';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';


const leaders = [
    {
        name: "Jason Dess",
        role: "Lead – CFO & Enterprise Value",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Julie-Sweet-Headshot-New-575x444%3A3x4?ts=1730906897209&fit=constrain&dpr=off",
        linkedin: "https://www.linkedin.com/in/jason-dess",
    },
    {
        name: "Craig Richey",
        role: "North America Lead – CFO & Enterprise Value",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Muqsit-Ashraf-660x880px%3Arad-3x4?ts=1744381184375&fit=constrain&dpr=off",
        linkedin: "https://www.linkedin.com/in/craig-richey",
    },
      {
        name: "Jason Dess",
        role: "Lead – CFO & Enterprise Value",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Julie-Sweet-Headshot-New-575x444%3A3x4?ts=1730906897209&fit=constrain&dpr=off",
        linkedin: "https://www.linkedin.com/in/jason-dess",
    },
    {
        name: "Craig Richey",
        role: "North America Lead – CFO & Enterprise Value",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Muqsit-Ashraf-660x880px%3Arad-3x4?ts=1744381184375&fit=constrain&dpr=off",
        linkedin: "https://www.linkedin.com/in/craig-richey",
    },
    {
        name: "Paul Prendergast",
        role: "Europe Lead – CFO & Enterprise Value",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Chakraborty-Arundhati%3Arad-3x4?ts=1749682480326&fit=constrain&dpr=off",
        linkedin: "https://www.linkedin.com/in/paul-prendergast",
    },
    {
        name: "Paul Zanker",
        role: "Growth Markets Lead – CFO & Enterprise Value",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Paolo-Dal-Cin-Purple-420x420%3Arad-3x4?ts=1750113934350&fit=constrain&dpr=off",
        linkedin: "https://www.linkedin.com/in/paul-zanker",
    },
];
function Leadership() {
    return (
        <div>

            <Navbar />
            <h1 className='Careerhead'>Industry of One</h1>
            <p className='Careerheadcontent'>Across industries, we bring together the capabilities needed to help clients change and grow quickly.</p>
            <div className="leaders-section">
                <h2>Our leaders</h2>
                <div className="leaders-container">
                    {leaders.map((leader, index) => (
                        <div key={index} className="leader-card">
                            <img src={leader.image} alt={leader.name} className="leader-img" />
                            <div className="leader-details">
                                <h3>{leader.name}</h3>
                                <p>{leader.role}</p>
                                <a
                                    href={leader.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                                        alt="LinkedIn"
                                        className="linkedin-icon"
                                    />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Leadership;
