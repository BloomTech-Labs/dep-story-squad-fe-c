import React from 'react';
import PropTypes from 'prop-types';

import './header-styles.less';

// Header element that takes in a string as a prop and displays it as the title
const Header = ({ title }) => {
  return (
    // If the title is null do not render the header
    !title ? null : (
      // Otherwise render the header with the title in the <h1>
      <header data-testid="header" className="storysquad-header">
        <h1 className="header-title">{title}</h1>
        {/* Background image of the header */}
        <img src="/images/header-image.png" alt="underwater shark cityscape" />
      </header>
    )
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string,
};
