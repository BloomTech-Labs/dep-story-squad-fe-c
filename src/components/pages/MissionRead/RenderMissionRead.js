import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocalStorage } from '../../../utils/hooks';

import RenderMissionDash from '../MissionDash/RenderMissionDash';

const apiUrl = `${process.env.REACT_APP_API_URI}`;

const ContainerMissionRead = () => {
  // URL to the PDF of the story to display
  const [story, setStory] = useState('');

  // holds the current page of the PDF to display
  const [page, setPage] = useState(1);

  const [curUserId, setCurUserId] = useLocalStorage('curUserId', null);
  const [curUserToken, setCurUserToken] = useLocalStorage('curUserToken', null);
  const id = curUserId;
  const token = curUserToken;

  useEffect(() => {
    axios
      .get(`${apiUrl}/child/${id}/mission`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(res => {
        console.log('stories', res.data);
        setStory(res.data.read);
      })
      .catch(err => console.log({ err }));
  }, [token, id]);

  return <RenderMissionDash story={story} page={page} setPage={setPage} />;
};

export default ContainerMissionRead;
