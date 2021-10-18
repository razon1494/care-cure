import React from 'react';
import './Doctor.css';
const Doctor=props => {
    console.log(props);
    const {doctor}=props;
    console.log(doctor);
    // Showing Instructs in a card with animation box shadow
    return (
        <div className='col-md-3 instructor-card px-2'>
            <img className='container-fluid instructor-img' src={doctor.img} alt="instructor" />
            <h3 className='instructor-name'>{doctor.name}</h3>
            <h5 className='instructor-post'>{doctor.post}</h5>

        </div>
    );
};

export default Doctor;