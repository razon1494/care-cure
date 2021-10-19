import React from 'react';
import {Link} from 'react-router-dom';
import useServices from '../../hooks/useServices';
import ServiceCard from '../serviceCard/ServiceCard';
import './Services.css';
const Services = () => {
    const [services]=useServices();
    return (
        <div>
            <div className="service-title">
                <h2 className='text-center fw-bold mt-3'>Please Check Our All <span id='premium'>Services</span> </h2>
            </div>
            <div className="popular-courses row mt-4 container justify-content-between mx-auto mb-4">
                {
                    //showing all courses
                    services.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;