// MapSection.js
import React from 'react';

const MapSection = () => {

  const map = require('./map2.png')

  return (
    <section className="map-section text-center">
      <h2 className="text-4xl font-bold mb-10">VISIT US TODAY!</h2>
      <div className="container mt-20 mx-auto px-4 md:px-8 lg:px-12 xl:px-20">
        <a href="https://www.google.com/maps/place/SRI+BALAJI+OMPRAKASH+MITHAI+BHANDAR/@17.4790199,78.5086349,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb9af84b7764ad:0x2ead3978c1e2fec2!8m2!3d17.4790148!4d78.5112098!16s%2Fg%2F119tjl4vy?hl=en&entry=ttu" target="_blank" rel="noopener noreferrer">
          <img
            src={map}
            alt="Location Map"
            className="w-full h-auto rounded-lg shadow-lg mb-8 md:mb-12 mx-auto"  // Added mx-auto for center alignment
          />
        </a>
      </div>
    </section>
  );
};

export default MapSection;
