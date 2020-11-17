import React, { useState, useEffect } from 'react';
import RenderGameSharePoints from './RenderGameSharePoints';

// Recoil imports
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { headerTitle } from '../../../state/headerTitle';
import { currentUserState } from '../../../state/userState';
import { screenState } from '../../../state/screenState/atoms';
import { screenData } from '../../../utils/data';
import { getRandomPartners } from '../../../utils/dummyData';

const GameSharePointsContainer = () => {
  const setScreenState = useSetRecoilState(screenState);
  const [controls, setControls] = useState(() => {
    const data = screenData['GAME_SHARE_POINTS'].gameControl;
    return data;
  });
  const setHeaderTitle = useSetRecoilState(headerTitle);
  // Current user's Id and Token for submitting files to API
  const { curUserId } = useRecoilValue(currentUserState);

  // set current players
  const [players, setPlayers] = useState(() => {
    const players = getRandomPartners();
    return players;
  });

  useEffect(() => {
    setScreenState('GAME_SHARE_POINTS');
  }, []);

  // sets the header title
  useEffect(() => {
    setHeaderTitle('Share Points');
  }, [setHeaderTitle]);

  return <RenderGameSharePoints players={players} controls={controls} />;
};

export default GameSharePointsContainer;
