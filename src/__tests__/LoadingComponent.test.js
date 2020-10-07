import React from 'react';
import { render } from '@testing-library/react';

import { LoadingComponent } from '../components/common';

describe('Loading Common Component', () => {
  test('it should mount a div container for the spinner', () => {
    const { getByTestId } = render(<LoadingComponent />);
    expect(getByTestId(/spinnerCont/i));
    expect(getByTestId(/spinnerShark/i));
  });
});
