import React from 'react';

import styles from './Button.module.css';

export const Button = ({ type = 'button', children, ...rest }) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className={styles.button} {...rest}>
    {children}
  </button>
);
