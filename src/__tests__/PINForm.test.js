import React from 'react';
import { render } from '@testing-library/react';
import { PINForm } from '../components/common';

describe('PINForm component', () => {
  test('renders in the dom', () => {
    const { getByLabelText } = render(<PINForm />);
    expect(getByLabelText(/Enter Pin/i)).toBeInTheDocument();
  });
});
