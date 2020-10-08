import React from 'react';
import { render } from '@testing-library/react';
import PinFormContainer from '../components/pages/AccountPinModal/PinForm/PinFormContainer';

describe('PINForm component', () => {
  test('renders in the dom', () => {
    window.localStorage.setItem(
      'okta-token-storage',
      JSON.stringify({
        idToken: {
          value:
            'eyJraWQiOiJxaUhsZllkbzFzSTEtRnJ6LXNBZUtMT0dEY0lDM2R2d2tpOXNXMkhPNGk0IiwiYWxnIjoiUlMyNTYifQ',
        },
      })
    );
    const { getByLabelText } = render(
      <PinFormContainer
        formSubmissionData={{
          pin: '',
        }}
      />
    );
    expect(getByLabelText(/Enter Pin/i)).toBeInTheDocument();
  });
});
