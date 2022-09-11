import React from 'react';

import styles from './MessageCanvas.module.css';

// import { Header } from '../../components/Header';

// import { apiRequest } from '../../api/apiRequest';
// import { createUseQuery } from '../../api/createUseQuery';
// import { USERS } from '../../constants/queryKey';
// import { useGetCurrentUser } from '../../api/common/useGetCurrentUser';

// const useUsersApi = createUseQuery({
//   queryKey: USERS,
//   fetchRequest: () => apiRequest({ method: 'GET', url: '/users' }),
//   selector: res => res?.data || null,
// });

export const MessageCanvas = ({ currentUser }) => {
  console.log('currentUser :>> ', currentUser);
  // const { data } = useUsersApi();
  // console.log('dataSDSAD :>> ', data);
  // const { data } = useGetCurrentUser();

  return (
    <div className={styles.wrapper}>
      <h1>MessageCanvas</h1>
    </div>
  );
};
