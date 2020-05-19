import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Router } from 'react-router';
import customHistory from '../../../history';
import { PeopleDetails } from '../PeopleDetails.js';

afterEach(cleanup);

describe('PeopleDetails component', () => {
  it('should render the wrapper', async () => {
    const fetchCharacter = jest.fn();
    const fetchPlanetInfo = jest.fn();
    const fetchAdditionalPeopleData = jest.fn();

    const { getByTestId } = render(
      <Router history={customHistory}>
        <PeopleDetails
          details={{ homeworld: 'Naboo', vehicles: ['http://api/x-wing'] }}
          fetchCharacter={fetchCharacter}
          fetchPlanetInfo={fetchPlanetInfo}
          fetchAdditionalPeopleData={fetchAdditionalPeopleData}
          match={{ params: { id: 12 } }}
        />
      </Router>,
    );

    const peopleList = getByTestId('people-details');

    expect(peopleList);
    await expect(fetchCharacter).toHaveBeenCalledTimes(1);
    await expect(fetchPlanetInfo).toHaveBeenCalledTimes(1);
    await expect(fetchAdditionalPeopleData).toHaveBeenCalledTimes(1);
  });
});
