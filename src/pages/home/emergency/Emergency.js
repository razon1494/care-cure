import React from 'react';
import './Emergency.css';
import ambulance from '../../../images/amb.jpg'
const Emergency = () => {
    return (
        <div className='row mx-auto my-3'>
            <div className="col-md-12">
                <h1 className='mx-auto text-center my-3'>Ambulance</h1>
            </div>
            <div className="ambulance col-md-6" >
                <img className='container-fluid' src={ambulance} alt="ambuance" />
            </div>
            <div className="emergency col-md-6">
                <h2>Get Our Ambulance Service</h2>
                <h3>Just Call 999</h3>
                <p>We have 24 hours emergency ambulance service for your service. One phone call and our super driver will rush to your doorstep with his ICU facility ambulance as fast as possible. We have 65 ambulance to serve all over the bangladesh</p>
            </div>


        </div>
    );
};

export default Emergency;