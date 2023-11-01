import { useTheme } from '@mui/material';
import { useContext } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import launchesContext from '../../store/launchesContext';
import { calculateRocketEnergyConsumption } from '../../utils/helpers';

const SelectedLaunchesCharts = () => {
  const ctx = useContext(launchesContext);
  const theme = useTheme();
  const { selectedLaunches } = ctx;

  const data = selectedLaunches.map(selectedLaunch => ({
    missionName: selectedLaunch.mission_name,
    energyConsumption: calculateRocketEnergyConsumption(
      selectedLaunch.rocket.rocket.mass.kg,
    ),
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="missionName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="energyConsumption"
          barSize={30}
          fill={theme.palette.primary.light}
          name="Estimated energy consumption (J)"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SelectedLaunchesCharts;
