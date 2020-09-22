import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import RenderChildDash from './RenderChildDash';

const ChildDashContainer = props => {
  // sets state held in <App />
  const { setHeaderTitle } = props;

  const history = useHistory();

  // Whenever this component mounts update the <Header /> title
  useEffect(() => {
    setHeaderTitle('Story Squad');
  }, [setHeaderTitle]);

  return <RenderChildDash history={history} />;
};

export default ChildDashContainer;
