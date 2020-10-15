import { MissionWrite } from '../components/pages/MissionWrite';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

window.localStorage.setItem(
  'currentUser',
  JSON.stringify({
    curUserToken: {
      value:
        'eyJraWQiOiJxaUhsZllkbzFzSTEtRnJ6LXNBZUtMT0dEY0lDM2R2d2tpOXNXMkhPNGk0IiwiYWxnIjoiUlMyNTYifQ',
    },
  })
);

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
