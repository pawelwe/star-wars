import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import { Router, Route } from 'react-router';
import customHistory from '../history';

import SideBar from './SideBar/SideBar.js';
import Messages from './Messages/Messages.js';
import PeopleList from './People/PeopleList.js';
import PeopleDetails from './People/PeopleDetails.js';
import VehiclesList from './Vehicles/VehiclesList.js';
import VehicleDetails from './Vehicles/VehicleDetails.js';
import PlanetsList from './Planets/PlanetsList.js';
import PlanetDetails from './Planets/PlanetDetails.js';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary.js';

import '../styles/index.scss';
import styles from './StarWars.scss';

const store = configureStore();

export const StarWars = () => {
  return (
    <Provider store={store}>
      <div className={styles['main-wrapper']}>
        <ErrorBoundary>
          <Router history={customHistory}>
            <SideBar />
            <div className={styles['content']}>
              <Route path="/" exact component={PeopleList} />
              <Route path="/people/:id" exact component={PeopleDetails} />
              <Route path="/vehicles" exact component={VehiclesList} />
              <Route path="/vehicles/:id" exact component={VehicleDetails} />
              <Route path="/planets" exact component={PlanetsList} />
              <Route path="/planets/:id" exact component={PlanetDetails} />
              <Messages />
            </div>
          </Router>
        </ErrorBoundary>
      </div>
    </Provider>
  );
};
