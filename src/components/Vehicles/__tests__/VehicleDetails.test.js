import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Router } from 'react-router';
import customHistory from '../../../history';
import { VehicleDetails } from '../VehicleDetails.js';

afterEach(cleanup);

describe('VehicleDetails component', () => {
  it('should render the wrapper', async () => {
    const fetchVehicle = jest.fn();
    const fetchAdditionalUsersData = jest.fn();

    const { getByTestId } = render(
      <Router history={customHistory}>
        <VehicleDetails
          details={{ pilots: ['Luke'] }}
          fetchVehicle={fetchVehicle}
          fetchAdditionalUsersData={fetchAdditionalUsersData}
          match={{ params: { id: 12 } }}
        />
      </Router>,
    );

    const vehicleDetails = getByTestId('vehicle-details');

    expect(vehicleDetails);
    await expect(fetchVehicle).toHaveBeenCalledTimes(1);
    await expect(fetchAdditionalUsersData).toHaveBeenCalledTimes(1);
  });
});
