import React from 'react';

const Gallery = ({ images }) => {
  return (
    <div className="row">
      {images.map((image, index) => (
        <div className="col-md-6 mb-4" key={index}>
          <img
            src={image.src}
            className="img-fluid rounded"
            alt={image.alt}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
