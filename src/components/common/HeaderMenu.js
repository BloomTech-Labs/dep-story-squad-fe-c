import React from 'react';

const HeaderMenu = ({
  authService,
  push,
  switchUser,
  logout,
  refNavMenu,
  refMenuBtn,
}) => {
  // Ref to the <MenuButton /> component in the <Header />
  const menuBtn = refMenuBtn.current;

  // Callback that fires when Home button in nav menu is clicked
  const goHome = () => {
    menuBtn.click();
    push('/dashboard');
  };

  // Callback that fires when Logout button in nav menu is clicked
  const userLogout = event => {
    menuBtn.click();
    logout(event, authService);
  };

  return (
    <div ref={refNavMenu} className="header-menu">
      <button
        disabled={!window.localStorage.getItem('okta-token-storage')}
        type="button"
        onClick={goHome}
      >
        Home
      </button>

      <button
        disabled={!window.localStorage.getItem('okta-token-storage')}
        type="button"
        onClick={e => switchUser(e, push)}
      >
        Change User
      </button>

      <button
        disabled={!window.localStorage.getItem('okta-token-storage')}
        type="button"
        onClick={e => userLogout(e)}
      >
        Logout
      </button>
    </div>
  );
};

export default HeaderMenu;
