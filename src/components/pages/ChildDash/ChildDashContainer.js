import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { messagePopup } from '../../../utils/message-popup';
import RenderChildDash from './RenderChildDash';
// Recoil imports
import { useResetRecoilState } from 'recoil';
import { headerTitle } from '../../../state/headerTitle';

const ChildDashContainer = props => {
  // Header Title
  const setHeaderTitle = useResetRecoilState(headerTitle);

  const { push } = useHistory();

  // Whenever this component mounts update the <Header /> title
  useEffect(() => {
    setHeaderTitle();
  }, [setHeaderTitle]);

  return <RenderChildDash push={push} messagePopup={messagePopup} />;
};

export default ChildDashContainer;
