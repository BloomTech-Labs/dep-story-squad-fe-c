import React, { useEffect } from 'react';
import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil';

import { headerTitle } from '../../../state/headerTitle';
import { currentGameState, matchupPlayers } from '../../../state/gameState';
import { getGameControl } from '../../../utils/data';
import RenderGameWaitForResult from './RenderGameWaitForResult';

const GameWaitForResultContainer = () => {
  const setHeaderTitle = useSetRecoilState(headerTitle);
  const [curGameState, setCurGameState] = useRecoilState(currentGameState);
  const players = useRecoilValue(matchupPlayers);
  const controls = getGameControl('PENDING_GAME_RESULT');

  useEffect(() => {
    setCurGameState({
      ...curGameState,
      name: 'PENDING_GAME_RESULT',
    });
  }, []);

  // sets the header title
  useEffect(() => {
    setHeaderTitle('The matchup');
  }, [setHeaderTitle]);

  return (
    <RenderGameWaitForResult
      players={players}
      controls={controls}
      waitingForResult={false}
    />
  );
};

export default GameWaitForResultContainer;
