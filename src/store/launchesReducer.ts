import { Launch } from '../types/types';

export interface LaunchesState {
  launches: Launch[];
  selectedLaunches: Launch[];
  totalSelectedLaunchesMass: number;
}

interface LaunchesActions {
  type: 'SELECT_LAUNCH' | 'DESELECT_LAUNCH' | 'UPDATE_LAUNCHES';
  payload: {
    id?: string;
    launches?: Launch[];
  };
}

export const launchesReducer = (
  state: LaunchesState,
  action: LaunchesActions,
): LaunchesState => {
  if (action.type === 'SELECT_LAUNCH') {
    const selectedLaunch = state.launches.find(
      launch => launch.id === action.payload.id,
    );
    const selectedLaunchMassKg = selectedLaunch?.rocket.rocket.mass.kg ?? 0;

    return {
      ...state,
      selectedLaunches: selectedLaunch
        ? [...state.selectedLaunches, selectedLaunch]
        : [...state.selectedLaunches],
      totalSelectedLaunchesMass:
        state.totalSelectedLaunchesMass + selectedLaunchMassKg,
    };
  }

  if (action.type === 'DESELECT_LAUNCH') {
    const selectedLaunch = state.launches.find(
      launch => launch.id === action.payload.id,
    );
    const selectedLaunchMassKg = selectedLaunch?.rocket.rocket.mass.kg ?? 0;

    return {
      ...state,
      selectedLaunches: state.selectedLaunches.filter(
        selectedLaunch => selectedLaunch.id !== action.payload.id,
      ),
      totalSelectedLaunchesMass:
        state.totalSelectedLaunchesMass - selectedLaunchMassKg,
    };
  }

  if (action.type === 'UPDATE_LAUNCHES') {
    const launches = action.payload.launches ?? state.launches;
    const sortedLaunches = [...launches].sort((a, b) => {
      if (a.launch_date_local > b.launch_date_local) {
        return -1;
      }
      if (a.launch_date_local < b.launch_date_local) {
        return 1;
      }
      return 0;
    });

    return {
      ...state,
      launches: sortedLaunches,
    };
  }

  return state;
};
