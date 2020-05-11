import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SideBar.scss';
import logo from './assets/star-wars.svg';

const SideBar = () => {
  return (
    <nav className={styles['navigation']}>
      <NavLink to={'/'}>
        <img src={logo} alt="logo" />
      </NavLink>
      <ul>
        <li>
          <NavLink to={'/'}>People</NavLink>
        </li>
        <li>
          <NavLink to={'/vehicles'}>Vehicles</NavLink>
        </li>
        <li>
          <NavLink to={'/planets'}>Planets</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
