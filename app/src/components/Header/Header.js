import React from 'react';

import styles from './Header.module.css';

export const Header = () => (
  <header>
    <nav>
      <ul className={styles.list}>
        <div className={styles.itemsWrapper}>
          <li className={styles.listItem}>
            <a href="/" className={styles.link}>
              Message
            </a>
          </li>
          <li className={styles.listItem}>
            <a href="/" className={styles.link}>
              Settings
            </a>
          </li>
        </div>
        <div className={styles.itemsWrapper}>
          <li className={styles.listItem}>
            <a href="/" className={styles.link}>
              About
            </a>
          </li>
          <li className={styles.listItem}>
            <a href="/" className={styles.link}>
              Log out
            </a>
          </li>
        </div>
      </ul>
    </nav>
  </header>
);
