import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import * as React from 'react';
import { FC } from 'react';

interface LaunchItemProps {
  launch: {
    id: string;
    launch_success: boolean | null;
    mission_name: string;
    details: string;
    launch_date_local: string;
    links: {
      flickr_images: string[];
    };
    rocket: {
      rocket_name: string;
    };
  };
}

const LaunchItem: FC<LaunchItemProps> = ({ launch }) => {
  const parsedDate = dayjs(launch.launch_date_local).format('DD MMMM YYYY');

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
        <Typography>{parsedDate}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Details</Button>
        <Button size="small">Select</Button>
      </CardActions>
    </Card>
  );
};

export default LaunchItem;
