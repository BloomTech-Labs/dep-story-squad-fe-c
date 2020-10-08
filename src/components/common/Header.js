import React, { useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// Recoil
import { useRecoilValue } from 'recoil';
import { headerTitle } from '../../state/headerTitle';
import { useOktaAuth } from '@okta/okta-react';

import MenuButton from './MenuButton';
import HeaderMenu from './HeaderMenu';

// Utils
import { logout } from '../../utils/logout';
import { switchUser } from '../../utils/switchUser';

// Header element that takes in a string as a prop and displays it as the title
const Header = () => {
  // Global state
  const title = useRecoilValue(headerTitle);

  const { authService } = useOktaAuth();
  const { push } = useHistory();
  // Location is needed to hide the menu button on the Login Page
  const location = useLocation();
  const loginPage = location.pathname.match(/login/);

  const curUser = ['curUserType', 'curUserId', 'curUserName'];

  // Refs to menu and menu button bars
  const refBarOne = useRef();
  const refBarTwo = useRef();
  const refBarThree = useRef();
  const refNavMenu = useRef();
  const refMenuBtn = useRef();

  return (
    // If the title is null do not render the header
    !title ? null : (
      // Otherwise render the header with the title in the <h1>
      <header data-testid="header" className="storysquad-header">
        <h1 className="header-title">{title}</h1>
        {/* Background image of the header */}
        <img src="/images/header-image.png" alt="underwater shark cityscape" />

        {loginPage ? null : (
          <>
            <MenuButton
              refBarOne={refBarOne}
              refBarTwo={refBarTwo}
              refBarThree={refBarThree}
              refNavMenu={refNavMenu}
              refMenuBtn={refMenuBtn}
            />
            <HeaderMenu
              curUser={curUser}
              authService={authService}
              push={push}
              switchUser={switchUser}
              logout={logout}
              refNavMenu={refNavMenu}
              refMenuBtn={refMenuBtn}
            />
          </>
        )}
      </header>
    )
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string,
};
