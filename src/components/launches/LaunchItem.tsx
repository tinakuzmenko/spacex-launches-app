import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Modal } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import * as React from 'react';
import { FC, useContext, useEffect, useState } from 'react';

import launchesContext from '../../store/launchesContext';
import { Launch } from '../../types/types';

import LaunchDetailModal from './LaunchDetailModal';

interface LaunchItemProps {
  launch: Launch;
}

const LaunchItem: FC<LaunchItemProps> = ({ launch }) => {
  const ctx = useContext(launchesContext);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const detailsClickHandler = () => setIsOpen(true);
  const closeHandler = () => setIsOpen(false);

  const parsedDate = dayjs(launch.launch_date_local).format('DD MMMM YYYY');

  useEffect(() => {
    setIsSelected(
      ctx.selectedLaunches.some(
        selectedLaunch => selectedLaunch.id === launch.id,
      ),
    );
  }, [ctx.selectedLaunches]);

  const selectClickHandler = () => {
    ctx.selectLaunch(launch.id);
  };

  const deselectClickHandler = () => {
    ctx.deselectLaunch(launch.id);
  };

  return (
    <>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {launch.mission_name}
          </Typography>
          <Typography>{parsedDate}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={detailsClickHandler}>
            Details
          </Button>
          <Button
            size="small"
            variant="contained"
            startIcon={!isSelected ? <AddIcon /> : <DeleteIcon />}
            color={!isSelected ? 'primary' : 'secondary'}
            onClick={!isSelected ? selectClickHandler : deselectClickHandler}
          >
            {!isSelected ? 'Select' : 'Deselect'}
          </Button>
        </CardActions>
      </Card>
      <LaunchDetailModal
        onClose={closeHandler}
        launch={launch}
        isOpen={isOpen}
      />
    </>
  );
};

export default LaunchItem;
