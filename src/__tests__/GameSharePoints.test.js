import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import GameSharePoints from '../components/pages/GameSharePoints/GameSharePointsContainer';

describe('<GameSquadup/> renders correctly', () => {
  it('displays the correct next and prev buttons', async () => {
    const { getByText } = render(
      <Router>
        <RecoilRoot>
          <GameSharePoints />
        </RecoilRoot>
      </Router>
    );

    getByText(/Exit/i);
    getByText(/submit/i);
  });
});
