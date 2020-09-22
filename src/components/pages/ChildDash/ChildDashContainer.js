import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Modal } from 'antd';

import RenderChildDash from './RenderChildDash';

const ChildDashContainer = props => {
  // sets state held in <App />
  const { setHeaderTitle } = props;

  const [displayMessage, setDisplayMessage] = useState(false);

  const history = useHistory();

  // Whenever this component mounts update the <Header /> title
  useEffect(() => {
    setHeaderTitle('Story Squad');
  }, [setHeaderTitle]);

  // displays a modal with a message to the user
  const messagePopup = message => {
    return Modal.info({
      content: (
        <div>
          <p>{message}</p>
        </div>
      ),
    });
  };

  return <RenderChildDash history={history} messagePopup={messagePopup} />;
};

export default ChildDashContainer;
