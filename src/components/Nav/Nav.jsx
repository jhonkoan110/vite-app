import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { tabs } from '../../constants/nav-tabs';
import styles from './Nav.module.scss';

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {tabs.map(({ label, to }) => (
          <NavLink className={({ isActive }) => cn(styles.link, { [styles.activeLink]: isActive })} to={to} key={label}>
            <li>{label}</li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};
