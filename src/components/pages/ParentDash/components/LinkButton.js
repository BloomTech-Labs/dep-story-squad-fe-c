import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

// Button that works like a link with react-router!
const LinkButton = props => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    ...rest
  } = props;
  return (
    <button
      {...rest}
      onClick={() => {
        history.push(to);
      }}
    />
  );
};

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default withRouter(LinkButton);
