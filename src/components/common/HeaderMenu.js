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

  // Callback that fires when Change User button in nav menu is clicked
  const changeUser = event => {
    menuBtn.click();
    switchUser(event, push);
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
        <span>Home</span>
      </button>

      <button
        disabled={!window.localStorage.getItem('okta-token-storage')}
        type="button"
        onClick={e => changeUser(e)}
      >
        <span>Change User</span>
      </button>

      <button
        disabled={!window.localStorage.getItem('okta-token-storage')}
        type="button"
        onClick={e => userLogout(e)}
      >
        <span>Logout</span>
      </button>
    </div>
  );
};

export default HeaderMenu;
