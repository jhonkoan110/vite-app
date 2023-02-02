import React from 'react';
import styles from './Content.module.scss';

export const Content = ({ children }) => {
  return <main className={styles.container}>{children}</main>;
};
