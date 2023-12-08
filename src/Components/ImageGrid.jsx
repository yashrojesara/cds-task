import React, { useState } from 'react';
import '../style.css';

const ImageGrid = ({ images, onImageClick }) => (
  <div className="image-gallery">
    {images.map((image) => (
      <div
        key={image.id}
        className="image-item"
        onClick={() => onImageClick(image)}
      >
        <img src={image.src} alt={image.alt} />
      </div>
    ))}
  </div>
);

export default ImageGrid;
