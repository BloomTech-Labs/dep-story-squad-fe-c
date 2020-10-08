import React, { useEffect } from 'react';
import { ParentDash } from '../ParentDash';
import { ChildDash } from '../ChildDash';

// recoil
import { useRecoilValue } from 'recoil';
import { currentUserState } from '../../../state/userState';

const RenderDash = props => {
  const { curUserType } = useRecoilValue(currentUserState);

  useEffect(() => {}, [curUserType]);

  const dash = {
    parent: <ParentDash />,
    child: <ChildDash />,
    null: null,
  };
  return <>{dash[curUserType]}</>;
};

export default RenderDash;
