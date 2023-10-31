import { createContext } from 'react';

import { Launch } from '../types/types';

interface LaunchContextInterface {
  launches: Launch[];
  selectedLaunches: Launch[];
  updateLaunches: (launches: Launch[]) => void;
  selectLaunch: (id: string) => void;
  deselectLaunch: (id: string) => void;
}

const LaunchesContext = createContext<LaunchContextInterface>({
  launches: [],
  selectedLaunches: [],
  updateLaunches: (launches: Launch[]) => {},
  selectLaunch: (id: string) => {},
  deselectLaunch: (id: string) => {},
});

export default LaunchesContext;
