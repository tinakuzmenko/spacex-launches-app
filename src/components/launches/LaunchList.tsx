import { gql, useQuery } from '@apollo/client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import * as React from 'react';

import LaunchItem from './LaunchItem';

const GET_LAUNCHES = gql`
  query Launches($limit: Int) {
    launches(limit: $limit) {
      id
      launch_success
      mission_name
      details
      launch_date_local
      links {
        flickr_images
      }
      rocket {
        rocket_name
      }
    }
  }
`;

const LaunchList = () => {
  const { loading, error, data } = useQuery(GET_LAUNCHES, {
    variables: { limit: 20 },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  const { launches } = data;

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container sx={{ py: 0 }} maxWidth="md">
        <Grid container spacing={4}>
          {launches.map((launch: any) => (
            <Grid item key={launch.id} xs={12} sm={6} md={4}>
              <LaunchItem launch={launch} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LaunchList;
