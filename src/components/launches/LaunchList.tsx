import Grid from '@mui/material/Grid';
import * as React from 'react';
import { FC, useContext, useEffect, useState } from 'react';

import launchesContext from '../../store/launchesContext';
import { Launch } from '../../types/types';

import LaunchItem from './LaunchItem';

const LaunchList = () => {
  const ctx = useContext(launchesContext);
  const [launches, setLaunches] = useState<Launch[]>([]);

  useEffect(() => {
    setLaunches(ctx.launches);
  }, [ctx.launches]);

  return (
    <>
      <h2>Total results: {launches.length}</h2>
      <Grid container spacing={4}>
        {launches.map((launch: Launch) => (
          <Grid item key={launch.id} xs={12} sm={6} md={4}>
            <LaunchItem launch={launch} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default LaunchList;
