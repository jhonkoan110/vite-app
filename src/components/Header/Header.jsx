import React from 'react';
import { Nav } from '../Nav/Nav';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.container}>
      <Nav />
    </header>
  );
};
