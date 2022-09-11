import { apiRequest } from '../apiRequest';
import { createUseQuery } from '../createUseQuery';
import { REFRESH_TOKEN } from '../../constants/queryKey';

export const useRefreshToken = createUseQuery({
  queryKey: REFRESH_TOKEN,
  fetchRequest: () => apiRequest({ method: 'GET', url: '/refreshToken' }),
  selector: res => res?.data || null,
});
