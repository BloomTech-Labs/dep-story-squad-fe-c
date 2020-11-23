import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import GameMatchup from '../components/pages/GameMatchUp/GameMatchUpContainer';

describe('<GameMatchup/> renders correctly', () => {
  it('displays the correct next and prev buttons', async () => {
    const { getByText } = render(
      <Router>
        <RecoilRoot>
          <GameMatchup />
        </RecoilRoot>
      </Router>
    );

    getByText(/Exit/i);
    getByText(/vote/i);
  });
});
