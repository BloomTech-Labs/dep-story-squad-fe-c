import React, { useEffect } from 'react';

import RenderChildDash from './RenderChildDash';

import './styles.less';

const ChildDashContainer = props => {
  // sets state held in <App />
  const { setHeaderTitle } = props;

  useEffect(() => {
    // Whenever this component mounts update the <Header /> title
    setHeaderTitle('Story Squad');
  }, []);

  return <RenderChildDash />;
};

export default ChildDashContainer;
