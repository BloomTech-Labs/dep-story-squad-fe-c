import React from 'react';
// styles
import './loader.less';
// components
import { Spin } from 'antd';

function LoadingComponent() {
  return (
    <div data-testid="spinnerCont" className="loader">
      <Spin data-testid="antSpinner" size="large" />
    </div>
  );
}

export default LoadingComponent;
