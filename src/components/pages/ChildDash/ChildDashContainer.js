import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { messagePopup } from '../../../utils/message-popup';
import RenderChildDash from './RenderChildDash';
// Recoil imports
import { useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil';
import { headerTitle } from '../../../state/headerTitle';
import { currentGameState } from '../../../state/gameState';
import { screenState } from '../../../state/screenState';
import { panelState } from '../../../state/panelState';

const ChildDashContainer = props => {
  const curGameState = useRecoilValue(currentGameState);
  const setScreenState = useSetRecoilState(screenState);
  const setPanelState = useSetRecoilState(panelState);

  // Header Title
  const setHeaderTitle = useResetRecoilState(headerTitle);

  const { push } = useHistory();

  useEffect(() => {
    // Only show welcome message if mission has not been started
    if (curGameState.name === 'MISSION_NOT_STARTED') {
      // setPanelState(true);
      setScreenState('MISSION_NOT_STARTED');
    }
  }, []);

  // Whenever this component mounts update the <Header /> title
  useEffect(() => {
    setHeaderTitle();
  }, [setHeaderTitle]);

  return <RenderChildDash push={push} messagePopup={messagePopup} />;
};

export default ChildDashContainer;
