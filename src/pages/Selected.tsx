import * as http2 from 'http2';

import { useContext } from 'react';

import SelectedLaunchesTable from '../components/launches/SelectedLaunchesTable';
import launchesContext from '../store/launchesContext';

const Selected = () => {
  const ctx = useContext(launchesContext);
  const isEmpty = ctx.selectedLaunches.length === 0;

  return isEmpty ? (
    <h2>Your list of selected items is empty.</h2>
  ) : (
    <>
      <h2>Selected items:</h2>
      <SelectedLaunchesTable />
    </>
  );
};

export default Selected;
