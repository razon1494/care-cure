import React, {useEffect} from 'react';
import {useState} from 'react';
import {useParams} from 'react-router';
import {Link} from 'react-router-dom';
import useServices from '../../hooks/useServices';
import './ServiceDetail.css';
const services=[
    {
        id: 1,
        catagory: 'PATHOLOGY',
        test_name: 'Covid-19',
        photo_1: 'https://i.ibb.co/fFkJ0Dy/1.png',
        photo_2: 'https://i.ibb.co/16rV0tR/11.png',
        photo_3: '',
        description: 'The polymerase chain reaction (PCR) test for COVID-19 is a molecular test that analyzes your upper respiratory specimen, looking for genetic material (ribonucleic acid or RNA) of SARS-CoV-2, the virus that causes COVID-19. Scientists use the PCR technology to amplify small amounts of RNA from specimens into deoxyribonucleic acid (DNA), which is replicated until SARS-CoV-2 is detectable if present. The PCR test has been the gold standard test for diagnosing COVID-19 since authorized for use in February 2020. It’s accurate and reliable.',
        price: 3000
    },
    {
        id: 2,
        catagory: 'PATHOLOGY',
        test_name: 'Skin Biopsy',
        photo_1: 'https://i.ibb.co/6FH8bH6/2.png',
        photo_2: 'https://i.ibb.co/pnjGBZq/22.png',
        photo_3: '',
        description: 'A skin biopsy is a procedure to remove cells or skin samples from your body for laboratory examination. A doctor uses a skin biopsy to diagnose skin conditions and remove abnormal tissue. The three main types of skin biopsies are: Shave biopsy',
        price: 1000
    },
    {
        id: 3,
        catagory: 'RADIOLOGY',
        test_name: 'CT Nesopharunx',
        photo_1: 'https://i.ibb.co/qJcJdB5/3.png',
        photo_2: 'https://i.ibb.co/3dmDB46/33.png',
        photo_3: '',
        description: 'A computerized tomography (CT) scan combines a series of X-ray images taken from different angles around your body and uses computer processing to create cross-sectional images (slices) of the bones, blood vessels and soft tissues inside your body. CT scan images provide more-detailed information than plain X-rays do.',
        price: 6000
    },
    {
        id: 4,
        catagory: 'RADIOLOGY',
        test_name: 'Digital X-Ray of Skull silla tursica both view',
        photo_1: 'https://i.ibb.co/WPJxqhH/4.png',
        photo_2: 'https://i.ibb.co/LY3kBwC/44.png',
        photo_3: '',
        description: 'X-rays are a type of radiation called electromagnetic waves. X-ray imaging creates pictures of the inside of your body. The images show the parts of your body in different shades of black and white. ... The most familiar use of x-rays is checking for fractures (broken bones), but x-rays are also used in other ways.',
        price: 400
    },
    {
        id: 5,
        catagory: 'PATHOLOGY',
        test_name: 'Scrapping from Tongue for C/S',
        photo_1: 'https://i.ibb.co/D7s8rg6/5.png',
        photo_2: 'https://i.ibb.co/LY3kBwC/44.png',
        photo_3: '',
        description: '',
        price: 1000
    },
    {
        id: 6,
        catagory: 'RADIOLOGY',
        test_name: 'MRI of MAT Spine',
        photo_1: 'https://i.ibb.co/2nd9Db6/6.png',
        photo_2: 'https://i.ibb.co/hx6rzjJ/66.png',
        photo_3: '',
        description: '',
        price: 10000
    },
    {
        id: 7,
        catagory: 'PATHOLOGY',
        test_name: 'Prostatic smear Cytology for Malignant Cells',
        photo_1: 'https://i.ibb.co/jJPq2S2/7.png',
        photo_2: 'https://i.ibb.co/9Tf4bKG/77.jpg',
        photo_3: '',
        description: 'The tongue is a muscular organ in the mouth. The tongue is covered with moist, pink tissue called mucosa. Tiny bumps called papillae give the tongue its rough texture. Thousands of taste buds cover the surfaces of the papillae. Taste buds are collections of nerve-like cells that connect to nerves running into the brain.',
        price: 1000
    },
    {
        id: 8,
        catagory: 'PATHOLOGY',
        test_name: 'Oral Swab for Gram Stain',
        photo_1: 'https://i.ibb.co/ssB3XJG/8.png',
        photo_2: 'https://i.ibb.co/MB8c7J4/88.png',
        photo_3: '',
        description: 'A Gram stain is a laboratory procedure used to detect the presence of bacteria and sometimes fungi in a sample taken from the site of a suspected infection. It gives relatively quick results as to whether bacteria or fungi are present and, if so, the general type(s).',
        price: 400
    },
    {
        id: 9,
        catagory: 'PATHOLOGY',
        test_name: 'Glucose Tolerance Test',
        photo_1: 'https://i.ibb.co/MV8xHkq/9.png',
        photo_2: 'https://i.ibb.co/K7FBy2r/99.png',
        photo_3: '',
        description: 'The glucose tolerance test is a lab test to check how your body moves sugar from the blood into tissues like muscle and fat. The test is often used to diagnose diabetes. Tests to screen for diabetes during pregnancy are similar, but are done differently',
        price: 300
    },
    {
        id: 10,
        catagory: 'PATHOLOGY',
        test_name: '2 hrs postprandial Plasma glucose',
        photo_1: 'https://i.ibb.co/zZ0PDBS/10.png',
        photo_2: 'https://i.ibb.co/WfnCh7y/1010.png',
        photo_3: '',
        description: 'The fasting plasma glucose test (FPG) is the preferred method for diagnosing diabetes, because it is easy to do, convenient, and less expensive than other tests, according to the American Diabetes Association.',
        price: 200
    },
    {
        id: 11,
        catagory: 'FULL BODY PACKAGE',
        test_name: 'Comprehensive Health Check-up Package',
        photo_1: 'https://i.ibb.co/rw4NF7r/011.png',
        photo_2: 'https://i.ibb.co/y8f1q0Y/1111.png',
        photo_3: '',
        description: 'A comprehensive health checkup not only provides you all the basic test but also provides the contemporary diagnostics tests which fits in the current scenario of our hectic and sedentary lifestyle. These tests provide a detailed analysis and functioning of bodys various vital organs and important health criteria.',
        price: 7000
    },
    {
        id: 12,
        catagory: 'OPHTHALMOLOGY',
        test_name: 'Vision Test',
        photo_1: 'https://i.ibb.co/zVBXt5G/12.png',
        photo_2: 'https://i.ibb.co/bgdSCj5/1212.png',
        photo_3: '',
        description: 'They measure the eyes ability to see details at near and far distances. The tests usually involve reading letters or looking at symbols of different sizes on an eye chart. Usually, each eye is tested by itself. And then both eyes may be tested together, with and without corrective lenses (if you wear them).',
        price: 600
    }, {
        id: 13,
        catagory: 'NEUROLOGY',
        test_name: 'EMG Both Limb (Upper & Lower)',
        photo_1: 'https://i.ibb.co/qkmPSn8/13.png',
        photo_2: 'https://i.ibb.co/YdLwGdB/1313.png',
        photo_3: '',
        description: 'The EMG study usually includes two parts: 1) Nerve Conduction Studies (NCS) and 2) Needle electrode examination (NEE). During the first part of the test (NCS), small discs are placed on the skin to record nerve function.',
        price: 11000
    },
    {
        id: 14,
        catagory: 'MOLECULAR',
        test_name: 'HCV Genotyping PCR',
        photo_1: 'https://i.ibb.co/3CH8sMx/14.png',
        photo_2: 'https://i.ibb.co/8xw6jFq/1414.png',
        photo_3: '',
        description: 'A genotype is a way to put the hepatitis C virus (HCV) into categories based on similar genes. Its important to know and understand HCV genotypes because different genotypes respond differently to medicines that treat and cure HCV. HCV has six genotypes, ',
        price: 12000
    },
    {
        id: 15,
        catagory: 'ECHO',
        test_name: 'Pulmonary Function Test/Lung Function Test/Spirometry',
        photo_1: 'https://i.ibb.co/JH0QHps/15.png',
        photo_2: 'https://i.ibb.co/9sCB12y/1515.png',
        photo_3: '',
        description: 'An echocardiogram (echo) is a graphic outline of the hearts movement. During an echo test, ultrasound (high-frequency sound waves) from a hand-held wand placed on your chest provides pictures of the hearts valves and chambers and helps the sonographer evaluate the pumping action of the heart',
        price: 1000
    },
    {
        id: 16,
        catagory: 'ENDOSCOPY',
        test_name: 'Balloon Dilatation of Oesophageal (DMIAN)',
        photo_1: 'https://i.ibb.co/8mn5RS0/16.png',
        photo_2: 'https://i.ibb.co/s2L4pYm/1616.png',
        photo_3: '',
        description: '10000',
        price: 10000
    },
    {
        id: 17,
        catagory: 'COLONOSCOPY',
        test_name: 'Video Colonoscopy with Polypectomy Single(DRROWSHAN)',
        photo_1: 'https://i.ibb.co/ky8Kqfm/17.png',
        photo_2: 'https://i.ibb.co/zNzFqnN/1717.png',
        photo_3: '',
        description: 'A transesophageal echo (TEE) test is a type of echo that uses a long, thin, tube (endoscope) to guide the ultrasound transducer down the esophagus (“food pipe” that goes from the mouth to the stomach). This lets the doctor see pictures of the heart without the ribs or lungs getting in the way.',
        price: 8000
    }]
const ServiceDetail=() => {
    const params=useParams();
    const {id}=params;

    const exactService=services.find(service => service.id==id);

    const {test_name, catagory, photo_1, photo_2, description, price}=exactService;

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