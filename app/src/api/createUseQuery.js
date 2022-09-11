import { useMemo } from 'react';
import { useQuery } from 'react-query';

export const createUseQuery = ({ queryKey, fetchRequest, selector }) => {
  return (options = {}) => {
    const { params = {}, ...queryOptions } = options;
    const { data, ...rest } = useQuery(queryKey, () => fetchRequest(params), {
      retry: 0,
      refetchOnWindowFocus: false,
      ...queryOptions,
    });

    return {
      ...rest,
      data: useMemo(() => selector(data), [data]),
      response: data,
    };
  };
};
