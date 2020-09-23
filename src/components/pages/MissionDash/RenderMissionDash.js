import React, { useState, useEffect } from 'react';
import axios from 'axios';

// creating axios call to render the pdf stories to be read once the "Read" section is selected on the mission page.
const getStories = () => {
  axios
    // this endpoint returns {
    //     id: <id of mission>,
    //     read: [
    //             <array of image url's for the assigned reading>
    //           ],
    //     write: <writing prompt>,
    //     draw: <drawing prompt>
    // }
    .get('https://story-squad-c-api.herokuapp.com/api/child/:childID/mission');
};

const RenderMissionDash = ({ messagePopup }) => {
  return (
    <div className="dashboard-container">
      <button
        className="mission-btn-container read"
        onClick={() => messagePopup('This feature is not available yet!')}
      >
        <input className="progress-check" type="checkbox" />
        <div className="mission-btn-icon">
          <img src="/images/read-icon.png" alt="" />
          <h3>READ</h3>
        </div>
      </button>
      <div className="right-panel">
        <button
          className="mission-btn-container write"
          onClick={() => messagePopup('This feature is not available yet!')}
        >
          <input className="progress-check" type="checkbox" />
          <div className="mission-btn-icon">
            <img src="/images/write-icon.png" alt="" />
            <h3>WRITE</h3>
          </div>
        </button>
        <button
          className="mission-btn-container draw"
          onClick={() => messagePopup('This feature is not available yet!')}
        >
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
