import { ImageList, ImageListItem } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { FC } from 'react';

import { Launch } from '../../types/types';

interface LaunchDetailModalProps {
  onClose: () => void;
  launch: Launch;
  isOpen: boolean;
}

const LaunchDetailModal: FC<LaunchDetailModalProps> = ({
  onClose,
  launch,
  isOpen,
}) => (
  <Modal
    open={isOpen}
    onClose={onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box
      sx={{
        position: 'absolute' as const,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      }}
    >
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {launch.mission_name}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {launch.details ?? 'No details available for this launch.'}
      </Typography>
      {launch.links.flickr_images.length > 0 && (
        <ImageList sx={{ width: 500 }} cols={3} rowHeight={164}>
          {launch.links.flickr_images.map(image => (
            <ImageListItem key={image}>
              <img src={`${image}`} alt={launch.mission_name} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Box>
  </Modal>
);

export default LaunchDetailModal;
