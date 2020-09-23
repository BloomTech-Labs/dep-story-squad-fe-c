import React, { useEffect } from 'react';

import { messagePopup } from '../../../utils/message-popup';

import RenderMissionDash from './RenderMissionDash';

const MissionDashContainer = props => {
  // sets state held in <App />
  const { setHeaderTitle } = props;

  // Whenever this component mounts update the <Header /> title
  useEffect(() => {
    setHeaderTitle('Mission');
  }, [setHeaderTitle]);

  return <RenderMissionDash messagePopup={messagePopup} />;
};

export default MissionDashContainer;
