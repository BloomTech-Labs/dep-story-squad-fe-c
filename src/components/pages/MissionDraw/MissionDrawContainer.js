import React, { useState, useEffect } from 'react';
import RenderMissionDraw from './RenderMissionDraw';

import { getData } from '../../../api';

import { useLocalStorage } from '../../../utils/hooks';

const MissionDrawContainer = ({ setHeaderTitle }) => {
  // Current user's Id for submitting files to API
  const [userId] = useLocalStorage('curUserId');
  // Current user's token
  const [curUserToken] = useLocalStorage('curUserToken', null);
  // File limit controls the number of images that can be uploaded
  // 5 for a Story submission and 1 for a Illustration
  const fileLimit = 1;
  // The endpoint to send the submission to when making a POST request
  const uploadURL = `child/${userId}/mission/draw`;
  // Text to be displayed in the mission prompt text box
  const [missionPrompt, setMissionPrompt] = useState('Loading...');

  // Get the text for mission prompt
  useEffect(() => {
    getData(`child/${userId}/mission`, curUserToken).then(res => {
      setMissionPrompt(res.data.draw);
    });
  }, [setMissionPrompt]);

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
