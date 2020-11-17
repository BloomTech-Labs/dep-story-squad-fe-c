import React, { useState, useEffect } from 'react';
import RenderGameSharePoints from './RenderGameSharePoints';

// Recoil imports
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
import { headerTitle } from '../../../state/headerTitle';
import { currentUserState } from '../../../state/userState';
import { screenState } from '../../../state/screenState/atoms';
import { screenData } from '../../../utils/data';
import { getRandomPartners } from '../../../utils/dummyData';
import { currentGameState } from '../../../state/gameState';

const GameSharePointsContainer = () => {
  const [curGameState, setCurGameState] = useRecoilState(currentGameState);
  const setScreenState = useSetRecoilState(screenState);
  const [controls, setControls] = useState(() => {
    const data = screenData['GAME_SHARE_POINTS'].gameControl;
    return data;
  });
  const setHeaderTitle = useSetRecoilState(headerTitle);
  // Current user's Id and Token for submitting files to API
  const { curUserId } = useRecoilValue(currentUserState);

  useEffect(() => {
    setScreenState('GAME_SHARE_POINTS');
  }, []);

  // sets the header title
  useEffect(() => {
    setHeaderTitle('Share Points');
  }, [setHeaderTitle]);

  return (
    <RenderGameSharePoints
      players={curGameState.matchedPlayers}
      controls={controls}
    />
  );
};

export default GameSharePointsContainer;
