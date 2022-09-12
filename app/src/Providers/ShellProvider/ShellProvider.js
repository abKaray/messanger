import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AuthProviders } from '../AuthProviders';
import { ThemeProvider } from '../ThemeProvider';

export const ShellProvider = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <AuthProviders>{children}</AuthProviders>
        </ThemeProvider>
      </QueryClientProvider>
    </Router>
  );
};
