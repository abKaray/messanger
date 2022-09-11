import React from 'react';

import styles from './MessagePage.module.css';

import { Header } from '../../components/Header';
import { MessageList } from './components/MessageList';
import { MessageCanvas } from './components/MessageCanvas';

import { apiRequest } from '../../api/apiRequest';
import { createUseQuery } from '../../api/createUseQuery';
import { USERS } from '../../constants/queryKey';
import { useGetCurrentUser } from '../../api/common/useGetCurrentUser';

// const useUsersApi = createUseQuery({
//   queryKey: USERS,
//   fetchRequest: () => apiRequest({ method: 'GET', url: '/users' }),
//   selector: res => res?.data || null,
// });

export const MessagePage = ({ currentUser }) => {
  console.log('currentUser :>> ', currentUser);
  // const { data } = useUsersApi();
  // console.log('dataSDSAD :>> ', data);
  // const { data } = useGetCurrentUser();

  return (
    <>
      <Header />
      <div className={styles.content}>
        <MessageList />
        <MessageCanvas />
      </div>
    </>
  );
};
