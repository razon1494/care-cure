import React from 'react';
import {Link} from 'react-router-dom';
import './Doctor.css';
const Doctor=props => {

    const {doctor}=props;

    // Showing Doctors in a card with animation box shadow
    return (
        <div className='col-md-3 instructor-card px-2'>
            <img className='container-fluid instructor-img' src={doctor.img} alt="instructor" />
            <h3 className='instructor-name'>{doctor.name}</h3>
            <h5 className='instructor-post'>{doctor.post}</h5>
            <br /><br />
            <Link to='/services'> <button className='btn btn-dark'>Book an Appointment</button> </Link>

        </div>
    );
};

export default Doctor;