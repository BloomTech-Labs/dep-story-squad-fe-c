// Uploader JSX
import React from 'react';

// Ant Design
import { message, Upload } from 'antd';

const RenderUploader = ({
  fileList,
  onChange,
  onPreview,
  onSubmit,
  errorState,
}) => {
  return (
    <div className="upload-container">
      <Upload
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        beforeUpload={() => false}
        multiple
      >
        {fileList.length < 5 && `Add Page ${fileList.length + 1}`}
      </Upload>
      <button
        disabled={errorState || !fileList.length}
        onClick={e => onSubmit(e)}
      >
        Upload
      </button>
    </div>
  );
};

export default RenderUploader;
