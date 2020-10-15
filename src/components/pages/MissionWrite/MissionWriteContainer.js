import React, { useState, useEffect } from 'react';
import RenderMissionWrite from './RenderMissionWrite';

import { getData } from '../../../api';

// Recoil imports
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { headerTitle } from '../../../state/headerTitle';
import { currentUserState } from '../../../state/userState';

const MissionWriteContainer = () => {
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
