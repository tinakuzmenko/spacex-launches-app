import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';

import PageLayout from './components/layout/PageLayout';
import AllLaunches from './pages/AllLaunches';
import Selected from './pages/Selected';
import LaunchesProvider from './store/LaunchesProvider';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF9800',
    },
    secondary: {
      main: '#9E9E9E',
    },
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://spacex-production.up.railway.app/',
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ApolloProvider client={client}>
        <LaunchesProvider>
          <PageLayout>
            <Routes>
              <Route path="/" element={<AllLaunches />} />
              <Route path="/selected" element={<Selected />} />
            </Routes>
          </PageLayout>
        </LaunchesProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
