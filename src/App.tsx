import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Route, Routes } from 'react-router-dom';

import LaunchList from './components/launches/LaunchList';
import Selected from './components/launches/Selected';
import PageLayout from './components/layout/PageLayout';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://spacex-production.up.railway.app/',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <PageLayout>
        <Routes>
          <Route path="/" element={<LaunchList />} />
          <Route path="/selected" element={<Selected />} />
        </Routes>
      </PageLayout>
    </ApolloProvider>
  );
}

export default App;
