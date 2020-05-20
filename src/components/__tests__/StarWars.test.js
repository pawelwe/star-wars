import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { StarWars } from '../StarWars.js';

afterEach(cleanup);

describe('StarWars component', () => {
  it('should show correct components', () => {
    const { getByTestId } = render(<StarWars />);

    const app = getByTestId('app-wrapper');
    const sideBar = getByTestId('sidebar');
    const messages = getByTestId('messages');

    expect(app);
    expect(sideBar);
    expect(messages);
  });
});
