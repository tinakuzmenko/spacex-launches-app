import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Route, Routes } from 'react-router-dom';

import PageLayout from './components/layout/PageLayout';
import AllLaunches from './pages/AllLaunches';
import Selected from './pages/Selected';
import LaunchesProvider from './store/LaunchesProvider';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://spacex-production.up.railway.app/',
});

function App() {
  return (
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
  );
}

export default App;
