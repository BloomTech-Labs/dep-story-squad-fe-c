import React from 'react';
import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import LoginContainer from '../components/pages/Login/LoginContainer';

describe('<LoginContainer /> test suite', () => {
  test('signin widget mounts successfully', () => {
    const { container } = render(
      <RecoilRoot>
        <LoginContainer />
      </RecoilRoot>
    );
    expect(container.querySelector('#sign-in-widget')).toBeTruthy();
  });
});
