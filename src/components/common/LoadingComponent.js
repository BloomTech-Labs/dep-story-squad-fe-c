import PropTypes from 'prop-types';
import React from 'react';

import image_1 from '../../assets/animation-1.gif';

// has a default loader image, or you can pass an animated spinner URL in props
function LoadingComponent(props) {
  const { imageUrl = image_1 } = props;

  return (
    <div>
      <img alt="loader" src={imageUrl} />
    </div>
  );
}

export default LoadingComponent;

LoadingComponent.propTypes = {
  imageUrl: PropTypes.string,
};
