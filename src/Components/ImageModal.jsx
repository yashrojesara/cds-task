import React from 'react';
import Slider from 'react-slick';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  mainImage: {
    height: '500px',
    width: '100%',
    objectFit: 'cover',
    marginBottom: '20px',
  },
  carousel: {
    '.slick-slide > div': {
      margin: '0 10px',
    },
    '.slick-list': {
      margin: '0 -10px',
    },
  },
}));

const ImageModal = ({ currentImage, images }) => {
  const classes = useStyles();

  // Settings for the slick carousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <img
        src={currentImage.src}
        alt={currentImage.alt}
        className={classes.mainImage}
      />
      <Slider {...settings} className={classes.carousel}>
        {images.map((image) => (
          <div key={image.id}>
            <img
              src={image.src}
              alt={image.alt}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageModal;
