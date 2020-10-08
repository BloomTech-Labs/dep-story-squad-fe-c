import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AccountPinModal from '../components/pages/AccountPinModal/AccountPinModal';
import { BrowserRouter as Router } from 'react-router-dom';
import ShallowRenderer from 'react-shallow-renderer';
import { RecoilRoot } from 'recoil';

describe('AccountPinModal', () => {
  window.localStorage.setItem(
    'okta-token-storage',
    JSON.stringify({
      idToken: {
        value:
          'eyJraWQiOiJxaUhsZllkbzFzSTEtRnJ6LXNBZUtMT0dEY0lDM2R2d2tpOXNXMkhPNGk0IiwiYWxnIjoiUlMyNTYifQ',
      },
    })
  );

  test('modal component pushes to login when canceled', async () => {
    // ant-modal-close-x
    const { getByLabelText } = render(
      <Router>
        <RecoilRoot>
          <AccountPinModal />
        </RecoilRoot>
      </Router>
    );

    const buttonX = getByLabelText('Close');

    fireEvent.click(buttonX);
    console.log('HERE', global.window.location.pathname);
    await expect(global.window.location.pathname).toEqual('/login');
  });
});
