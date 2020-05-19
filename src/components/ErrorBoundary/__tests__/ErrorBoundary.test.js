import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ErrorBoundary from '../ErrorBoundary.js';

afterEach(cleanup);

function Bomb({ shouldThrow }) {
  if (shouldThrow) {
    throw new Error('💣');
  } else {
    return null;
  }
}

describe('Error boundary component', () => {
  it('should render error message', () => {
    const { getByText } = render(<Bomb shouldThrow />, {
      wrapper: ErrorBoundary,
    });
    const errorBoundaryMessage = getByText('Something went wrong :(');

    expect(errorBoundaryMessage);
  });
});
