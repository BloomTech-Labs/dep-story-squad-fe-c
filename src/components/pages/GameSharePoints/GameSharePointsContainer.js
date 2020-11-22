import React, { useEffect } from 'react';
import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil';

import { headerTitle } from '../../../state/headerTitle';
import { currentGameState, matchupPlayers } from '../../../state/gameState';
import { getGameControl } from '../../../utils/data';
import RenderGameSharePoints from './RenderGameSharePoints';

const GameSharePointsContainer = () => {
  const setHeaderTitle = useSetRecoilState(headerTitle);
  const [curGameState, setCurGameState] = useRecoilState(currentGameState);
  const players = useRecoilValue(matchupPlayers);
  const controls = getGameControl('GAME_SHARE_POINTS');

  useEffect(() => {
    setCurGameState({
      ...curGameState,
      name: 'GAME_SHARE_POINTS',
      matchedPlayers: [...players],
    });
  }, []);

  // sets the header title
  useEffect(() => {
    setHeaderTitle('Share Points');
  }, [setHeaderTitle]);

  return (
    <RenderGameSharePoints players={players.slice(0, 2)} controls={controls} />
  );
};

export default GameSharePointsContainer;
