import React, { useState, useEffect } from 'react';
import RenderGameSharePoints from './RenderGameSharePoints';

// Recoil imports
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
import { headerTitle } from '../../../state/headerTitle';
import { currentUserState } from '../../../state/userState';
import { gameState } from '../../../state/gameState/atoms';
import { gameData } from '../../../utils/data';
import { getRandomPartners } from '../../../utils/dummyData';

const GameSharePointsContainer = () => {
  const [curGameState, setGameState] = useRecoilState(gameState);
  const [controls, setControls] = useState(() => {
    const data = gameData['gameSharePoints'].gameControl;
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
    setGameState('gameSharePoints');
  }, []);

  // sets the header title
  useEffect(() => {
    setHeaderTitle('Share Points');
  }, [setHeaderTitle]);

  return <RenderGameSharePoints players={players} controls={controls} />;
};

export default GameSharePointsContainer;
