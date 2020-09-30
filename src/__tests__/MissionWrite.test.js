import { MissionWrite } from '../components/pages/MissionWrite';
import React from 'react';
import { render } from '@testing-library/react';

describe('<MissionWrite /> test suite', () => {
  test('renders without errors', () => {
    const setHeaderTitle = () => 'Test Title';
    render(<MissionWrite setHeaderTitle={setHeaderTitle} />);
  });
});
