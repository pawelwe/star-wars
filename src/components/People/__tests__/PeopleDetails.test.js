import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Router } from 'react-router';
import customHistory from '../../../history';
import { PeopleDetails } from '../PeopleDetails.js';

afterEach(cleanup);

describe('PeopleDetails component', () => {
  it('should render the wrapper', () => {
    const fetchCharacter = jest.fn();
    const fetchPlanetInfo = jest.fn();
    const fetchAdditionalPeopleData = jest.fn();

    const { getByTestId } = render(
      <Router history={customHistory}>
        <PeopleDetails
          details={{}}
          fetchCharacter={fetchCharacter}
          fetchPlanetInfo={fetchPlanetInfo}
          fetchAdditionalPeopleData={fetchAdditionalPeopleData}
          match={{ params: { id: 12 } }}
        />
      </Router>,
    );

    const peopleList = getByTestId('people-details');

    expect(peopleList);
    expect(fetchCharacter).toHaveBeenCalledTimes(1);
  });
});
