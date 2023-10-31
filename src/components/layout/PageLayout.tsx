import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { FC, PropsWithChildren } from 'react';

import Footer from './Footer';
import Navigation from './Navigation';

const PageLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Navigation />
    <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container sx={{ py: 0 }} maxWidth="md">
          {children}
        </Container>
      </Box>
    </main>
    <Footer />
  </>
);

export default PageLayout;
