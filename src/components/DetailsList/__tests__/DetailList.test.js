import React from 'react';
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
});
