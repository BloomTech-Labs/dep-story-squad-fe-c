import RenderMissionWrite from '../components/pages/MissionWrite/RenderMissionWrite';
import React from 'react';
import { render } from '@testing-library/react';

describe('<RenderMissionWrite /> test suite', () => {
  test('renders without errors', () => {
    render(<RenderMissionWrite />);
  });
});
