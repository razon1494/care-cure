import React from 'react';
import './Book.css'
import photo1 from '../../images/book.png'
const Book = () => {
    return (
        <div className='container book'>
            <h1 className='text-center mt-3 mb-5 book-title'>Book An Appointment</h1>
            <div className="row">
            <div className="appointment col-md-6">
                <h3>Steps to book an appointment for your desired doctor:</h3>
                <p>Step 1: Go to our services page select which service you want to take</p>
                <p>Step 2: Check all of our specialized doctors and select which doctor you prefer</p>
                <p>Step 3: Call us onn 999 and tell about your appointment desire</p>
                <p>Step 4: Tell call center agent about the patient details like name, age, home area</p>
                <p>Step 5: Then hear about available date and time for the test</p>
                <p>Step 6: Choose the date and time carefully (We are very much punctual at our job)</p>
                <p>Step 7: You can also mail us about your appointment desire on info@carecure.com</p>
                <p>Step 8: We will let you know about the appointment confirmation through sms and email</p>
                <p>Step 9: You have to pay 50% in advance to confirm the appointment</p>
                <p>Step 10: We accept all type of payment gateway to take charges</p>
                <h3 className='text-center'>Thats It. Stay Safe. Thank You</h3>
                </div>
                <div className="book-img col-md-6">
                    <img className='img-fluid' src={photo1} alt=""/>
                </div>
</div>
        </div>
    );
};

export default Book;