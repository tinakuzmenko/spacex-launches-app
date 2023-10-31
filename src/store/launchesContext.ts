import { createContext } from 'react';

import { Launch } from '../types/types';

interface LaunchContextInterface {
  launches: Launch[];
  selectedLaunches: Launch[];
  totalSelectedLaunchesMass: number;
  updateLaunches: (launches: Launch[]) => void;
  selectLaunch: (id: string) => void;
  deselectLaunch: (id: string) => void;
}

const LaunchesContext = createContext<LaunchContextInterface>({
  launches: [],
  selectedLaunches: [],
  totalSelectedLaunchesMass: 0,
  updateLaunches: (launches: Launch[]) => {},
  selectLaunch: (id: string) => {},
  deselectLaunch: (id: string) => {},
});

export default LaunchesContext;
