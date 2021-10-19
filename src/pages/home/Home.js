import React from 'react';
import useServices from '../../hooks/useServices';
import ServiceCard from '../serviceCard/ServiceCard';
import ContactUs from './contactUs/ContactUs';
import Emergency from './emergency/Emergency';

import './Home.css';
import Slider from './Slider/Slider';
const Home=() => {
    const [services]=useServices();
    const popularServices=services.filter(service => service.price>=6000);
    return (
        <div>
            <div className="slider">
            <Slider />
            </div>
            <div className="home-title">
                <h2 className='text-center fw-bold mt-3 popular'>Explore Our Most <span id='popular-services'> Popular Services</span></h2>
                <div className="popular-courses row mt-4 g-5 container justify-content-between mx-auto mb-4">
                {
                    // showing popular courses
                    popularServices.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                    }
                    <ContactUs></ContactUs>
                    <Emergency></Emergency>
            </div>
            </div>


        </div>
    );
};

export default Home;