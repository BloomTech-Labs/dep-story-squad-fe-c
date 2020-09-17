import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AccountPinModal } from '../components/common';
import { BrowserRouter as Router } from 'react-router-dom';

describe('AccountPinModal', () => {
  test('modal container renders in the DOM', () => {
    const { getByTestId } = render(<AccountPinModal />);
    expect(getByTestId('formModalCont')).toBeInTheDocument();
  });

  test('modal component renders in the DOM', () => {
    const { getByTestId } = render(<AccountPinModal />);

    expect(getByTestId(/formModal/i)).toBeInTheDocument();
  });

  test('modal component pushes to login when canceled', async () => {
    // ant-modal-close-x
    const { getByLabelText } = render(
      <Router>
        <AccountPinModal />
      </Router>
    );

    // const buttonX = getByRole('button', { name: 'Close' });
    const buttonX = getByLabelText('Close');

    fireEvent.click(buttonX);
    console.log('HERE', global.window.location.pathname);
    await expect(global.window.location.pathname).toEqual('/login');
  });
});
