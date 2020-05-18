import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from '../../../configureStore';
import customHistory from '../../../history';
import { PeopleList } from '../PeopleList.js';

const store = configureStore();

afterEach(cleanup);

describe('PeopleList component', () => {
  it('should render the wrapper', () => {
    const fetchPeople = jest.fn();

    const { getByTestId } = render(
      <Router history={customHistory}>
        <Provider store={store}>
          <PeopleList
            fetchPeople={fetchPeople}
            peopleList={[{ name: 'Luke', url: '/' }]}
          />
        </Provider>
      </Router>,
    );

    const peopleList = getByTestId('people-list');

    expect(peopleList);
  });
});
