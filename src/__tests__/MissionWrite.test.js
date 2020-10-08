import { MissionWrite } from '../components/pages/MissionWrite';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

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
