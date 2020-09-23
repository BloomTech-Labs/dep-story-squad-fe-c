import { Modal } from 'antd';

// displays a modal with a message to the user
// pass in a type of dialog box to display and the message and optional title
// types are: info, success, error or warning
export const messagePopup = (type, message, title) => {
  switch (type) {
    case 'info':
      return Modal.info({
        // if a title is provided it will be displayed otherwise if undefined no title displays
        title: title ? title : '',
        // message to be displayed inside the popup
        content: message,
      });

    case 'success':
      return Modal.success({
        // if a title is provided it will be displayed otherwise if undefined no title displays
        title: title ? title : '',
        // message to be displayed inside the popup
        content: message,
      });

    case 'error':
      return Modal.error({
        // if a title is provided it will be displayed otherwise if undefined no title displays
        title: title ? title : '',
        // message to be displayed inside the popup
        content: message,
      });

    case 'warning':
      return Modal.warning({
        // if a title is provided it will be displayed otherwise if undefined no title displays
        title: title ? title : '',
        // message to be displayed inside the popup
        content: message,
      });

    // if type cannot be determined info will be displayed as a default fallback
    default:
      return Modal.info({
        // if a title is provided it will be displayed otherwise if undefined no title displays
        title: title ? title : '',
        // message to be displayed inside the popup
        content: message,
      });
  }
};
