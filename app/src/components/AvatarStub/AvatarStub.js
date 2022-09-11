import React from 'react';

import { getFirstNameLetter } from '../../utils/getFirstNameLetter';

import styles from './AvatarStub.module.css';

export const AvatarStub = ({ avatarSrc, alt, name }) =>
  avatarSrc ? (
    <img className={styles.avatar} src={avatarSrc} alt={alt || 'avatar'} />
  ) : (
    <div className={styles.avatarStub} aria-roledescription="avatar stub">
      <p className={styles.avatarName}>{getFirstNameLetter(name)}</p>
    </div>
  );
