import React from 'react';

const RenderMissionDash = ({ history, messagePopup }) => {
  return (
    <div className="dashboard-container">
      <button
        className="mission-btn-container read"
        onClick={() => history.push('/mission/read')}
      >
        <div className="progress-check">
          <img src="images/check-incomplete.png  " alt="" />
        </div>

        <div className="mission-btn-icon">
          <img src="/images/read-icon.png" alt="" />
          <h3>READ</h3>
        </div>
      </button>
      <div className="right-panel">
        <button
          className="mission-btn-container write"
          onClick={() => history.push('/mission/write')}
        >
          <div className="progress-check">
            <img src="images/check-done.png" alt="" />
          </div>
          <div className="mission-btn-icon">
            <img src="/images/write-icon.png" alt="" />
            <h3>WRITE</h3>
          </div>
        </button>
        <button
          className="mission-btn-container draw"
          onClick={() => history.push('/mission/draw')}
        >
          <div className="progress-check">
            <img src="images/check-done.png" alt="" />
          </div>
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
