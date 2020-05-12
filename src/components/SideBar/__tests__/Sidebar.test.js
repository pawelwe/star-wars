import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Router } from 'react-router';
import customHistory from '../../../history';
import SideBar from '../SideBar.js';

afterEach(cleanup);

describe('Sidebar component', () => {
  it('should render sidebar', () => {
    const { getByTestId } = render(
      <Router history={customHistory}>
        <SideBar />
      </Router>,
    );

    const sideBar = getByTestId('sidebar');

    expect(sideBar);
  });
});
