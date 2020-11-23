// Uploader logic
import React, { useState } from 'react';
import RenderUploader from './RenderUploader';
import { LoadingComponent } from '..';
import { useHistory, useLocation } from 'react-router-dom';

import { message } from 'antd';

// api
import { uploadSubmissionData } from '../../../api';
import { useRecoilState } from 'recoil';
import { currentUserState } from '../../../state/userState';

const Uploader = ({ fileLimit, uploadURL }) => {
  const [fileList, setFileList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState(false);

  const [curUser, setCurUser] = useRecoilState(currentUserState);

  const mission = useLocation().pathname.match(/write|draw/)[0];

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
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const updateProgress = progress => {
    // Update the Write or Draw mission progress to true
    const missionUpdate = {
      ...curUser,
      missionProgress: {
        ...curUser.missionProgress,
        [mission]: progress,
      },
    };
    // Update currentUserState with mission progress changes
    setCurUser(missionUpdate);
  };

  const onSubmit = e => {
    setIsLoading(true);
    e.preventDefault();
    // build formData
    const formData = new FormData();

    // 'child/userId/mission'
    let endpoint = uploadURL;
    endpoint += `?mpi=${curUser.missionProgress.id}`;
    fileList.forEach(file => {
      formData.append('image', file.originFileObj);
    });

    // endpoint, payload, userToken
    uploadSubmissionData(endpoint, formData)
      .then(res => {
        updateProgress(res.data.progress[mission]);
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
        console.log('Error: ', err.message);
      });
  };

  return (
    <>
      <div className="loaderCont">{isLoading && <LoadingComponent />}</div>
      <RenderUploader
        errorState={errorState}
        fileList={fileList}
        fileLimit={fileLimit}
        onChange={onChange}
        onPreview={onPreview}
        onSubmit={onSubmit}
        push={push}
      />
    </>
  );
};

export default Uploader;
