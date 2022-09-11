import { publicApiRequest } from '../../../api/apiRequest';
import { createUseQuery } from '../../../api/createUseQuery';
import { IS_AUTH } from '../../../constants/queryKey';

export const useAuthenticationApi = createUseQuery({
  queryKey: IS_AUTH,
  fetchRequest: data => publicApiRequest({ method: 'POST', url: '/login', data }),
  selector: res => res?.data || null,
});
