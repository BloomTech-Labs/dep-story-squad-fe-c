import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { messagePopup } from '../../../utils/message-popup';

import RenderMissionDash from './RenderMissionDash';

const MissionDashContainer = props => {
  // sets state held in <App />
  const { setHeaderTitle } = props;

  const history = useHistory();

  // Whenever this component mounts update the <Header /> title
  useEffect(() => {
    setHeaderTitle('Mission');
  }, [setHeaderTitle]);

  return <RenderMissionDash history={history} messagePopup={messagePopup} />;
};

export default MissionDashContainer;
