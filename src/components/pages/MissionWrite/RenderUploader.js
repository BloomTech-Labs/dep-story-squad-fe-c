// Uploader JSX
import React from 'react';

// Ant Design
import { Upload } from 'antd';

const RenderUploader = ({
  fileList,
  onChange,
  onPreview,
  onSubmit,
  validationMessage,
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

      {/* error & success class in global styles */}
      {validationMessage.error && (
        <div className="validationMessage error">{validationMessage.error}</div>
      )}

      {validationMessage.success && (
        <div className="validationMessage success">
          {validationMessage.success}
        </div>
      )}
    </div>
  );
};

export default RenderUploader;
