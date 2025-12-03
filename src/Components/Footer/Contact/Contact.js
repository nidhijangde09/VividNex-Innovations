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
                    <h1>Get in touch</h1>
                    <p>
                        Thank you for your interest in VividNex. Please select from the options below and we will ensure you are connected with the appropriate representative.
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

