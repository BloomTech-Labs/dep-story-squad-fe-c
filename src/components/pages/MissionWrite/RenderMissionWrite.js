import React from 'react';
import Uploader from './UploaderContainer';

const RenderMissionWrite = props => {
  // no stateful logic allowed. only use props passed from container component

  return (
    <>
      <p>Submit your side quest</p>
      <Uploader />
    </>
  );
};

export default RenderMissionWrite;
