import React from 'react';
import {Button} from 'react-bootstrap';
import {useHistory} from 'react-router';
import './ServiceCard.css';
const ServiceCard=(props) => {
    const {service}=props;
    const {id, catagory, test_name, photo_1, price}=service;
    const history=useHistory();
    const handleEnroll=() => {
        history.push(`/courses/${id}`);
    }
    return (
        <div className="col-md-5  m-3 course">
            <h3 className='code text-center'>Course Code: {1000+id}</h3>
            <div className="d-md-flex">
                <div className="img">
                    <img src={photo_1} alt="" />
                </div>
            <div className="text m-3">
                <h3>{test_name}</h3>
                <div className=" mb-3">
            <p>Catagory: {catagory}</p>
                    <p>Course Fee : {price}/=</p>
                    <Button onClick={handleEnroll} variant="secondary"> Enroll Now</Button>
            </div>
</div>
            </div>
            </div>
    );
};

export default ServiceCard;