import React from 'react';
import Uploader from '../../common/Uploader/UploaderContainer';

const RenderMissionDraw = ({ fileLimit, uploadURL }) => {
  return (
    <>
      <p className="text-box">
        Draw one scene from Chapters 1-2. For a caption to your picture, write
        out the sentence from the main story where your picture should appear.
        Use whatever coloring supplies you want on a loose-leaf sheet of paper,
        then take a photo and upload it to Story Squad.
      </p>
      <Uploader fileLimit={fileLimit} uploadURL={uploadURL} />
    </>
  );
};

export default RenderMissionDraw;
