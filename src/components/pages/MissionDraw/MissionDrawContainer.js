import React, { useState, useEffect } from 'react';
import RenderMissionDraw from './RenderMissionDraw';

import { getData } from '../../../api';
// Recoil imports
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { headerTitle } from '../../../state/headerTitle';
import { currentUserState } from '../../../state/userState';
import { screenState } from '../../../state/screenState';

const MissionDrawContainer = () => {
  const setScreenState = useSetRecoilState(screenState);

  const setHeaderTitle = useSetRecoilState(headerTitle);
  // Current user's Id and Token for submitting files to API
  const { curUserId } = useRecoilValue(currentUserState);
  // File limit controls the number of images that can be uploaded
  // 5 for a Story submission and 1 for a Illustration
  const fileLimit = 1;
  // The endpoint to send the submission to when making a POST request
  const uploadURL = `child/${curUserId}/mission/draw`;
  // Text to be displayed in the mission prompt text box
  const [missionPrompt, setMissionPrompt] = useState('Loading...');

  useEffect(() => {
    setScreenState('submissionDrawStart');
  }, []);

  // Get the text for mission prompt
  useEffect(() => {
    getData(`/child/${curUserId}/mission`).then(res => {
      setMissionPrompt(res.data.draw);
    });
  }, [curUserId, setMissionPrompt]);

  // sets the header title
  useEffect(() => {
    setHeaderTitle('Ready, Set... Draw!');
  }, [setHeaderTitle]);

  return (
    <RenderMissionDraw
      fileLimit={fileLimit}
      uploadURL={uploadURL}
      missionPrompt={missionPrompt}
    />
  );
};

export default MissionDrawContainer;
