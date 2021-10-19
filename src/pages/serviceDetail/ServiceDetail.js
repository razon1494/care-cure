import React, {useEffect} from 'react';
import {useState} from 'react';
import {useParams} from 'react-router';
import {Link} from 'react-router-dom';
import services from '../../utilities/data';
import './ServiceDetail.css';

const ServiceDetail=() => {
    const params=useParams();
    const {id}=params;
    const exactService=services.find(service => service.id==id);
    const {test_name, catagory,desease, photo_1, photo_2, description, price}=exactService;

    return (
        <div className='container my-5 details'>
            <h1 className='text-center my-4 testno'>Test No: {parseInt(id)+100}</h1>
            <div className="row container text-center">
            <div className="img col-md-4">
                    <img className='img-fluid' src={photo_1} alt="test"/>
            </div>
            <div className="test col-md-4">
            <h1>{test_name}</h1>
                    <h3>Catagory: {catagory}</h3>
                    <h4>Fee: {price}</h4>
                    <p>{description}</p>
                    <h3>More Details About test</h3>
                    <p>{desease}</p>
                    <Link to='/book'><button className='book-btn btn btn-dark mt-5'>Book This Test</button></Link>

                </div>
                <div className="img col-md-4" >
                    <img className='img-fluid' src={photo_2} alt="" />
                </div>
                </div>
        </div>
    );
};

export default ServiceDetail;