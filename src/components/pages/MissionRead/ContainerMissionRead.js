import React, { useEffect, useState } from 'react';
import { useLocalStorage } from '../../../utils/hooks';

import { getStory } from '../../../api';
import RenderMissionRead from './RenderMissionRead';

const ContainerMissionRead = () => {
  // URL to the PDF of the story to display
  const [story, setStory] = useState('');

  // holds the current page of the PDF to display
  const [page, setPage] = useState(1);

  const [curUserId] = useLocalStorage('curUserId', null);
  const [curUserToken] = useLocalStorage('curUserToken', null);
  const id = curUserId;
  const token = curUserToken;

  useEffect(() => {
    getStory(token, id)
      .then(res => {
        setStory(res.data.read);
      })
      .catch(err => console.log({ err }));
  }, [token, id]);

  return <RenderMissionRead story={story} page={page} setPage={setPage} />;
};

export default ContainerMissionRead;
