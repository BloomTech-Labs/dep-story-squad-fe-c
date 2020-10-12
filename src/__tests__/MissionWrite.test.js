import { MissionWrite } from '../components/pages/MissionWrite';
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

describe('<MissionWrite /> test suite', () => {
  test('renders without errors', () => {
    render(
      <Router>
        <RecoilRoot>
          <MissionWrite />
        </RecoilRoot>
      </Router>
    );
  });
});
