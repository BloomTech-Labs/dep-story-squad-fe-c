import React from 'react';
import { Dash } from '../components/pages/Dash/index';
import { render } from '@testing-library/react';

test('ParentDash renders without errors', () => {
  render(<Dash />);
});
