import React, { useState, useEffect } from 'react';
import RenderGameVote from './RenderGameVote';

// Recoil imports
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
import { headerTitle } from '../../../state/headerTitle';
import { currentUserState } from '../../../state/userState';
import { gameState } from '../../../state/gameState/atoms';
import { gameData } from '../../../utils/data';
import { getRandomPartners } from '../../../utils/dummyData';

const GameVoteContainer = () => {
  const [curGameState, setGameState] = useRecoilState(gameState);
  const [controls, setControls] = useState(() => {
    const data = gameData['gameVote'].gameControl;
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
    setGameState('gameVote');
  }, []);

  // sets the header title
  useEffect(() => {
    setHeaderTitle('Vote for your Favorite Story');
  }, [setHeaderTitle]);

  return <RenderGameVote players={players} controls={controls} />;
};

export default GameVoteContainer;
