import { apiRequest } from '../apiRequest';
import { createUseQuery } from '../createUseQuery';
import { USER } from '../../constants/queryKey';

export const useGetCurrentUser = createUseQuery({
  queryKey: USER,
  fetchRequest: () => apiRequest({ method: 'GET', url: '/user' }),
  selector: res => res?.data || null,
});
