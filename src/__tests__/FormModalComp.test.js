import React from 'react';
import { render } from '@testing-library/react';
import { FormModalComp } from '../components/common';

describe('FormModalComp', () => {
  test('modal container renders in the DOM', () => {
    const { getByTestId } = render(<FormModalComp />);
    expect(getByTestId('formModalCont')).toBeInTheDocument();
  });

  test('modal component renders in the DOM', () => {
    const { getByTestId } = render(<FormModalComp />);

    expect(getByTestId(/formModal/i)).toBeInTheDocument();
  });
});
