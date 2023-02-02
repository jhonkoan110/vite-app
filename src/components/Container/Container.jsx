import React from 'react';
import cn from 'classnames';
import styles from './Container.module.scss';

export const Container = ({ children, className, ...divProps }) => {
  return (
    <div className={cn(styles.container, className)} {...divProps}>
      {children}
    </div>
  );
};
