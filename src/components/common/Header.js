import React, { useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import MenuButton from './MenuButton';
import HeaderMenu from './HeaderMenu';
// Recoil
import { useRecoilValue } from 'recoil';
import { headerTitle } from '../../state/headerTitle';
// Utils
import { logout } from '../../utils/logout';
import { switchUser } from '../../utils/switchUser';

const Header = () => {
  // Header Title
  const title = useRecoilValue(headerTitle);

  const { authService } = useOktaAuth();
  const { push } = useHistory();
  // Location is needed to hide the menu button on the Login Page
  const location = useLocation();
  const loginPage = location.pathname.match(/login/);

  // Refs to Nav Menu and Menu Button
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
        {/* Don't render the menu button on the Login page */}
        {loginPage ? null : (
          <>
            <MenuButton refNavMenu={refNavMenu} refMenuBtn={refMenuBtn} />
            <HeaderMenu
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
