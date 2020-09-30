// Uploader JSX
import React from 'react';

// Ant Design
import { Upload } from 'antd';

const RenderUploader = ({ fileList, onChange, onPreview, onSubmit }) => {
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
        {fileList.length < 5 && '+ Add Page'}
      </Upload>
      <button onClick={e => onSubmit(e)}>Upload Story</button>
    </div>
  );
};

export default RenderUploader;
