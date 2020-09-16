import React from 'react';
import { ParentDash } from '../ParentDash';
import { ChildDash } from '../ChildDash';

const dash = {
  parent: <ParentDash />,
  child: <ChildDash />,
  null: null,
};

const RenderDash = props => {
  return <>{dash[props.userType]}</>;
};

export default RenderDash;
