import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useResetRecoilState, useRecoilState } from 'recoil';

import { headerTitle } from '../../../state/headerTitle';
import { currentGameState } from '../../../state/gameState';
import { messagePopup } from '../../../utils/message-popup';
import { getStateRoute, getStateMessage } from '../../../utils/data';
import MissionButton from '../../common/MissionButton';
import RenderChildDash from './RenderChildDash';

const ChildDashContainer = props => {
  const { push } = useHistory();
  // Header Title
  const setHeaderTitle = useResetRecoilState(headerTitle);
  const [curGameState, setCurGameState] = useRecoilState(currentGameState);
  const [missionButton, setMissionButton] = useState(null);

  // Set mission button status based on game state
  useEffect(() => {
    if (curGameState.name === 'MISSION_NOT_STARTED') {
      // Reset mission state
      localStorage.removeItem('currentGameState');
      setCurGameState({
        ...curGameState,
        userVoteCount: 0,
      });
    }
  }, []);

  // Set mission button status based on game state
  useEffect(() => {
    const name = curGameState.name;
    if (name && name.startsWith('PENDING')) {
      setMissionButton(<MissionButton message={getStateMessage(name)} />);
    } else {
      setMissionButton(
        <MissionButton
          onClickRoute={
            name === 'MISSION_NOT_STARTED' ? '/mission' : getStateRoute(name)
          }
          message={getStateMessage(name)}
        />
      );
    }
  }, [curGameState.name]);

  // Whenever this component mounts update the <Header /> title
  useEffect(() => {
    setHeaderTitle();
  }, [setHeaderTitle]);

  return (
    <RenderChildDash
      push={push}
      messagePopup={messagePopup}
      missionButton={missionButton}
    />
  );
};

export default ChildDashContainer;
