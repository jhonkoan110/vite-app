import React from 'react';
import styles from './Paper.module.scss';

export const Paper = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
