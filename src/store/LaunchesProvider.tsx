import React, { FC, PropsWithChildren, useEffect, useReducer } from 'react';

import { Launch } from '../types/types';
import { getFromStorage, setToStorage } from '../utils/storage';

import LaunchesContext from './launchesContext';
import { launchesReducer, LaunchesState } from './launchesReducer';

const selectedLaunches = getFromStorage('selectedLaunches') ?? [];

const defaultLaunchesState: LaunchesState = {
  launches: [],
  selectedLaunches,
};

const LaunchesProvider: FC<PropsWithChildren> = props => {
  const [launchesState, dispatchLaunchesAction] = useReducer(
    launchesReducer,
    defaultLaunchesState,
  );

  useEffect(() => {
    setToStorage('selectedLaunches', launchesState.selectedLaunches);
  }, [launchesState.selectedLaunches]);

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
