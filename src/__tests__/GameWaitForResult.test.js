import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import GameWaitForResult from '../components/pages/GameWaitForResult/GameWaitForResultContainer';

describe('<GameWaitForResult/> renders correctly', () => {
  it('displays the correct next and prev buttons', async () => {
    const { getByText, debug } = render(
      <Router>
        <RecoilRoot>
          <GameWaitForResult />
        </RecoilRoot>
      </Router>
    );
    // getByText(/Waiting for the rest of the votes/i);
    getByText(/Exit/i);
    getByText(/home/i);
  });
});
