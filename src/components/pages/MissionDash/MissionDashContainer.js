import React, { useEffect } from 'react';

import RenderMissionDash from './RenderMissionDash';

const MissionDashContainer = props => {
  // sets state held in <App />
  const { setHeaderTitle } = props;

  // Whenever this component mounts update the <Header /> title
  useEffect(() => {
    setHeaderTitle('Mission');
  }, [setHeaderTitle]);

  return <RenderMissionDash />;
};

export default MissionDashContainer;
