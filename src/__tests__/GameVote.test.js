import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import GameVote from '../components/pages/GameVote/GameVoteContainer';

describe('<GameSquadup/> renders correctly', () => {
  it('displays the correct next and prev buttons', () => {
    const { getByText, debug } = render(
      <Router>
        <RecoilRoot>
          <GameVote />
        </RecoilRoot>
      </Router>
    );

    getByText(/Exit/i);
    getByText(/submit/i);
  });
});
