import React, { useState } from 'react';
import FilterButtons from '../Components/FilterButtons';
import ImageGrid from '../Components/ImageGrid';
import ImageModalDialog from '../Components/ImageModalDialog';
import imageArray from '../constants';
import '../style.css';

const ImageGallery = () => {
  const [filter, setFilter] = useState('All');

  const [currentImage, setCurrentImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filteredImages = imageArray.filter(
    (image) => filter === 'All' || image.type === filter
  );

  const navigateImages = (direction) => {
    // Logic to navigate images
  };

  return (
    <div className="gallery-container">
      <div className="header">
        <h1>Photo Gallery</h1>
        <p>Lorem Ipsum</p>
        <FilterButtons setFilter={setFilter} activeFilter={filter} />
      </div>
      <ImageGrid images={filteredImages} onImageClick={openModal} />
      {isModalOpen && (
        <ImageModalDialog
          isModalOpen={isModalOpen}
          onClose={closeModal}
          currentImage={currentImage}
          images={filteredImages}
          onNavigate={navigateImages}
        />
      )}
    </div>
  );
};

export default ImageGallery;
