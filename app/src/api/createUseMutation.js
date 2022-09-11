import { useMutation } from 'react-query';

export function createUseMutation({ fetchRequest }) {
  return function useCustomMutation(options) {
    console.log('options :>> ', options);

    return useMutation(fetchRequest, options);
  };
}
