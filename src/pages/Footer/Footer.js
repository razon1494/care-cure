import {faFacebook, faGoogle, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faMapMarkerAlt, faPhoneVolume} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css'
//footer with social media icon and copyright
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-text d-flex container text-start justify-content-evenly">
                <div className="footer-head">
            <h2 id='footer-tag'>Care & Cure</h2>
            <h6>Contact Us: razon1494@gmail.com</h6>
                    <p>Mobile: 01744941494</p>
                </div>
                <div className="footer-additional">
                    <p><FontAwesomeIcon className='' icon={faMapMarkerAlt} /><span className='fw-bold'> Address </span>House 428(1st Floor), Road 30,<br /> Mohakhali DOHS, Dhaka 1212</p>
                    <Link to='/call' className='call text-white'>
                    <FontAwesomeIcon className='text-white' icon={faPhoneVolume}/><span className='fw-bold text-white'> Call Now</span>+88-01744-941494
                </Link>
                </div>
                </div>
            <div className="footer-icons">
            <FontAwesomeIcon className='footer-icon' icon={faTwitter} />
           <FontAwesomeIcon className='footer-icon' icon={faFacebook} />
           <FontAwesomeIcon className='footer-icon' icon={faYoutube} />
                <FontAwesomeIcon className='footer-icon' icon={faGoogle} />
            </div>
            <div className="copyright mt-3">
                <p>&copy; 2021 By Arifur Rahman Razon</p>
            </div>
        </div>
    );
};

export default Footer;