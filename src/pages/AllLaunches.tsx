import { useQuery } from '@apollo/client';
import { Alert, AlertTitle, CircularProgress } from '@mui/material';
import * as React from 'react';
import { useContext, useEffect } from 'react';

import LaunchList from '../components/launches/LaunchList';
import { getLaunchesByMissionQuery } from '../queries/getLaunches.gql';
import launchesContext from '../store/launchesContext';

const AllLaunches = () => {
  const ctx = useContext(launchesContext);

  const { loading, error, data } = useQuery(getLaunchesByMissionQuery, {
    variables: { mission: 'Starlink' },
  });

  useEffect(() => {
    if (!data) return;

    ctx.updateLaunches(data.launches);
  }, [data]);

  if (loading) return <CircularProgress />;

  if (error) {
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {error.message}
      </Alert>
    );
  }

  return <LaunchList />;
};

export default AllLaunches;
