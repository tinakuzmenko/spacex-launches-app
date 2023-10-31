import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useContext, useEffect, useState } from 'react';

import launchesContext from '../store/launchesContext';
import { Launch } from '../types/types';

const Selected = () => {
  const ctx = useContext(launchesContext);

  console.log(ctx);

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container sx={{ py: 0 }} maxWidth="md">
        <h1>Selected items:</h1>
        {ctx.selectedLaunches.map(selectedLaunch => (
          <p key={selectedLaunch.id}>{selectedLaunch.mission_name}</p>
        ))}
      </Container>
    </Box>
  );
};

export default Selected;
