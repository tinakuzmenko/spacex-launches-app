import * as http2 from 'http2';

import { Alert } from '@mui/material';
import { useContext } from 'react';

import SelectedLaunchesCharts from '../components/launches/SelectedLaunchesCharts';
import SelectedLaunchesTable from '../components/launches/SelectedLaunchesTable';
import launchesContext from '../store/launchesContext';

const Selected = () => {
  const ctx = useContext(launchesContext);
  const isEmpty = ctx.selectedLaunches.length === 0;

  return isEmpty ? (
    <Alert
      severity="info"
      variant="outlined"
      color="warning"
      sx={{ mt: '2rem' }}
    >
      Your list of selected items is currently empty.
    </Alert>
  ) : (
    <>
      <h2>Selected items:</h2>
      <SelectedLaunchesTable />
      <h2>Data visualization:</h2>
      <SelectedLaunchesCharts />
    </>
  );
};

export default Selected;
