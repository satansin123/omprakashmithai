import React from 'react';

const HealthPartnerSection = ({ handleButtonClick }) => {

  const image = require('./img2.jpeg')

  return (
    <div className="flex flex-col md:flex-row bg-black">
      {/* Left side with image */}
      <div className="md:w-1/2">
        <img src={image} alt="Medical professional in a hospital setting" className="object-cover h-screen w-full" />
      </div>

      {/* Right side with content */}
      <div className="md:w-1/2 custom-text-color flex flex-col justify-between p-20">
        <div className="flex justify-between items-center">
          {/* Content for the section */}
        </div>
        <div className="mt-10">
          <h2 className="text-5xl font-bold mb-5">YOUR SWEET ESCAPE</h2>
          <p className="text-xl mb-10">Indulge in the finest confections crafted with passion and precision, offering a delightful experience for your taste buds.</p>
          <button className="bg-transparent border border-custom custom-text-color py-2 px-10 hover:bg-white hover:text-white transition duration-300"
            onClick={() => handleButtonClick('cal')}>
            VISIT NOW!
          </button>
        </div>
        <div>
          {/* Additional content */}
        </div>
      </div>
    </div>
  );
};

export default HealthPartnerSection;
