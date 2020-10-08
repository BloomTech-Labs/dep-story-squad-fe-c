import React, { useState, useEffect } from 'react';
import RenderMissionWrite from './RenderMissionWrite';

import { useLocalStorage } from '../../../utils/hooks';
import { getData } from '../../../api';

// recoil
import { useSetRecoilState, useRecoilValue } from 'recoil';

import { headerTitle } from '../../../state/headerTitle';
import { userState } from '../../../state/userState';

const MissionWriteContainer = () => {
  const setHeaderTitle = useSetRecoilState(headerTitle);
  // Current user's Id for submitting files to API
  const userId = useRecoilValue(userState).curUserId;

  // Current user's token
  const [curUserToken] = useLocalStorage('curUserToken', null);
  // File limit controls the number of images that can be uploaded
  // 5 for a Story submission and 1 for a Illustration
  const fileLimit = 5;
  // The endpoint to send the submission to when making a POST request
  const uploadURL = `child/${userId}/mission/write`;
  // Text to be displayed in the mission prompt text box
  const [missionPrompt, setMissionPrompt] = useState('Loading...');

  // Get the text for mission prompt
  useEffect(() => {
    getData(`child/${userId}/mission`, curUserToken).then(res => {
      setMissionPrompt(res.data.write);
    });
  }, [userId, curUserToken, setMissionPrompt]);

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
