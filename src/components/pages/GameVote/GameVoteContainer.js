import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil';

import { headerTitle } from '../../../state/headerTitle';
import { currentGameState, matchupPlayers } from '../../../state/gameState';
import { getGameControl } from '../../../utils/data';
import RenderGameVote from './RenderGameVote';

const GameVoteContainer = () => {
  const { push } = useHistory();
  const setHeaderTitle = useSetRecoilState(headerTitle);
  const [curGameState, setCurGameState] = useRecoilState(currentGameState);
  const players = useRecoilValue(matchupPlayers);
  const controls = getGameControl('INDEPENDENT_VOTING');

  useEffect(() => {
    setCurGameState({
      ...curGameState,
      name: 'INDEPENDENT_VOTING',
      matchedPlayers: [...players],
    });
  }, []);

  // sets the header title
  useEffect(() => {
    setHeaderTitle('Vote for your Favorite Story');
  }, [setHeaderTitle]);

  const handleRoute = e => {
    let currentVote = curGameState.userVoteCount;

    const newState = {
      ...curGameState,
      userVoteCount: currentVote + 1,
    };

    setCurGameState(newState);
    push('/game/match-up');
  };

  return (
    <RenderGameVote
      players={players.length && players.slice(0, 2)}
      controls={controls}
      submitVote={handleRoute}
    />
  );
};

export default GameVoteContainer;
