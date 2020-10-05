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
  const [fileList, setFileList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState(false);

  const [userId] = useLocalStorage('curUserId');
  const [curUserToken] = useLocalStorage('curUserToken');
  let missionId = '';

  const { push } = useHistory();

  const onChange = ({ file, fileList: newFileList }) => {
    if (file.type === 'image/png' || file.type === 'image/jpeg') {
      setFileList(newFileList);
      setErrorState(false);
    } else {
      setErrorState(true);
      message.error(`${file.name} is not a PNG or JPG file`);
    }
  };

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const onSubmit = e => {
    console.log('fileList: ', fileList);
    setIsLoading(true);
    e.preventDefault();
    // build formData
    const formData = new FormData();

    // 'child/userId/mission'
    const endpoint = `child/${userId}/mission/write`;
    fileList.forEach(file => {
      formData.append('images', file.originFileObj);
    });

    // endpoint, payload, userToken
    uploadSubmissionData(endpoint, formData)
      .then(res => {
        console.log('submisisonRes: ', res);
        setErrorState(false);
        message.success('Upload Successful');
        setTimeout(() => {
          setIsLoading(false);
          push('/mission');
        }, 2000);
      })
      .catch(err => {
        setErrorState(true);
        message.error(err.message);
        console.log('Error: ', err);
      });
  };

  return (
    <>
      <RenderUploader
        errorState={errorState}
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
