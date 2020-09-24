import React from 'react';
import { render } from '@testing-library/react';
import PINForm from '../components/common/accountPinModal/PINForm';

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
      <PINForm
        formSubmissionData={{
          pin: '',
        }}
      />
    );
    expect(getByLabelText(/Enter Pin/i)).toBeInTheDocument();
  });
});
