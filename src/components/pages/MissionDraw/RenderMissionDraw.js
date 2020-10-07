import React from 'react';
import Uploader from '../../common/Uploader/UploaderContainer';

const RenderMissionDraw = ({ fileLimit, uploadURL, missionPrompt }) => {
  return (
    <>
      <p className="text-box">{missionPrompt}</p>
      <Uploader fileLimit={fileLimit} uploadURL={uploadURL} />
    </>
  );
};

export default RenderMissionDraw;
