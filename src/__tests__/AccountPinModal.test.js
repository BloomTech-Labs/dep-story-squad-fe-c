import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AccountPinModal from '../components/pages/AccountPinModal/AccountPinModal';
import { BrowserRouter as Router } from 'react-router-dom';
import ShallowRenderer from 'react-shallow-renderer';

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

  test('modal container renders in the DOM', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<AccountPinModal />);

    const result = renderer.getRenderOutput();
    expect(result.key).toEqual('formModalCont');
  });

  test('modal component renders in the DOM', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<AccountPinModal />);
    const result = renderer.getRenderOutput();

    expect(result.props.children.key).toEqual('formModal');
  });

  test('modal component pushes to login when canceled', async () => {
    // ant-modal-close-x
    const { getByLabelText } = render(
      <Router>
        <AccountPinModal />
      </Router>
    );

    const buttonX = getByLabelText('Close');

    fireEvent.click(buttonX);
    console.log('HERE', global.window.location.pathname);
    await expect(global.window.location.pathname).toEqual('/login');
  });
});
