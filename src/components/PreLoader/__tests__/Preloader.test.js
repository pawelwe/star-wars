import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PreLoader } from '../PreLoader.js';

afterEach(cleanup);

describe('Preloader component', () => {
  it('should render preloader wrapper', () => {
    const { getByTestId } = render(<PreLoader />);

    const preloader = getByTestId('preloader');

    expect(preloader);
  });
});
