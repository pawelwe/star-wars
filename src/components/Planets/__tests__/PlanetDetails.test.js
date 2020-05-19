import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Router } from 'react-router';
import customHistory from '../../../history';
import { PlanetDetails } from '../PlanetDetails.js';

afterEach(cleanup);

describe('PlanetDetails component', () => {
  it('should render the wrapper', async () => {
    const fetchPlanet = jest.fn();
    const fetchAdditionalResidentsData = jest.fn();

    const { getByTestId } = render(
      <Router history={customHistory}>
        <PlanetDetails
          details={{residents: ['Luke'] }}
          fetchPlanet={fetchPlanet}
          fetchAdditionalResidentsData={fetchAdditionalResidentsData}
          match={{ params: { id: 12 } }}
        />
      </Router>,
    );

    const planetList = getByTestId('planet-details');

    expect(planetList);
    await expect(fetchPlanet).toHaveBeenCalledTimes(1);
    await expect(fetchAdditionalResidentsData).toHaveBeenCalledTimes(1);
  });
});
