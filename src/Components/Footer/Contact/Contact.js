import React from 'react'
import contact from '../../../assets/images/contact1.jpg';
import './Contact.css';
import Navbar from '../../Navbar/Navbar';
import AboutYouForm from "./AboutYouForm";
import ContactHeader from './ContactHeader';
import Footer from '../Footer';
import DropdownSelect from './DropdownSelect';
import ConsentForm from './ConsentForm';
import ConductSection from './ConductSection';
import ContactHeader1 from './ContactHeader1';
function Contact() {
    return (
        <div>
            <Navbar />
            <div className="service-container">
                <div className="service-image">
                    <img src={contact} />
                </div>
                <div className="service-text">
                    <h1>Turn every customer interaction into a catalyst for growth.</h1>
                    <p>
                        Inconsistent and impersonal interactions prevent organizations from effectively supporting their customers. Unlocking growth requires delivering seamless, data-driven experiences that feel intuitive, not reactive.
                    </p>
                </div>
            </div>
            <ContactHeader />
            <DropdownSelect />
            <AboutYouForm />
            <ConsentForm />
                        <ContactHeader1 />
            <div className='contact-header' >
            <h1 >General Inquiries</h1>
            </div>
            <ConductSection />
            <Footer />

        </div>
    )
}

export default Contact

