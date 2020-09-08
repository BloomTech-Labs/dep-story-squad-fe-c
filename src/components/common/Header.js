import React from 'react';

const Header = ({ title }) => {
  return (
    <header className="storysquad-header">
      <h1 className="header-title">{title}</h1>
      <img src="/images/header-image.png" alt="underwater shark cityscape" />
    </header>
  );
};

export default Header;
