import React from 'react';
import { useRecoilState } from 'recoil';

import CloseIcon from '../../images/closeIcon.svg';
import { modalWindow } from '../../state/modalWindow';

const SubmissionViewer = () => {
  const [curModalWindow, setModalWindow] = useRecoilState(modalWindow);

  const handleClose = () => {
    setModalWindow({ ...curModalWindow, isOpen: false });
  };
  return (
    <>
      {curModalWindow.isOpen && (
        <div
          id="modal-panel"
          className={`modal-panel-container ${
            curModalWindow.isOpen ? 'show' : 'hide'
          }`}
        >
          <div className={`modal-panel-inner`}>
            <button className="close-btn" onClick={handleClose}>
              <img src={CloseIcon} />
            </button>
            <img className="submission-image" src={curModalWindow.url} />
          </div>
        </div>
      )}
    </>
  );
};

export default SubmissionViewer;
