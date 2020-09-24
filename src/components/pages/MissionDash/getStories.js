import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocalStorage } from '../../../utils/hooks';
import { Document } from 'react-pdf';
import { PDFViewer } from '@react-pdf/renderer';

const apiUrl = `${process.env.REACT_APP_API_URI}`;

export const GetStories = props => {
  const [story, setStory] = useState([]);
  const [userType, setuserType] = useLocalStorage('usertype', null);
  const [curUser] = useState({});
  const id = curUser.id;
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiQW5uZXR0ZS5NcmF6MzUiLCJpYXQiOjE2MDA5NzkyOTUsImV4cCI6MTYwMDk5MDA5NX0._cEaBSjtErvqBBFqk4jW4UZwrkyqtupiCECEglxCn3U';

  useEffect(() => {
    axios
      .get(`${apiUrl}/child/1/mission`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(res => {
        console.log('stories', res.data);
        setStory(res.data);
      })
      .catch(err => console.log({ err }));
  }, [props]);

  return (
    <div>
      <div className="read">
        <Document file={story.read}></Document>
      </div>
    </div>
  );
};
