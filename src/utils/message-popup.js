import { Modal } from 'antd';

// displays a modal with a message to the user
export const messagePopup = message => {
  return Modal.warning({
    content: message,
  });
};
