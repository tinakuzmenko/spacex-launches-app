import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import dayjs from 'dayjs';
import { useContext } from 'react';

import launchesContext from '../../store/launchesContext';
import { calculateRocketEnergyConsumption } from '../../utils/helpers';

const SelectedLaunchesTable = () => {
  const ctx = useContext(launchesContext);
  const { selectedLaunches } = ctx;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Mission name</TableCell>
            <TableCell align="right">Rocket</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Mass (kg)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedLaunches.map(launch => (
            <TableRow key={launch.id}>
              <TableCell>{launch.mission_name}</TableCell>
              <TableCell align="right">{launch.rocket.rocket_name}</TableCell>
              <TableCell align="right">
                {dayjs(launch.launch_date_local).format('DD MMMM YYYY')}
              </TableCell>
              <TableCell align="right">
                {launch.rocket.rocket.mass.kg}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={3}>Total mass (kg)</TableCell>
            <TableCell align="right">{ctx.totalSelectedLaunchesMass}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3}>
              Total estimated energy consumption (Joules)
            </TableCell>
            <TableCell align="right">
              {calculateRocketEnergyConsumption(ctx.totalSelectedLaunchesMass)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SelectedLaunchesTable;
