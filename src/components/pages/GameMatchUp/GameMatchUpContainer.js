import React, { useEffect, useState } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';

import { headerTitle } from '../../../state/headerTitle';
import { currentGameState, matchupPlayers } from '../../../state/gameState';
import { getGameControl } from '../../../utils/data';
import RenderGameMatchup from './RenderGameMatchup';

const GameMatchUpContainer = () => {
  const setHeaderTitle = useSetRecoilState(headerTitle);
  const curGameState = useRecoilValue(currentGameState);
  const players = useRecoilValue(matchupPlayers);
  const controls = getGameControl('GAME_MATCHUP');
  // sets the header title
  useEffect(() => {
    setHeaderTitle('The matchup');
  }, [setHeaderTitle]);

  return (
    <RenderGameMatchup
      players={players}
      controls={controls}
      waitingForResult={false}
      voteCount={curGameState.userVoteCount}
    />
  );
};

export default GameMatchUpContainer;
