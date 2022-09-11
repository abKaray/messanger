import React from 'react';

import { AvatarStub } from '../../../../components/AvatarStub';

import styles from './MessageList.module.css';

const messageListMock = [
  {
    message: 'Test message!',
    author: 'Clarissa Jobs',
    avatarSrc: '',
    id: 1,
  },
  {
    message: 'Lorsa ipsum test',
    author: 'Steve Jobs',
    avatarSrc: '',
    id: 2,
  },
  {
    message: 'Hello! How are you ?',
    author: 'Peter Parker',
    avatarSrc: '/',
    id: 3,
  },
  {
    message: 'React is not the best labriary',
    author: 'Dan Abramov',
    avatarSrc: '',
    id: 4,
  },
  {
    message: 'Test message!',
    author: 'Andry Abramov',
    avatarSrc: '',
    id: 5,
  },
];

export const MessageList = ({ currentUser }) => {
  console.log('currentUser :>> ', currentUser);
  // const { data } = useUsersApi();
  // console.log('dataSDSAD :>> ', data);
  // const { data } = useGetCurrentUser();

  return (
    <div className={styles.wrapper}>
      <h3>Title</h3>
      <div>
        <ul className={styles.list}>
          {messageListMock.map(({ message, author, avatarSrc, id }) => {
            return (
              <li className={styles.item} key={id}>
                <div className={styles.itemBlock}>
                  <AvatarStub avatarSrc={avatarSrc} name={author} />
                  <div className={styles.userInfo}>
                    <p className={styles.text}>{author}</p>
                    <p className={styles.text}>{message}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
