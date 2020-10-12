import { MissionDraw } from '../components/pages/MissionDraw';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/mission/write',
  }),
}));

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
