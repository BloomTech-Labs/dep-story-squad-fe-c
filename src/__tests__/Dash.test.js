import React from 'react';
import { Dash } from '../components/pages/Dash/index';
import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

test('ParentDash renders without errors', () => {
  render(
    <RecoilRoot>
      <Dash />
    </RecoilRoot>
  );
});
