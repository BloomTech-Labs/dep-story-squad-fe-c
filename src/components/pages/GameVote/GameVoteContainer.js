import React, { useState, useEffect } from 'react';
import RenderGameVote from './RenderGameVote';

// Recoil imports
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { headerTitle } from '../../../state/headerTitle';
import { currentUserState } from '../../../state/userState';
import { screenState } from '../../../state/screenState/atoms';
import { screenData } from '../../../utils/data';
import { getRandomPartners } from '../../../utils/dummyData';

const GameVoteContainer = () => {
  const setScreenState = useSetRecoilState(screenState);
  const [controls] = useState(() => {
    return screenData['INDEPENDENT_VOTING'].gameControl;
  });
  const setHeaderTitle = useSetRecoilState(headerTitle);
  // Current user's Id and Token for submitting files to API
  const { curUserId } = useRecoilValue(currentUserState);

  // set current players
  const [players, setPlayers] = useState(() => {
    return getRandomPartners();
  });

  useEffect(() => {
    setScreenState('INDEPENDENT_VOTING');
  }, []);

  // sets the header title
  useEffect(() => {
    setHeaderTitle('Vote for your Favorite Story');
  }, [setHeaderTitle]);

  return <RenderGameVote players={players} controls={controls} />;
};

export default GameVoteContainer;
