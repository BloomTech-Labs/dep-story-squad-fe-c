import React, { useState, useEffect } from 'react';
import RenderGameMatchup from './RenderGameMatchup';

// Recoil imports
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { headerTitle } from '../../../state/headerTitle';
import { currentUserState } from '../../../state/userState';
import { screenState } from '../../../state/screenState/atoms';
import { screenData } from '../../../utils/data';
import { getRandomPartners } from '../../../utils/dummyData';

const GameMatchUpContainer = () => {
  const setScreenState = useSetRecoilState(screenState);
  const [controls, setControls] = useState(() => {
    return screenData['gameMatchUp'].gameControl;
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
    setScreenState('gameMatchUp');
  }, []);

  // sets the header title
  useEffect(() => {
    setHeaderTitle('The matchup');
  }, [setHeaderTitle]);

  return <RenderGameMatchup players={players} controls={controls} />;
};

export default GameMatchUpContainer;
