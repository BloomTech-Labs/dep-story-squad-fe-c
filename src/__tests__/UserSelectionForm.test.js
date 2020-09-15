import React from 'react';
import { render } from '@testing-library/react';
import { UserForm } from '../components/common';

describe('UserForm component', () => {
  test('renders in the dom', () => {
    const { getByText } = render(<UserForm />);
    expect(
      getByText(
        /So we can direct you to the right place, please let us know who you are./i
      )
    ).toBeInTheDocument();
  });
});
