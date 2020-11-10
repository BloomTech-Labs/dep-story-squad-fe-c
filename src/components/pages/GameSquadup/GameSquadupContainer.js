import React, { useState, useEffect } from 'react';
import RenderGameSquadup from './RenderGameSquadup';

// Recoil imports
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
import { headerTitle } from '../../../state/headerTitle';
import { currentUserState } from '../../../state/userState';
import { gameState } from '../../../state/gameState/atoms';
import { gameData } from '../../../utils/data';
import { getRandomPartners } from '../../../utils/dummyData';

const GameSquadupContainer = () => {
  const [curGameState, setGameState] = useRecoilState(gameState);
  const [controls, setControls] = useState(() => {
    const data = gameData['gameSquadup'].gameControl;
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
    setGameState('gameSquadup');
  }, []);

  // sets the header title
  useEffect(() => {
    setHeaderTitle('Join the Squad');
  }, [setHeaderTitle]);

  return <RenderGameSquadup players={players} controls={controls} />;
};

export default GameSquadupContainer;
