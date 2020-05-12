import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './SideBar.scss';
import logo from './assets/star-wars.svg';

const SideBar = props => {
  const currentPath = props.location.pathname;

  return (
    <nav className={styles['navigation']} data-testid="sidebar">
      <div className={`${styles['navigation-content']}`}>
        <NavLink to={'/'}>
          <img src={logo} alt="logo"  />
        </NavLink>
        <ul className="slide-fade-in with-delay-05">
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
      </div>
    </nav>
  );
};

export default withRouter(SideBar);
