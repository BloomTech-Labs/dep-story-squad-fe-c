import React from 'react';
// styles
// spinner size is controlled in the theme-overrides.js file
import './loader.less';
// components
import { Spin } from 'antd';

function LoadingComponent() {
  return (
    <div data-testid="spinnerCont" className="loader">
      {/* takes an optional "tip" prop as text to display under the spinner: (tip= 'loading...') 
      size options: "small", "default", "large" */}
      <Spin data-testid="antSpinner" size="large" />
    </div>
  );
}

export default LoadingComponent;
