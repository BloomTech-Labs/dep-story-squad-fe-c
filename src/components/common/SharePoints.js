import React from 'react';
import { useRecoilState } from 'recoil';
import { modalWindow } from '../../state/modalWindowOpen';

const SharePoints = ({ label, player }) => {
  const [curModalWindow, setModalWindow] = useRecoilState(modalWindow);
  const idx = Math.ceil(Math.random() * 2);
  const missions = player.missions;

  const handleClick = url => {
    setModalWindow({
      isOpen: true,
      url,
    });
  };
  return (
    <div className="share-points-container">
      <div
        className="submission-item"
        onClick={() => handleClick(missions[idx].writingSubmission)}
      >
        <img src={missions[idx].writingSubmission} />
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
      <div
        className="submission-item"
        onClick={() => handleClick(missions[idx].writingSubmission)}
      >
        <img src={missions[idx].drawingSubmission} />
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
