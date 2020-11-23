import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import GameSquadup from '../components/pages/GameSquadup/GameSquadupContainer';

describe('<GameSquadup/> renders correctly', () => {
  it('displays the correct next and prev buttons', () => {
    const { getByText, debug } = render(
      <Router>
        <RecoilRoot>
          <GameSquadup />
        </RecoilRoot>
      </Router>
    );

    getByText(/Exit/i);
    getByText(/Share Points/i);
  });
});
