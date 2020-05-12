import React from 'react';
import { Router } from 'react-router';
import customHistory from '../../../history';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { DetailsList } from '../DetailsList.js';

afterEach(cleanup);

describe('Details list component', () => {
  it('should show "n/a" when no data', () => {
    const { getByText } = render(<DetailsList />);
    const detailsList = getByText('n/a');

    expect(detailsList);
  });

  it('should show loading indicator', () => {
    const { getByTestId } = render(<DetailsList isBusy />);
    const loadingText = getByTestId('loading more');

    expect(loadingText);
  });

  it('should render a list of details', () => {
    const links = [
      'http://swapi.dev/api/films/2/',
      'http://swapi.dev/api/films/3/',
    ];

    const { getByText } = render(
      <Router history={customHistory}>
        <DetailsList
          links={links}
          namesList={['film 1', 'film 2']}
          linkPrefix={'/test'}
          isBusy={false}
        />
      </Router>,
    );

    const detail1 = getByText('film 1,');
    const detail2 = getByText('film 2');

    expect(detail1);
    expect(detail2);
  });
});
