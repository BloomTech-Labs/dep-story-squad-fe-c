import React from 'react';
import { useRecoilState } from 'recoil';

import { modalWindow } from '../../state/modalWindow';

const SharePoints = ({ label, player }) => {
  const [curModalWindow, setModalWindow] = useRecoilState(modalWindow);
  const showModalViewer = () => {
    setModalWindow({
      isOpen: true,
      url: player.writingSubmission.url,
    });
  };
  return (
    <div className="share-points-container">
      <div className="submission-item">
        <img
          className="submission-image"
          src={player.writingSubmission.url}
          onClick={showModalViewer}
        />
        <select>
          <option value="0">0</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>
          <option value="70">70</option>
          <option value="80">80</option>
          <option value="90">90</option>
          <option value="100">100</option>
        </select>
        <h1>Writing</h1>
      </div>

      <div className="submission-item">
        <img
          className="submission-image"
          src={player.drawingSubmission.url}
          onClick={showModalViewer}
        />
        <select>
          <option value="0">0</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>
          <option value="70">70</option>
          <option value="80">80</option>
          <option value="90">90</option>
          <option value="100">100</option>
        </select>
        <h1>Drawing</h1>
      </div>
    </div>
  );
};

export default SharePoints;
