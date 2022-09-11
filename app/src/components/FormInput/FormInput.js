import React from 'react';
import { ErrorMessage } from 'formik';

import styles from './FormInput.module.css';

export const FormInput = ({ type = 'text', form, field, label, ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={field.name} className={styles.label}>
        {label}
      </label>
      <input id={field.name} type={type} className={styles.input} {...rest} />
      {form?.errors?.[field.name] && <ErrorMessage className={styles.error} name={field.name} component="span" />}
    </div>
  );
};
