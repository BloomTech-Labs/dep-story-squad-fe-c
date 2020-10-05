import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useOktaAuth } from '@okta/okta-react';

import MenuButton from './MenuButton';
import HeaderMenu from './HeaderMenu';

// Utils
import { switchUser } from '../../utils/switchUser';
import { logout } from '../../utils/logout';

// Header element that takes in a string as a prop and displays it as the title
const Header = ({ title }) => {
  const { authService } = useOktaAuth();
  const { push } = useHistory();
  const curUser = ['curUserType', 'curUserId', 'curUserName'];

  // Refs to menu and menu button bars
  const refBarOne = useRef();
  const refBarTwo = useRef();
  const refBarThree = useRef();
  const refNavMenu = useRef();

  return (
    // If the title is null do not render the header
    !title ? null : (
      // Otherwise render the header with the title in the <h1>
      <header data-testid="header" className="storysquad-header">
        <h1 className="header-title">{title}</h1>
        {/* Background image of the header */}
        <img src="/images/header-image.png" alt="underwater shark cityscape" />
        <MenuButton
          refBarOne={refBarOne}
          refBarTwo={refBarTwo}
          refBarThree={refBarThree}
          refNavMenu={refNavMenu}
        />
        <HeaderMenu
          curUser={curUser}
          authService={authService}
          push={push}
          switchUser={switchUser}
          logout={logout}
          refNavMenu={refNavMenu}
        />
      </header>
    )
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string,
};
