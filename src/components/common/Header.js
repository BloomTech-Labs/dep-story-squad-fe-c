import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useOktaAuth } from '@okta/okta-react';

import MenuButton from './MenuButton';

// Utils
import { switchUser } from '../../utils/switchUser';
import { logout } from '../../utils/logout';

// Header element that takes in a string as a prop and displays it as the title
const Header = ({ title }) => {
  const { authService } = useOktaAuth();
  const { push } = useHistory();
  const curUser = ['curUserType', 'curUserId', 'curUserName'];

  return (
    // If the title is null do not render the header
    !title ? null : (
      // Otherwise render the header with the title in the <h1>
      <header data-testid="header" className="storysquad-header">
        <h1 className="header-title">{title}</h1>
        {/* Background image of the header */}
        <img src="/images/header-image.png" alt="underwater shark cityscape" />
        <MenuButton />
        <div className="logout-btns">
          <button
            disabled={!window.localStorage.getItem('okta-token-storage')}
            type="button"
            onClick={() => push('/dashboard')}
          >
            Home
          </button>
          <button
            disabled={!window.localStorage.getItem('okta-token-storage')}
            type="button"
            onClick={e => switchUser(e, curUser, push)}
          >
            Change User
          </button>
          <button
            disabled={!window.localStorage.getItem('okta-token-storage')}
            type="button"
            onClick={e => logout(e, authService)}
          >
            Logout
          </button>
        </div>
      </header>
    )
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string,
};
