import React, { useEffect } from 'react';
import RenderMissionDraw from './RenderMissionDraw';

import { useLocalStorage } from '../../../utils/hooks';

const MissionDrawContainer = ({ setHeaderTitle }) => {
  // Current user's Id for submitting files to API
  const [userId] = useLocalStorage('curUserId');
  // File limit controls the number of images that can be uploaded
  // 5 for a Story submission and 1 for a Illustration
  const fileLimit = 1;
  // The endpoint to send the submission to when making a POST request
  const uploadURL = `child/${userId}/mission/draw`;

  // sets the header title
  useEffect(() => {
    setHeaderTitle('Ready, Set... Draw!');
  }, [setHeaderTitle]);

  return <RenderMissionDraw fileLimit={fileLimit} uploadURL={uploadURL} />;
};

export default MissionDrawContainer;
