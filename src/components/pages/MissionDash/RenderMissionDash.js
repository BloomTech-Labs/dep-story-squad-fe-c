import React from 'react';

const RenderMissionDash = ({ beginMission, missionReqs }) => {
  return (
    <div className="dashboard-container">
      <button
        className="mission-btn-container read"
        onClick={() => beginMission('read', '/mission/read', '')}
      >
        <div className="progress-check">
          <img
            src={`images/check-${
              missionReqs && missionReqs.read ? 'done' : 'incomplete'
            }.png`}
            alt=""
          />
        </div>

        <div className="mission-btn-icon">
          <img src="/images/read-icon.png" alt="" />
          <h3>READ</h3>
        </div>
      </button>
      <div className="right-panel">
        <button
          className="mission-btn-container write"
          onClick={() =>
            beginMission(
              'write',
              '/mission/write',
              'Complete the Read mission first!'
            )
          }
        >
          <div className="progress-check">
            <img
              src={`images/check-${
                missionReqs && missionReqs.write ? 'done' : 'incomplete'
              }.png`}
              alt=""
            />
          </div>
          <div className="mission-btn-icon">
            <img src="/images/write-icon.png" alt="" />
            <h3>WRITE</h3>
          </div>
        </button>
        <button
          className="mission-btn-container draw"
          onClick={() =>
            beginMission(
              'draw',
              '/mission/draw',
              'Complete the Read mission first!'
            )
          }
        >
          <div className="progress-check">
            <img
              src={`images/check-${
                missionReqs && missionReqs.draw ? 'done' : 'incomplete'
              }.png`}
              alt=""
            />
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
