import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import dayjs from 'dayjs';
import { useContext } from 'react';
import * as React from 'react';

import launchesContext from '../../store/launchesContext';
import { calculateRocketEnergyConsumption } from '../../utils/helpers';

const SelectedLaunchesTable = () => {
  const ctx = useContext(launchesContext);
  const { selectedLaunches } = ctx;
  const intl = new Intl.NumberFormat('en-US');

  const removeItemHandler = (id: string) => {
    ctx.deselectLaunch(id);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Mission name</TableCell>
            <TableCell>Rocket</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Mass (kg)</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedLaunches.map(launch => (
            <TableRow key={launch.id}>
              <TableCell>{launch.mission_name}</TableCell>
              <TableCell>{launch.rocket.rocket_name}</TableCell>
              <TableCell align="right">
                {dayjs(launch.launch_date_local).format('DD MMMM YYYY')}
              </TableCell>
              <TableCell align="right">
                {intl.format(launch.rocket.rocket.mass.kg)}
              </TableCell>
              <TableCell align="right">
                <Button
                  size="small"
                  variant="contained"
                  startIcon={<DeleteIcon />}
                  color="primary"
                  onClick={() => removeItemHandler(launch.id)}
                >
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={3}>Total mass (kg)</TableCell>
            <TableCell align="right">
              {intl.format(ctx.totalSelectedLaunchesMass)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3}>
              Total estimated energy consumption (J)
            </TableCell>
            <TableCell align="right">
              {intl.format(
                calculateRocketEnergyConsumption(ctx.totalSelectedLaunchesMass),
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SelectedLaunchesTable;
