import React from 'react';

const RenderMissionDash = () => {
  return (
    <div className="dashboard-container">
      <button className="mission-btn-container read">
        <input className="progress-check" type="checkbox" />
        <div className="mission-btn-icon">
          <img src="/images/read-icon.png" alt="" />
          <h3>READ</h3>
        </div>
      </button>
      <div className="right-panel">
        <button className="mission-btn-container write">
          <input className="progress-check" type="checkbox" />
          <div className="mission-btn-icon">
            <img src="/images/write-icon.png" alt="" />
            <h3>WRITE</h3>
          </div>
        </button>
        <button className="mission-btn-container draw">
          <input className="progress-check" type="checkbox" />
          <div className="mission-btn-icon">
            <img src="/images/draw-icon.png" alt="" />
            <h3>DRAW</h3>
          </div>
        </button>
      </div>
    </div>
  );
};

export default RenderMissionDash;
