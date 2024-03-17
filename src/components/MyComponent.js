import React from 'react';
import Gallery from './Gallery'; // Import the Gallery component

const MyComponent = () => {
    const images = [
        { src: require('./img3.jpeg'), alt: 'Image 1' },
        { src: require('./img2.jpeg'), alt: 'Image 2' },
        { src: require('./img1.jpeg'), alt: 'Image 3' },
        { src: require('./img4.jpeg'), alt: 'Image 4' },
        { src: require('./img5.jpeg'), alt: 'Image 5' },
        // Add more image objects as needed
      ];
      

  return <Gallery images={images} />;
};

export default MyComponent;
