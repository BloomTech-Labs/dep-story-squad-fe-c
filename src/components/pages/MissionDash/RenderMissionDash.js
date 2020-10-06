import React from 'react';

const RenderMissionDash = ({ beginMission, missionReqs }) => {
  return (
    <div className="dashboard-container">
      <button
        className="mission-btn-container read"
        onClick={() => beginMission('read', '/mission/read', 'Mission Locked!')}
      >
        <div className="progress-check">
          <img
            src={`images/check-${missionReqs.read ? 'done' : 'incomplete'}.png`}
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
              'You need to complete the Read mission first!'
            )
          }
        >
          <div className="progress-check">
            <img
              src={`images/check-${
                missionReqs.write ? 'done' : 'incomplete'
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
              'You need to complete the Write mission first!'
            )
          }
        >
          <div className="progress-check">
            <img
              src={`images/check-${
                missionReqs.draw ? 'done' : 'incomplete'
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
