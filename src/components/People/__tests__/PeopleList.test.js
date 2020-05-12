import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Router } from 'react-router';
import customHistory from '../../../history';
import { PeopleList } from '../PeopleList.js';

afterEach(cleanup);

describe('PeopleList component', () => {
  it('should render the wrapper', () => {
    const fetchPeople = jest.fn();

    const { getByTestId } = render(
      <Router history={customHistory}>
        <PeopleList
          fetchPeople={fetchPeople}
          peopleList={[{ name: 'Luke', url: '/' }]}
        />
      </Router>,
    );

    const peopleList = getByTestId('people-list');

    expect(peopleList);
  });
});
