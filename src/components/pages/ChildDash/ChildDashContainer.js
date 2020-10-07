import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { messagePopup } from '../../../utils/message-popup';
import RenderChildDash from './RenderChildDash';

import { useResetRecoilState } from 'recoil';
import { headerTitle } from '../../../state/atoms';

const ChildDashContainer = props => {
  const setHeaderTitle = useResetRecoilState(headerTitle);

  const history = useHistory();

  // Whenever this component mounts update the <Header /> title
  useEffect(() => {
    setHeaderTitle();
  }, [setHeaderTitle]);

  return <RenderChildDash history={history} messagePopup={messagePopup} />;
};

export default ChildDashContainer;
