import React, { useState, useEffect } from 'react';
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';

import { getData } from '../../../api';
import { headerTitle } from '../../../state/headerTitle';
import { currentUserState } from '../../../state/userState';
import { currentGameState } from '../../../state/gameState';
import RenderMissionWrite from './RenderMissionWrite';

const MissionWriteContainer = () => {
  const [curGameState, setCurGameState] = useRecoilState(currentGameState);
  const setHeaderTitle = useSetRecoilState(headerTitle);
  // Current user's Id and Token for submitting files to API
  const { curUserId } = useRecoilValue(currentUserState);
  // File limit controls the number of images that can be uploaded
  // 5 for a Story submission and 1 for a Illustration
  const fileLimit = 5;
  // The endpoint to send the submission to when making a POST request
  const uploadURL = `child/${curUserId}/mission/write`;
  // Text to be displayed in the mission prompt text box
  const [missionPrompt, setMissionPrompt] = useState('Loading...');

  useEffect(() => {
    setCurGameState({
      ...curGameState,
      name: 'SUBMISSION_WRITE_START',
    });
  }, []);

  // Get the text for mission prompt
  useEffect(() => {
    getData(`/child/${curUserId}/mission`).then(res => {
      setMissionPrompt(res.data.write);
    });
  }, [curUserId, setMissionPrompt]);

  // sets the header title
  useEffect(() => {
    setHeaderTitle('Pencils Ready?');
  }, [setHeaderTitle]);

  return (
    <RenderMissionWrite
      fileLimit={fileLimit}
      uploadURL={uploadURL}
      missionPrompt={missionPrompt}
    />
  );
};

export default MissionWriteContainer;
