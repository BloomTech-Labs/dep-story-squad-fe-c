import { Logout } from '../components/pages/ParentDash/components';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('@okta/okta-react', () => ({
  useOktaAuth: () => {
    return {
      authState: {},
      authService: {},
    };
  },
}));

test('Logout page renders without errors', () => {
  render(
    <Router>
      <Logout />
    </Router>
  );
});
