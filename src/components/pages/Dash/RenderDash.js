import React from 'react';
import { ParentDash } from '../ParentDash';
import { ChildDash } from '../ChildDash';

const RenderDash = props => {
  const dash = {
    parent: <ParentDash setHeaderTitle={props.setHeaderTitle} />,
    child: <ChildDash />,
    null: null,
  };
  return <>{dash[props.userType]}</>;
};

export default RenderDash;
