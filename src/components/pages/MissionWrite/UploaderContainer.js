// Uploader logic

import React, { useState } from 'react';
import RenderUploader from './RenderUploader';
import { useLocalStorage } from '../../../utils/hooks';
import { LoadingComponent } from '../../common';
import { useHistory } from 'react-router-dom';

import { message } from 'antd';

// api
import { uploadSubmissionData, getData } from '../../../api';

const Uploader = () => {
  const { push } = useHistory();

  const [fileList, setFileList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onChange = ({ file, fileList: newFileList }) => {
    if (file.type === 'image/png' || file.type === 'image/jpeg') {
      setFileList(newFileList);
    } else {
      message.error(`${file.name} is not a png or jpg file`);
    }
  };

  const [userId] = useLocalStorage('curUserId');
  const [curUserToken] = useLocalStorage('curUserToken');
  let missionId = '';

  getData(`child/${userId}/mission`, curUserToken)
    .then(res => {
      missionId = res.data.mission_id;
      console.log('getDataRes: ', res);
    })
    .catch(err => {
      console.log('getData error: ', err.message);
    });

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const onSubmit = e => {
    setIsLoading(true);
    e.preventDefault();
    console.log('submitting...');
    // build formData
    const formData = new FormData();

    // '/api/child/userId/mission/:missionID'
    const endpoint = `api/child/${userId}/mission/${missionId}`;
    fileList.forEach(file => {
      formData.append('images: ', file);
    });
    // endpoint, payload, userToken
    uploadSubmissionData(endpoint, formData, curUserToken)
      .then(res => {
        setIsLoading(false);
        push('/mission');
        console.log('uploadRes: ', res);
      })
      .catch(err => {
        console.log('Upload Failed: ', err.message);
      });
  };

  return (
    <>
      <RenderUploader
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        onSubmit={onSubmit}
      />
      {isLoading && <LoadingComponent />}
    </>
  );
};

export default Uploader;
