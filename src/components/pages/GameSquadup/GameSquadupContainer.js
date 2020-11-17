import React, { useState, useEffect } from 'react';
import RenderGameSquadup from './RenderGameSquadup';

// Recoil imports
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
import { headerTitle } from '../../../state/headerTitle';
import { currentUserState } from '../../../state/userState';
import { screenState } from '../../../state/screenState/atoms';
import { screenData } from '../../../utils/data';
import { getRandomPartners } from '../../../utils/dummyData';
import { currentGameState } from '../../../state/gameState';

const GameSquadupContainer = () => {
  const setScreenState = useSetRecoilState(screenState);
  const [curGameState, setCurGameState] = useRecoilState(currentGameState);
  const [controls, setControls] = useState(() => {
    return screenData['GAME_SQUAD_UP'].gameControl;
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
    setScreenState('GAME_SQUAD_UP');
    setCurGameState({
      ...curGameState,
      matchedPlayers: [...players],
    });
  }, []);

  // sets the header title
  useEffect(() => {
    setHeaderTitle('Join the Squad');
  }, [setHeaderTitle]);

  return <RenderGameSquadup players={players} controls={controls} />;
};

export default GameSquadupContainer;
