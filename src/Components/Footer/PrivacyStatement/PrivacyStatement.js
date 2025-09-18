import React from 'react'
import './PrivacyStatement.css';
import Access from './Access';
import Navbar from '../../Navbar/Navbar';
import Footer from '../Footer';
function PrivacyStatement() {
    return (
        <div>
            <Navbar />
            <Access />
            <p className='textp'>This Privacy Statement is effective as of October 18, 2024. Please note that this Privacy Statement will be regularly updated to reflect any changes in the way we handle your personal data or any changes in applicable laws.</p>

            <p className='textp'>Unless stated otherwise, this Privacy Statement applies to all of Vividnex Innovations Pvt. Ltd.’s externally facing applications, services, websites, tools, and other data processing activities where Vividnex Innovations Pvt. Ltd. (“Vividnex”; “we”) is acting as a data controller (or any local equivalent).</p>

            <p className='textp'>This page and its related sections explain how Vividnex Innovations Pvt. Ltd., along with its affiliates and subsidiaries, protects the personal data that we process and control relating to you (“your personal data” or “your data”), and what rights you have in relation to the processing of your personal data.</p>

            <p className='textp'>If the Vividnex entity acting as the controller of your personal data is located outside of India, Vividnex Innovations Pvt. Ltd. (India) will represent it in matters related to data privacy.</p>

            <p className='textp'>Below, we first provide a general description of how Vividnex Innovations Pvt. Ltd. protects your personal data. Further below, we will also include specific information regarding particular services, platforms, or processing activities.</p>

            <p className='textp'></p>
            <Footer />
        </div>
    )
}

export default PrivacyStatement
