// SubContent.js
import React from 'react';

const SubContent = () => {

  const story = require('./img7.jpeg');
  const services = require('./img3.jpeg');
  const prod = require('./img5.jpeg');

  const goldenGraffitiStyle = {
    background: `linear-gradient(45deg, #f0d564, #f0d564 30%, #f0d564 30%, transparent 30%, transparent 70%, #f0d564 70%, #f0d564 100%)`,
    padding: '20px',
    borderRadius: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    display: 'inline-block',
  };

  return (
    <div className="sub-content py-12 px-4">
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="text-center mx-4 mb-8 md:mb-0">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h3>
          <div style={goldenGraffitiStyle}>
          <img
            src={story}
            alt="Top view of salon tools on a wooden background"
            className="rounded-full mx-auto mb-4"
            style={{ maxWidth: '300px', maxHeight: '300px' }}
          /></div>
          <p className="text-gray-600">
          Sri Balaji Omprakash Mithai Bhandar is a testament to a sweet legacy that began in 2002, founded by the visionary Late Omprakash Shankla. What started as a humble venture has now blossomed into a beloved establishment, with a reputation for crafting exquisite confections that captivate hearts.
          </p>
        </div>
        <div className="text-center mx-4 mb-8 md:mb-0">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Sweet Services</h3>
          <div style={goldenGraffitiStyle}>
          <img
            src={services}
            alt="Top view of salon tools on a wooden background"
            className="rounded-full mx-auto mb-4"
            style={{ maxWidth: '300px', maxHeight: '300px' }}
          /></div>
          <p className="text-gray-600">
          Experience sweetness at its best with our range of services. From custom-themed dessert tables for events to personalized gift packages, we curate sweetness for every occasion. Let us add a sugary touch to your celebrations.
          </p>
        </div>
        <div className="text-center mx-4">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Our (tasty) Products</h3>
          <div style={goldenGraffitiStyle}>
          <img
            src={prod}
            alt="Top view of salon tools on a wooden background"
            className="rounded-full mx-auto mb-4"
            style={{ maxWidth: '300px', maxHeight: '300px' }}
          /></div>
          <p className="text-gray-600">
          Dive into a world of heavenly flavors with our handpicked selection of sweets. From traditional favorites to innovative confections, our products are crafted with the finest ingredients to ensure a symphony of tastes in every bite.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubContent;
