import React, { useEffect } from 'react';
import RenderMisisonWrite from './RenderMissionWrite';

const MissionWriteContainer = ({ setHeaderTitle }) => {
  // stateful logic goes here

  // sets the header title
  useEffect(() => {
    setHeaderTitle('Pencils Ready?');
  }, [setHeaderTitle]);

  return <RenderMisisonWrite />;
};

export default MissionWriteContainer;
