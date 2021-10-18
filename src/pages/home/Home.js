import React from 'react';
import useServices from '../../hooks/useServices';
import ServiceCard from '../serviceCard/ServiceCard';

import './Home.css';
import Slider from './Slider/Slider';
const Home=() => {
    const [services]=useServices();
    const popularServices=services.filter(service => service.price>=6100);
    console.log(popularServices);
    return (
        <div>
            <div className="slider">
            <Slider />
            </div>
            <div className="home-title">
                <h2 className='text-center fw-bold mt-3 '>Explore Our Most <span id='popular-courses'> Popular Services</span></h2>
                <div className="popular-courses row mt-4 g-5 container justify-content-between mx-auto mb-4">
                {
                    // showing popular courses
                    popularServices.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            </div>


        </div>
    );
};

export default Home;