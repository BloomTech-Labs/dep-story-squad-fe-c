import { MissionWrite } from '../components/pages/MissionWrite';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<MissionWrite /> test suite', () => {
  test('renders without errors', () => {
    const setHeaderTitle = () => 'Test Title';
    render(
      <Router>
        <MissionWrite />
      </Router>
    );
  });
});
