// Uploader JSX
import React from 'react';

// Ant Design
import { Upload } from 'antd';

const RenderUploader = ({
  fileList,
  fileLimit,
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
        {fileList.length < fileLimit && 'Add Page'}
      </Upload>
      <p className="file-limit-text">{`${fileList.length} / ${fileLimit}`}</p>
      <button
        className="upload-btn"
        disabled={errorState || !fileList.length}
        onClick={e => onSubmit(e)}
      >
        Upload
      </button>
    </div>
  );
};

export default RenderUploader;
