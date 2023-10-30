import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Footer = () => (
  <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
    <Typography variant="h6" align="center" gutterBottom>
      Launches
    </Typography>
    <Typography
      variant="subtitle1"
      align="center"
      color="text.secondary"
      component="p"
    >
      Built with{' '}
      <Link
        color="inherit"
        href="https://studio.apollographql.com/public/SpaceX-pxxbxen/variant/current/home"
      >
        SpaceX GraphQL API
      </Link>
    </Typography>
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/tinakuzmenko">
        Tina Kuzmenko
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  </Box>
);

export default Footer;
