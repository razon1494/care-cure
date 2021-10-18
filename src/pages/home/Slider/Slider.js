import React from 'react';
import {Carousel} from 'react-bootstrap';
import './Slider.css';
import slider1 from '../../../images/slide2.png'
import slider2 from '../../../images/slide4.png'
import slider3 from '../../../images/slide6.png'
//react-bootstrap carousel
const Slider=() => {
    return (
        <div className='container mb-5'>
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider1}
      alt="First slide"
    />
    <Carousel.Caption className='carousel1-text'>
      <h3 className='carousel1-title'>Accurate Results by our <span id='sunnah'> letest lab equipments</span></h3>
      <p className='carousel1-p'>Our equipments are very high quality and latest so you will get the best result.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider2}
      alt="Second slide"
    />

    <Carousel.Caption className='carousel2-text'>
      <h3 className='carousel2-title'>Unblieveable <span id='quran'>Discount</span>  For Members </h3>
      <p className='carousel2-p'>Be our social member and you will get 20-40% discount on every test </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider3}
      alt="Third slide"
    />
    <Carousel.Caption className='carousel3-text'>
      <h3 className='carousel3-title'>Your test will be operated by our expert<span id='exam'> doctors </span></h3>
      <p className='carousel3-p'>Our doctors directly involve with lab test so that we can assure you best output</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </div>
    );
};

export default Slider;