import React from 'react';

const HeaderMenu = ({
  curUser,
  authService,
  push,
  switchUser,
  logout,
  refNavMenu,
}) => {
  return (
    <div ref={refNavMenu} className="header-menu">
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
  );
};

export default HeaderMenu;
