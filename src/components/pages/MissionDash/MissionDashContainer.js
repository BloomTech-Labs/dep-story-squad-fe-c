import React, { useEffect } from 'react';

import RenderMissionDash from './RenderMissionDash';

import './styles.less';

const MissionDashContainer = props => {
  // sets state held in <App />
  const { setHeaderTitle } = props;

  useEffect(() => {
    // Whenever this component mounts update the <Header /> title
    setHeaderTitle('Mission');
  }, []);

  return <RenderMissionDash />;
};

export default MissionDashContainer;
