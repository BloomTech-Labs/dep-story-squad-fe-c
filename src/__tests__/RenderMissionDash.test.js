import RenderMissionDash from '../components/pages/MissionDash/RenderMissionDash';
import React from 'react';
import { render } from '@testing-library/react';

describe('<RenderMissionDash /> test suite', () => {
  test('renders without errors', () => {
    render(<RenderMissionDash />);
  });
});
