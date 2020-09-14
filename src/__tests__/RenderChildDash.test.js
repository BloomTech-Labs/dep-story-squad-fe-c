import RenderChildDash from '../components/pages/ChildDash/RenderChildDash';
import React from 'react';
import { render } from '@testing-library/react';

describe('<RenderChildDash /> test suite', () => {
  test('renders without errors', () => {
    render(<RenderChildDash />);
  });
});
