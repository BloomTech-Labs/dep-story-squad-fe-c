import React from 'react';
import { render } from '@testing-library/react';
import RenderMissionDash from '../components/pages/MissionDash/RenderMissionDash';
import GetStories from '../components/pages/MissionDash/GetStories';

describe('<RenderMissionDash /> test suite', () => {
  test('renders without errors', () => {
    render(<RenderMissionDash />);
  });
});

describe('<GetStories /> test suite', () => {
  test('renders without errors', () => {
    render(<GetStories />);
  });
});
