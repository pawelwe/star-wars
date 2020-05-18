import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from '../../../configureStore';
import customHistory from '../../../history';
import { VehiclesList } from '../VehiclesList.js';

const store = configureStore();

afterEach(cleanup);

describe('VehiclesList component', () => {
  it('should render the wrapper', () => {
    const fetchVehicles = jest.fn();

    const { getByTestId } = render(
      <Router history={customHistory}>
        <Provider store={store}>
          <VehiclesList
            fetchVehicles={fetchVehicles}
            vehicleList={[{ name: 'X-wing', url: '/' }]}
          />
        </Provider>
      </Router>,
    );

    const vehiclesList = getByTestId('vehicles-list');

    expect(vehiclesList);
    expect(fetchVehicles).toHaveBeenCalledTimes(1);
  });
});
