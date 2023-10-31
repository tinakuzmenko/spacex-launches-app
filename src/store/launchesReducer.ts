import { Launch } from '../types/types';

export interface LaunchesState {
  launches: Launch[];
  selectedLaunches: Launch[];
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

    return {
      ...state,
      selectedLaunches: selectedLaunch
        ? [...state.selectedLaunches, selectedLaunch]
        : [...state.selectedLaunches],
    };
  }

  if (action.type === 'DESELECT_LAUNCH') {
    return {
      ...state,
      selectedLaunches: state.selectedLaunches.filter(
        selectedLaunch => selectedLaunch.id !== action.payload.id,
      ),
    };
  }

  if (action.type === 'UPDATE_LAUNCHES') {
    return {
      ...state,
      launches: action.payload.launches ?? state.launches,
    };
  }

  return state;
};
