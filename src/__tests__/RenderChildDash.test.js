import RenderChildDash from '../components/pages/ChildDash/RenderChildDash';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

describe('<RenderChildDash /> test suite', () => {
  test('renders without errors', () => {
    render(
      <Router>
        <RecoilRoot>
          <RenderChildDash />
        </RecoilRoot>
      </Router>
    );
  });
});
