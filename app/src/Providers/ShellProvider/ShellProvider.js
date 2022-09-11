import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AuthProviders } from '../AuthProviders';

export const ShellProvider = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <AuthProviders>{children}</AuthProviders>
      </QueryClientProvider>
    </Router>
  );
};
