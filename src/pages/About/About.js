import React from 'react';
import useDoctor from '../../hooks/useDoctors';
import './About.css';
import Doctor from './Doctor/Doctor';

const About=() => {
    // destructuring to get the instructors array from public json file
    const [doctors]=useDoctor();
    return (
        <div className='container text-center mt-3 about'>
            <div className="about-head">
            <h2>Care & Cure</h2>
                <p className='about-p'>Care & Cure is the first and only hospital to be accredited by the Joint Commission International (JCI) 5 times in a row. The JCI Gold Seal of Approval is a globally recognized and reflects an organization’s commitment to best practices in quality and patient safety. Evercare Hospital Dhaka was first accredited by JCI in 2008 and till date remains the only hospital in Bangladesh to hold this international recognized standard. Accreditation by recognized international institutions such as JCI are crucial to drive compliance and improve quality and cost-effectiveness across the hospitals and has become a priority for healthcare organizations across the world.

EHD is a 425-bed multi-disciplinary super-specialty tertiary care hospital in Bangladesh, providing comprehensive health care with the latest medical, surgical and diagnostic facilities. These services are provided by expert medical professionals, skilled nurses and technologists using state-of-the-art equipment, modern well researched protocols & processes. The eleven-storied modern structure with 435,000 square feet floor space, was conceptualized & designed by renowned architecture company Smith Group of United States of America.   </p>
            </div>
            <div className="mission">
                 <h2>Our Mission</h2>
                <p className='about-p'>Care & Cure is a world-class hospital with an aim to establish a close synergy among medical skills, trained manpower, technology and advancements in IT. Because– we believe in Transforming Healthcare.
                    <li>To ensure accessible and affordable quality healthcare by compassionate medical professionals to all.</li>
                    <li>To be the centre of excellence for medical research and academics.</li>
                    <li>To cultivate an environment of trust, honesty, mutual respect, equality, and ethics.</li>
                    To provide value added innovative, consistent, and continuously improving health and medical care to sustain and further improve clinical outcomes, patient safety, & patient satisfaction.
                </p>
            </div>
            <div className="instructors">
                <h2>Our Valuable Doctors</h2>
                <div className="instructor row g-4 justify-content-center">
                    {
                        // Showing Instructors
                        doctors.map(doctor => <Doctor
                            key={doctor.key}
                            doctor={doctor}
                        ></Doctor>)
                    }

                </div>
            </div>

        </div>
    );
};

export default About;