import React from 'react';
import styles from './LoaderWrapper.module.scss';

export const LoaderWrapper = ({ isLoading = false, children }) => {
  if (isLoading) {
    return <h2>Загрузка данных...</h2>;
  }

  return <div className={styles.container}>{children}</div>;
};
