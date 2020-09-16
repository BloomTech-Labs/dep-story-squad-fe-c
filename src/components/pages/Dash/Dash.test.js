import React from 'react';
import { Dash } from './index';
import { render } from '@testing-library/react';

test('ParentDash renders without errors', () => {
  render(<Dash />);
});
