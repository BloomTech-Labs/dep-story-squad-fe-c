import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { messagePopup } from '../../../utils/message-popup';
import RenderMissionDash from './RenderMissionDash';

const MissionDashContainer = props => {
  // sets state held in <App />
  const { setHeaderTitle } = props;
  const { push } = useHistory();

  // Whenever this component mounts update the <Header /> title
  useEffect(() => {
    setHeaderTitle('Mission');
  }, [setHeaderTitle]);

  // hard coded for development/testing
  const [missionReqs, setMissionState] = useState({
    read: true,
    write: false,
    draw: false,
  });

  // Checks if mission requirements have been met and then pushes
  // to mission URL or displays message popup with the requirements
  const beginMission = (mission, missionURL, message) => {
    switch (mission) {
      case 'read':
        push(missionURL);
        break;

      case 'write':
        missionReqs.read
          ? push(missionURL)
          : messagePopup('warning', message, 'Mission Locked!');
        break;

      case 'draw':
        missionReqs.write
          ? push(missionURL)
          : messagePopup('warning', message, 'Mission Locked!');
        break;

      default:
        break;
    }
  };

  return (
    <RenderMissionDash beginMission={beginMission} missionReqs={missionReqs} />
  );
};

export default MissionDashContainer;
