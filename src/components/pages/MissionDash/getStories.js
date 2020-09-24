import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocalStorage } from '../../../utils/hooks';

import PDFViewer from 'pdf-viewer-reactjs';

const apiUrl = `${process.env.REACT_APP_API_URI}`;

export const GetStories = props => {
  const [story, setStory] = useState('');

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
  }, [props, token, id]);

  return story ? (
    <PDFViewer
      document={{
        url: story,
      }}
    />
  ) : (
    <p>Hello</p>
  );
};
