import React from 'react';

function LoadingComponent() {
  return (
    <div data-testid="spinnerCont" className="loader">
      <img
        src="/images/shark-spinner.gif"
        data-testid="spinnerShark"
        alt="spinnerShark"
      />
    </div>
  );
}

export default LoadingComponent;
