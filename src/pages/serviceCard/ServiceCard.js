import React from 'react';
import {Button} from 'react-bootstrap';
import {useHistory} from 'react-router';
import {Link} from 'react-router-dom';
import './ServiceCard.css';
const ServiceCard=(props) => {
    const {service}=props;
    const {id, catagory, test_name, photo_1, price,summary}=service;
    const history=useHistory();
    const handleEnroll=() => {
        history.push(`/courses/${id}`);
    }
    return (
        <div className="col-md-3  m-3 course">
            <h3 className='code text-center'>Test No: {100+id}</h3>
            <div className="">
                <div className="img text-center">
                    <img className='img-fluid' src={photo_1} alt="" />
                </div>
            <div className="text  m-3">
                <h3 className='text-center'>{test_name}</h3>
                <div className=" mb-3">
            <p>Catagory: {catagory}</p>
                        <p>Charge : {price}/=</p>
                        <p>{summary}</p>
                        <div className='d-flex align-items-center justify-content-center '>
                        <Link to={`/services/${id}`}>
                    <Button className='mt-3 px-4' variant="secondary">Details</Button></Link></div>
            </div>
</div>
            </div>
            </div>
    );
};

export default ServiceCard;