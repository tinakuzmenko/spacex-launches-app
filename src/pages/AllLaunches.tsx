import { useQuery } from '@apollo/client';
import { Alert, AlertTitle, CircularProgress } from '@mui/material';
import { useContext, useEffect } from 'react';

import LaunchList from '../components/launches/LaunchList';
import { getLaunchesByMissionQuery } from '../queries/getLaunches.gql';
import launchesContext from '../store/launchesContext';
import { Launch } from '../types/types';

const AllLaunches = () => {
  const ctx = useContext(launchesContext);

  const { loading, error, data } = useQuery(getLaunchesByMissionQuery, {
    variables: { mission: 'starlink' },
  });

  useEffect(() => {
    if (!data || !data.launches) return;

    const launches: Launch[] = data.launches;

    ctx.updateLaunches(launches);
  }, [data]);

  if (loading) {
    return <CircularProgress sx={{ display: 'grid', m: 'auto', mt: '2rem' }} />;
  }

  if (error) {
    return (
      <Alert severity="error" variant="outlined" sx={{ m: 'auto', mt: '2rem' }}>
        <AlertTitle>Error</AlertTitle>
        {error.message}
      </Alert>
    );
  }

  return <LaunchList />;
};

export default AllLaunches;
