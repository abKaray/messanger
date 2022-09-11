import { useContext } from 'react';

import { AuthContext } from '../Providers/AuthProviders';

export const useAuth = () => {
  return useContext(AuthContext);
};
