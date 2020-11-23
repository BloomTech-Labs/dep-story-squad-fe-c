import React from 'react';

import GameControls from '../../common/GameControls';

const RenderGameWaitForResult = ({ controls }) => {
  return (
    <div className="matchup-container">
      <div className="waiting-container">
        <h1>Waiting for the rest of the votes</h1>
      </div>
      <GameControls controls={controls} />
    </div>
  );
};

export default RenderGameWaitForResult;
