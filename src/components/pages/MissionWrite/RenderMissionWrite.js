import React from 'react';
import Uploader from './UploaderContainer';

const RenderMissionWrite = props => {
  // no stateful logic allowed. only use props passed from container component

  return (
    <>
      <p className="text-box">
        A sidekick does something completely out of character, and everyone must
        figure out why.
      </p>
      <Uploader />
    </>
  );
};

export default RenderMissionWrite;
