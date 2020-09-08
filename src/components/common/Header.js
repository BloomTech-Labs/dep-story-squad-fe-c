import React from 'react';

const Header = ({ title }) => {
  return (
    <header className="storysquad-header">
      <h1 className="header-title">{title}</h1>
    </header>
  );
};

export default Header;
