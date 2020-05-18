import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from '../../../configureStore';
import customHistory from '../../../history';
import { PlanetsList } from '../PlanetsList.js';

const store = configureStore();

afterEach(cleanup);

describe('PeopleList component', () => {
  it('should render the wrapper', () => {
    const fetchPlanets = jest.fn();

    const { getByTestId } = render(
      <Router history={customHistory}>
        <Provider store={store}>
          <PlanetsList
            fetchPlanets={fetchPlanets}
            planetsList={[{ name: 'mars', url: '/' }]}
          />
        </Provider>
      </Router>,
    );

    const peopleList = getByTestId('planets-list');

    expect(peopleList);
    expect(fetchPlanets).toHaveBeenCalledTimes(1);
  });
});
