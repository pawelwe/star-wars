import React from 'react';
import { render, cleanup, fireEvent, getByText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Pager } from '../Pager.js';

afterEach(cleanup);

describe('Pager component', () => {
  it('should render the wrapper', () => {
    const setPage = jest.fn();

    const { getByTestId } = render(
      <Pager currentPage={1} itemsCount={3} setPage={setPage} />,
    );

    const pager = getByTestId('pager');

    expect(pager);
  });

  it('should invoke callback on page change', () => {
    const setPage = jest.fn();

    const { getByTestId } = render(
      <Pager currentPage={1} itemsCount={3} setPage={setPage} />,
    );

    const pager = getByTestId('pager');
    const link1 = getByText(pager, '1');

    fireEvent.click(link1);

    expect(setPage).toBeCalledTimes(1);
  });

  it('should invoke callback on going to prev page', () => {
    const setPage = jest.fn();

    const { getByTestId } = render(
      <Pager currentPage={2} itemsCount={3} setPage={setPage} />,
    );

    const pager = getByTestId('pager');
    const link1 = getByText(pager, 'prev');

    fireEvent.click(link1);

    expect(setPage).toBeCalledTimes(1);
  });

  it('should invoke callback on going to next page', () => {
    const setPage = jest.fn();

    const { getByTestId } = render(
      <Pager currentPage={2} itemsCount={10} setPage={setPage} />,
    );

    const pager = getByTestId('pager');
    const link1 = getByText(pager, 'next');

    fireEvent.click(link1);

    expect(setPage).toBeCalledTimes(1);
  });
});
