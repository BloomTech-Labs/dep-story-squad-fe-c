import { AdminDash } from '../components/pages/AdminDash';
import React from 'react';
import { render } from '@testing-library/react';

describe('<AdminDash /> test suite', () => {
  test('renders without errors', () => {
    render(<AdminDash />);
  });
});
