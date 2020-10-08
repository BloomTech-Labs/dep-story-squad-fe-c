import React, { useEffect } from 'react';
import { ParentDash } from '../ParentDash';
import { ChildDash } from '../ChildDash';

// recoil
import { useRecoilValue } from 'recoil';
import { userState } from '../../../state/atoms';

const RenderDash = props => {
  const curUserType = useRecoilValue(userState).curUserType;

  useEffect(() => {}, [curUserType]);

  const dash = {
    parent: <ParentDash setHeaderTitle={props.setHeaderTitle} />,
    child: <ChildDash setHeaderTitle={props.setHeaderTitle} />,
    null: null,
  };
  return <>{dash[curUserType]}</>;
};

export default RenderDash;
