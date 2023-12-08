import React from 'react';
import { Modal, Box, Button } from '@mui/material';
import ImageModal from './ImageModal';

const ImageModalDialog = ({
  isModalOpen,
  onClose,
  currentImage,
  images,
  onNavigate,
}) => {
  return (
    <Modal open={isModalOpen} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: 600,
          maxHeight: '90vh', // Prevent overflow by setting a maximum height
          overflowY: 'auto', // Enable scrolling if content overflows
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          padding: 2,
        }}
      >
        <ImageModal
          currentImage={currentImage}
          images={images}
          onClose={onClose}
          onNavigate={onNavigate}
        />
        <Button onClick={onClose} variant="contained" sx={{ marginTop: 2 }}>
          Close Modal
        </Button>
      </Box>
    </Modal>
  );
};

export default ImageModalDialog;
