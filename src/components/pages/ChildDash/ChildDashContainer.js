import React, { useEffect } from 'react';

import RenderChildDash from './RenderChildDash';

import './styles.less';

const ChildDashContainer = props => {
  const { setHeaderTitle } = props;

  useEffect(() => {
    //setHeaderTitle('Story Squad');
  }, []);

  return <RenderChildDash />;
};

export default ChildDashContainer;
