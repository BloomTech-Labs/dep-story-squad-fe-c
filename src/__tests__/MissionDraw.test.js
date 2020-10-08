import { MissionDraw } from '../components/pages/MissionDraw';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

describe('<MissionDraw /> test suite', () => {
  test('renders without errors', () => {
    render(
      <Router>
        <RecoilRoot>
          <MissionDraw />
        </RecoilRoot>
      </Router>
    );
  });
});
