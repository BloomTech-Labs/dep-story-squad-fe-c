import React from 'react';
import Uploader from '../../common/Uploader/UploaderContainer';

const RenderMissionWrite = ({ fileLimit, uploadURL, missionPrompt }) => {
  // no stateful logic allowed. only use props passed from container component

  return (
    <>
      <p className="text-box">{missionPrompt}</p>
      <Uploader fileLimit={fileLimit} uploadURL={uploadURL} />
    </>
  );
};

export default RenderMissionWrite;
