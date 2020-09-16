import React, { useEffect } from 'react';

import RenderChildDash from './RenderChildDash';

import './styles.less';

const ChildDashContainer = props => {
  // sets state held in <App />
  const { setHeaderTitle } = props;

  // Whenever this component mounts update the <Header /> title
  useEffect(() => {
    setHeaderTitle('Story Squad');
  }, [setHeaderTitle]);

  return <RenderChildDash />;
};

export default ChildDashContainer;
