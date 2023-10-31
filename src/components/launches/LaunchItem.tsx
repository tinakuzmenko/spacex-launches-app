import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import * as React from 'react';
import { FC, useContext, useEffect, useState } from 'react';

import launchesContext from '../../store/launchesContext';
import { Launch } from '../../types/types';

interface LaunchItemProps {
  launch: Launch;
}

const LaunchItem: FC<LaunchItemProps> = ({ launch }) => {
  const ctx = useContext(launchesContext);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const parsedDate = dayjs(launch.launch_date_local).format('DD MMMM YYYY');

  console.log(launch);

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
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia
        component="div"
        sx={{
          // 16:9
          pt: '56.25%',
        }}
        image={
          launch.links.flickr_images[0] ??
          'https://source.unsplash.com/random?space'
        }
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {launch.mission_name}
        </Typography>
        <Typography>{launch.rocket.rocket_name}</Typography>
        <Typography>{launch.rocket.rocket_type}</Typography>
        <Typography>{parsedDate}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Details</Button>
        <Button
          size="small"
          onClick={!isSelected ? selectClickHandler : deselectClickHandler}
        >
          {!isSelected ? 'Select' : 'Deselect'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default LaunchItem;
