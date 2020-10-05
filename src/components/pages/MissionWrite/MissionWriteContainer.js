import React, { useEffect } from 'react';
import RenderMisisonWrite from './RenderMissionWrite';

const MissionWriteContainer = ({ setHeaderTitle }) => {
  // hard coded for now
  const userId = 1;
  // File limit controls the number of images that can be uploaded
  // 5 for a Story submission and 1 for a Illustration
  const fileLimit = 5;
  // The endpoint to send the submission to when making a POST request
  const uploadURL = `child/${userId}/mission/write`;

  // sets the header title
  useEffect(() => {
    setHeaderTitle('Pencils Ready?');
  }, [setHeaderTitle]);

  return <RenderMisisonWrite fileLimit={fileLimit} uploadURL={uploadURL} />;
};

export default MissionWriteContainer;
