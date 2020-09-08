import React from 'react';
import { render } from '@testing-library/react';
import RenderParentDash from './RenderParentDash';

test('ParentDash renders without errors', () => {
  render(<RenderParentDash />);
});
