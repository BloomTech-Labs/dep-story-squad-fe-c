import React from 'react';
import CloseIcon from '../../images/closeIcon.svg';
import { useRecoilState } from 'recoil';
import { modalWindow } from '../../state/modalWindowOpen';

const SubmissionViewer = ({ player, submission }) => {
  const [curModalWindow, setModalWindow] = useRecoilState(modalWindow);
  const handleClose = () => {
    setModalWindow({ ...curModalWindow, isOpen: false });
  };
  return (
    <div
      className={`container-full modal-panel ${
        curModalWindow.isOpen ? 'show' : 'hide'
      }`}
    >
      <div className={`modal-panel-inner`}>
        <button className="close-button" onClick={handleClose}>
          <img src={CloseIcon} />
        </button>
        <img className="submission-image" src={curModalWindow.url} />
      </div>
    </div>
  );
};

export default SubmissionViewer;
