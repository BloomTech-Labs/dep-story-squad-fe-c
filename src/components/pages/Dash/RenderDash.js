import React from 'react';
import { ParentDash } from '../ParentDash';
import { ChildDash } from '../ChildDash';

const RenderDash = props => {
  const currentPage = () => {
    if (props.current === 'parent') {
      return <ParentDash />;
    } else if (props.current === 'child') {
      return <ChildDash />;
    } else {
      return null;
    }
  };

  return <>{currentPage()}</>;
};

export default RenderDash;
