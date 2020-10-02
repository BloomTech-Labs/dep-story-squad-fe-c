import React from 'react';
import Uploader from './UploaderContainer';

const RenderMissionWrite = props => {
  // no stateful logic allowed. only use props passed from container component

  return (
    <>
      <p className="text-box">
        Imagine and write down a scene from Finn’s Little League tryouts. (In
        case you’re wondering, flipperball is a lot like soccer, and your job is
        to imagine how Finn performed as the coaches looked on.) Write your
        story with a pencil and no more than 5 sheets of loose-leaf paper, then
        take a photo and upload it to Story Squad.
      </p>
      <Uploader />
    </>
  );
};

export default RenderMissionWrite;
