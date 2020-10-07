// Uploader logic
import React, { useState } from 'react';
import RenderUploader from './RenderUploader';
import { useLocalStorage } from '../../../utils/hooks';
import { LoadingComponent } from '..';
import { useHistory } from 'react-router-dom';

import { message } from 'antd';

// api
import { uploadSubmissionData } from '../../../api';

const Uploader = ({ fileLimit, uploadURL }) => {
  const [fileList, setFileList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState(false);

  const [curUserToken] = useLocalStorage('curUserToken');

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

  const onSubmit = e => {
    setIsLoading(true);
    e.preventDefault();
    // build formData
    const formData = new FormData();

    // 'child/userId/mission'
    const endpoint = uploadURL;
    fileList.forEach(file => {
      formData.append('image', file.originFileObj);
    });
    // endpoint, payload, userToken
    uploadSubmissionData(endpoint, formData, curUserToken)
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
