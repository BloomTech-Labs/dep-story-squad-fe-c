import React from 'react';
import { render } from '@testing-library/react';
import PinFormContainer from '../components/pages/AccountPinModal/PinForm/PinFormContainer';
import { useHistory } from 'react-router-dom';

// recoil
import { RecoilRoot } from 'recoil';

describe('PINForm component', () => {
  const history = useHistory();

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
      <RecoilRoot>
        <PinFormContainer
          setValidationError={() => {
            return;
          }}
          curUserType={'parent'}
          curUserId={'1'}
          history={() => history}
        />
      </RecoilRoot>
    );
    expect(getByLabelText(/Enter PIN/i)).toBeInTheDocument();
  });
});
