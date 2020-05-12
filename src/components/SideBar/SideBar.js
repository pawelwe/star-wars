import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './SideBar.scss';
import logo from './assets/star-wars.svg';

const SideBar = props => {
  const currentPath = props.location.pathname;

  return (
    <nav className={styles['navigation']} data-testid="sidebar">
      <NavLink to={'/'}>
        <img src={logo} alt="logo" />
      </NavLink>
      <ul>
        <li>
          <NavLink
            isActive={() =>
              currentPath === '/' || currentPath.includes('people')
            }
            to={'/'}
          >
            People
          </NavLink>
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

export default withRouter(SideBar);
