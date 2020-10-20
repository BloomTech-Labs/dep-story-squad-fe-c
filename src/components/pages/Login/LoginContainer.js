import React, { useEffect } from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import LoginTextArea from './LoginTextArea';

import { config } from '../../../utils/oktaConfig';

// utils
import { checkTokenExpired } from '../../../utils/checkTokenExpired';

import { useResetRecoilState } from 'recoil';
import { headerTitle } from '../../../state/headerTitle';

const LoginContainer = props => {
  const setHeaderTitle = useResetRecoilState(headerTitle);

  // check if Okta token is expired
  if (checkTokenExpired()) {
    window.localStorage.removeItem('currentUser');
  }

  useEffect(() => {
    const { pkce, issuer, clientId, redirectUri, scopes } = config;
    // destructure your config so that you can pass it into the required fields in your widget.
    const widget = new OktaSignIn({
      baseUrl: issuer ? issuer.split('/oauth2')[0] : '',
      clientId,
      redirectUri,
      registration: {
        // there is more we can do to handle some errors here.
      },
      features: { registration: false },
      // turning this feature on allows your widget to use Okta for user registration
      logo: 'path-to-your-logo',
      // add your custom logo to your signing/register widget here.
      i18n: {
        en: {
          'primaryauth.title': 'Welcome back, Sign in to Continue',
          // change title for your app
        },
      },
      authParams: {
        pkce,
        issuer,
        display: 'page',
        scopes,
      },
    });

    widget.renderEl(
      { el: '#sign-in-widget' },
      () => {
        /**
         * In this flow, the success handler will not be called because we redirect
         * to the Okta org for the authentication workflow.
         */
      },
      err => {
        throw err;
      }
    );
  }, []);

  // Whenever this component mounts update the <Header /> title
  useEffect(() => {
    setHeaderTitle();
  }, [setHeaderTitle]);

  return (
    <>
      <div className="loginarea">
        <div id="sign-in-widget" />
        <LoginTextArea />
      </div>
    </>
  );
};

export default LoginContainer;
