import React from 'react'
import Access from './Access';
import Navbar from '../../Navbar/Navbar';
import Footer from '../Footer';
import './CookiePolicy.css';

function CookiePolicy() {
    return (
        <div>
            <Navbar />
            <Access />
           <p className='textp'>At Vividnex Innovations Pvt. Ltd., we use cookies and similar technologies to enhance your browsing experience, improve website performance, and provide you with personalized content and services. Cookies are small text files stored on your device when you visit our website, and they allow us to remember your preferences, such as language selection, accessibility settings, and previously viewed pages. In addition to cookies, we may use other technologies such as pixels, tags, and scripts to collect information about how you interact with our website and digital platforms. These technologies help us analyze traffic patterns, understand user behavior, and ensure that our services function smoothly across devices and browsers. While some cookies are essential for the operation of our site, others help us improve functionality, measure the effectiveness of our communications, and deliver relevant content. You have the option to manage or disable cookies through your browser settings at any time; however, please note that doing so may limit certain features or functionality of the site. By continuing to use our website without changing your cookie preferences, you consent to our use of cookies and similar technologies in accordance with this policy and applicable data protection laws.</p>

            <Footer />
        </div>
    )
}

export default CookiePolicy
