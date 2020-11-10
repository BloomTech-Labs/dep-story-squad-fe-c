import React, { useState, useEffect } from 'react';
import RenderGameMatchup from './RenderGameMatchup';

// Recoil imports
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
import { headerTitle } from '../../../state/headerTitle';
import { currentUserState } from '../../../state/userState';
import { gameState } from '../../../state/gameState/atoms';
import { gameData } from '../../../utils/data';
import { getRandomPartners } from '../../../utils/dummyData';

const GameMatchUpContainer = () => {
  const [curGameState, setGameState] = useRecoilState(gameState);
  const [controls, setControls] = useState(() => {
    const data = gameData['gameMatchUp'].gameControl;
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
    setGameState('gameMatchUp');
  }, []);

  // sets the header title
  useEffect(() => {
    setHeaderTitle('The matchup');
  }, [setHeaderTitle]);

  return <RenderGameMatchup players={players} controls={controls} />;
};

export default GameMatchUpContainer;
