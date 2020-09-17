import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FormModalComp } from '../components/common';
import { BrowserRouter as Router } from 'react-router-dom';

describe('FormModalComp', () => {
  test('modal container renders in the DOM', () => {
    const { getByTestId } = render(<FormModalComp />);
    expect(getByTestId('formModalCont')).toBeInTheDocument();
  });

  test('modal component renders in the DOM', () => {
    const { getByTestId } = render(<FormModalComp />);

    expect(getByTestId(/formModal/i)).toBeInTheDocument();
  });

  test('modal component pushes to login when canceled', async () => {
    // ant-modal-close-x
    const { getByLabelText } = render(
      <Router>
        <FormModalComp />
      </Router>
    );

    // const buttonX = getByRole('button', { name: 'Close' });
    const buttonX = getByLabelText('Close');

    fireEvent.click(buttonX);
    console.log('HERE', global.window.location.pathname);
    await expect(global.window.location.pathname).toEqual('/login');
  });
});
