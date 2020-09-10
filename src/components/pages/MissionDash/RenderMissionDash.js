import React from 'react';
import { Header } from '../../common';

const RenderMissionDash = () => {
  return (
    <div className="dashboard-container">
      <Header title={'Mission'} />
      <button className="mission-btn-container read">
        <input className="progress-check" type="checkbox" />
        <img src="/images/read-icon.png" />
        <h3>READ</h3>
      </button>
      <button className="mission-btn-container write">
        <input className="progress-check" type="checkbox" />
        <img src="/images/write-icon.png" />
        <h3>WRITE</h3>
      </button>
      <button className="mission-btn-container draw">
        <input className="progress-check" type="checkbox" />
        <img src="/images/draw-icon.png" />
        <h3>DRAW</h3>
      </button>
    </div>
  );
};

export default RenderMissionDash;
