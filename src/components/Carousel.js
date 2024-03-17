import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './MyCarousel.css'; // Import custom CSS for Carousel

const MyCarousel = () => {
  const img1 = require('./img3.jpeg');
  const img2 = require('./img2.jpeg');
  const img3 = require('./img1.jpeg');
  const img4 = require('./img4.jpeg');
  const img5 = require('./img5.jpeg');

  return (
    <div className='carousel bg-gray-200'>
<h1 className="delicacies-heading text-6xl font-bold mb-4 text-center mt-4" style={{ color: "black", fontSize: "3.5rem" }}>Our Delicacies</h1>
      <Carousel className="custom-carousel p-6" interval={1500}>
        {/* 3000 milliseconds (3 seconds) interval for auto-scroll */}
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={img2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={img3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={img4}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={img5}
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
