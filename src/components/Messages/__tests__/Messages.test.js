import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Messages } from '../Messages.js';

afterEach(cleanup);

describe('Messages component', () => {
  it('should show messages when busy', () => {
    const { getByTestId } = render(<Messages isBusy />);

    const messages = getByTestId('messages');

    expect(messages);
  });

  it('should render error message on error', () => {
    const { getByTestId } = render(<Messages error="404" />);

    const messages = getByTestId('error');

    expect(messages).toHaveTextContent('404');
  });
});
