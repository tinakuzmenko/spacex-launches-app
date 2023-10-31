import React, { FC, PropsWithChildren, useReducer } from 'react';

import { Launch } from '../types/types';

import LaunchesContext from './launchesContext';
import { launchesReducer, LaunchesState } from './launchesReducer';

const defaultLaunchesState: LaunchesState = {
  launches: [],
  selectedLaunches: [],
  totalSelectedLaunchesMass: 0,
};

const LaunchesProvider: FC<PropsWithChildren> = props => {
  const [launchesState, dispatchLaunchesAction] = useReducer(
    launchesReducer,
    defaultLaunchesState,
  );

  const selectLaunchHandler = (id: string) => {
    dispatchLaunchesAction({
      type: 'SELECT_LAUNCH',
      payload: { id },
    });
  };
  const deselectLaunchHandler = (id: string) => {
    dispatchLaunchesAction({
      type: 'DESELECT_LAUNCH',
      payload: { id },
    });
  };

  const updateLaunchesHandler = (launches: Launch[]) => {
    dispatchLaunchesAction({
      type: 'UPDATE_LAUNCHES',
      payload: { launches },
    });
  };

  const launchesContext = {
    launches: launchesState.launches,
    selectedLaunches: launchesState.selectedLaunches,
    totalSelectedLaunchesMass: launchesState.totalSelectedLaunchesMass,
    updateLaunches: updateLaunchesHandler,
    selectLaunch: selectLaunchHandler,
    deselectLaunch: deselectLaunchHandler,
  };

  return (
    <LaunchesContext.Provider value={launchesContext}>
      {props.children}
    </LaunchesContext.Provider>
  );
};

export default LaunchesProvider;
