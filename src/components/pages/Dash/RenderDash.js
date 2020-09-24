import React, { useEffect } from 'react';
import { ParentDash } from '../ParentDash';
import { ChildDash } from '../ChildDash';
import { useLocalStorage } from '../../../utils/hooks';

const RenderDash = props => {
  const [curUserType] = useLocalStorage('curUserType', null);

  useEffect(() => {}, [curUserType]);

  const dash = {
    parent: <ParentDash setHeaderTitle={props.setHeaderTitle} />,
    child: <ChildDash setHeaderTitle={props.setHeaderTitle} />,
    null: null,
  };
  return <>{dash[curUserType]}</>;
};

export default RenderDash;
