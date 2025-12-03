// ServiceHoverPanel.js
import React, { useState } from 'react';
import './BankingHoverPanel.css';

const items = [

     {
        label: "CDP Climate Response",
        title: "Climate Financial Transparency Index",
        description:"Founded in 2000, CDP (formerly the Carbon Disclosure Project) is a not-for-profit organization that runs a global disclosure system helping investors, companies, cities, and regions manage their environmental impact. VividNex Innovations has been responding to the CDP Climate Change questionnaire since [insert year], and we encourage our key partners to do the same. We are proud to be recognized among the top-scoring companies for our climate action and sustainable practices.",
        image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg",
         link: "#",
    },
     {
        label: "Global Reporting Initiative Context Index",
        title: "Global Reporting Initiative Context Index",
        description:"GRI Standards help organizations understand, manage, and communicate their impacts on ESG issues. They are regularly updated to reflect global best practices in sustainability reporting and guide responses to stakeholder and regulatory expectations. VividNex Innovations has aligned with GRI disclosures and prepared a GRI Context Index since [insert year], demonstrating our commitment to transparency and responsible business practices.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-utilities-image4:rad-16x9?ts=1749490438491&fit=constrain&dpr=on,0.8999999761581421&wid=480",
         link: "#",
    },
     {
        label: "Sustainability Accounting Standards Board Index",
        title: "Sustainability Accounting Standards Board Index",
        description:"The Sustainability Accounting Standards Board (SASB) provides information that is decision-useful for investors. This index reflects VividNex Innovations’ alignment with the Software & IT Services industry standards from the SASB framework, demonstrating our commitment to transparency and sustainable business practices.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-software-platforms-image7:rad-16x9?ts=1749490438519&fit=constrain&dpr=on,0.8999999761581421&wid=480",
         link: "#",
    },
     {
        label: "Taskforce on Climate-Related Financial Disclosures Index",
        title: "Taskforce on Climate-Related Financial Disclosures Index",
        description:"VividNex Innovations has reported in alignment with the Financial Stability Board’s Task Force on Climate-Related Financial Disclosures (TCFD) since [insert year] through CDP’s climate change program. Established in 2015, TCFD advances the climate disclosure agenda by emphasizing the connection between climate-related risks and financial stability.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-cyber-protection-1707x1138:rad-16x9?ts=1749490438545&fit=constrain&dpr=on,0.8999999761581421&wid=480",
         link: "#",
    },
      {
        label: "United Nations Global Compact Communications on Progress",
        title: "United Nations Global Compact Communications on Progress",
        description:"VividNex Innovations has been a signatory to the United Nations Global Compact (UNGC) since [insert year]. In 2025, we continued to use the UNGC reporting framework to communicate our progress during the prior fiscal year in implementing the Ten Principles of the UNGC and advancing the United Nations Sustainable Development Goals.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-software-platforms-image7:rad-16x9?ts=1749490438519&fit=constrain&dpr=on,0.8999999761581421&wid=480",
         link: "#",
    },
     {
        label: "World Economic Forum International Business Council Index",
        title: "World Economic Forum International Business Council Index",
        description:"The Stakeholder Capitalism Metrics framework helps companies align their reporting on performance against ESG indicators, aiming to bring greater comparability and consistency to ESG disclosures. VividNex Innovations has been engaged with the initiative since its launch and has endorsed the CEO Letter of Commitment in support of the Stakeholder Capitalism Metrics.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-software-platforms-image7:rad-16x9?ts=1749490438519&fit=constrain&dpr=on,0.8999999761581421&wid=480",
         link: "#",
    },
];

const BankingHoverPanel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="panel-container">
            <div className="left-menu">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`menu-item ${index === activeIndex ? 'active' : ''}`}
                        onMouseEnter={() => setActiveIndex(index)}
                    >
                        {item.label}
                    </div>
                ))}
            </div>
            <div className="right-panel">
                <h2>{items[activeIndex].title}</h2>
                <p>{items[activeIndex].description}</p>
                <img src={items[activeIndex].image} alt={items[activeIndex].label} />
            </div>
        </div>
    );
};

export default BankingHoverPanel;
