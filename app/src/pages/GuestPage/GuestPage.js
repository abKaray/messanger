import React, { useState } from 'react';

import { AUTH_PAGE_NUMBER, REG_PAGE_NUMBER } from './GuestPageConstants';
import { Registration } from '../../modules/registration';
import { Authentication } from '../../modules/authentication';

import styles from './GuestPage.module.css';

export const GuestPage = () => {
  const [currentPage, setCurrentPage] = useState(AUTH_PAGE_NUMBER);

  const handleChangeTab = newPage => () => {
    setCurrentPage(newPage);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.tabWrapper}>
          <ul className={styles.list}>
            <li role="presentation" onClick={handleChangeTab(AUTH_PAGE_NUMBER)} className={styles.item}>
              Authentication
            </li>
            <li role="presentation" onClick={handleChangeTab(REG_PAGE_NUMBER)} className={styles.item}>
              Registration
            </li>
          </ul>
        </div>
        {currentPage === AUTH_PAGE_NUMBER ? <Authentication /> : <Registration />}
      </div>
    </div>
  );
};
