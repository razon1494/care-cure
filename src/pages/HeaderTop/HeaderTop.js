import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faGoogle, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faClock,faMapMarkerAlt, faPhoneVolume} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

//on top address contact and office hour showing
const HeaderTop = () => {
    return (
        <div>
            <div className="container header mx-auto  d-md-flex justify-content-between">
            <div className="icons">
           <FontAwesomeIcon className='header-icon' icon={faTwitter} />
           <FontAwesomeIcon className='header-icon' icon={faFacebook} />
           <FontAwesomeIcon className='header-icon' icon={faYoutube} />
            <FontAwesomeIcon className='header-icon' icon={faGoogle} />
            </div>
            <div className="address">
                <p><FontAwesomeIcon className='' icon={faMapMarkerAlt} /><span className='fw-bold'> Address </span>House 428(1st Floor), Road 30,<br/> Mohakhali DOHS, Dhaka 1212</p>

            </div>

            <div className="call-now">
                <Link to='/call' className='call'>
                    <FontAwesomeIcon className='text-dark' icon={faPhoneVolume}/><span className='fw-bold text-dark'> Call Now  </span> +88-01744-941494
                    </Link>

            </div>
            <div className="call-now">
                <p className='call'>
                    <FontAwesomeIcon className='text-dark' icon={faClock}/><span className='fw-bold text-dark'> Open Hours:  </span> Sat-Thu 9am-6pm
                </p>
                </div>
                </div>
        </div>
    );
};

export default HeaderTop;