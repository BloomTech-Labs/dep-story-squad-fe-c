// Uploader logic

import React, { useState } from 'react';
import RenderUploader from './RenderUploader';

const Uploader = () => {
  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
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
    e.preventDefault();
    console.log('submitting...');
    // axios here
  };

  return (
    <RenderUploader
      fileList={fileList}
      onChange={onChange}
      onPreview={onPreview}
      onSubmit={onSubmit}
    />
  );
};

export default Uploader;
