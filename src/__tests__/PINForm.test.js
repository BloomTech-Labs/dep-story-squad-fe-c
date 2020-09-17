import React from 'react';
import { render } from '@testing-library/react';
import PINForm from '../components/common/accountPinModal/PINForm';

describe('PINForm component', () => {
  test('renders in the dom', () => {
    const { getByLabelText } = render(
      <PINForm
        formSubmissionData={{
          pin: '',
        }}
      />
    );
    expect(getByLabelText(/Enter Pin/i)).toBeInTheDocument();
  });
});
