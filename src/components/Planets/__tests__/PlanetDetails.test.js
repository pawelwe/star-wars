import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Router } from 'react-router';
import customHistory from '../../../history';
import { PlanetDetails } from '../PlanetDetails.js';

afterEach(cleanup);

describe('PlanetDetails component', () => {
  it('should render the wrapper', () => {
    const fetchPlanet = jest.fn();
    const fetchAdditionalResidentsData = jest.fn();
    const fetchAdditionalPeopleData = jest.fn();

    const { getByTestId } = render(
      <Router history={customHistory}>
        <PlanetDetails
          details={{}}
          fetchPlanet={fetchPlanet}
          fetchAdditionalResidentsData={fetchAdditionalResidentsData}
          fetchAdditionalPeopleData={fetchAdditionalPeopleData}
          match={{ params: { id: 12 } }}
        />
      </Router>,
    );

    const planetList = getByTestId('planet-details');

    expect(planetList);
    expect(fetchPlanet).toHaveBeenCalledTimes(1);
  });
});
