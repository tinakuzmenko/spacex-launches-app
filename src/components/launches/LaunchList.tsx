import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import * as React from 'react';

import LaunchItem from './LaunchItem';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const LaunchList = () => (
  <main>
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container sx={{ py: 0 }} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map(card => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <LaunchItem />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  </main>
);

export default LaunchList;
