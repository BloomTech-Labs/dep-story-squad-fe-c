import React from 'react';
import PropTypes from 'prop-types';

// Header element that takes in a string as a prop and displays it as the title
const Header = ({ title }) => {
  return (
    <header className="storysquad-header">
      <h1 className="header-title">{title}</h1>
      {/* Background image of the header */}
      <img src="/images/header-image.png" alt="underwater shark cityscape" />
    </header>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
