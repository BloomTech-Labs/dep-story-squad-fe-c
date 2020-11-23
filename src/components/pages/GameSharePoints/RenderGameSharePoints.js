import React from 'react';

import GameControls from '../../common/GameControls';
import SharePoints from '../../common/SharePoints';

const RenderGameSharePoints = ({ players, controls }) => {
  return (
    <div className="game-container grid-4">
      {players.map((player, idx) => (
        <React.Fragment key={idx}>
          <div className={`hero-card ${player.backgroundColor}`}>
            <div className="hero-avatar-wrapper ">
              <img className="hero-avatar" src={player.avatar} />
            </div>
            <h1 className="player-name">{player.name}</h1>
          </div>
          <SharePoints player={player} />
        </React.Fragment>
      ))}
      <GameControls controls={controls} />
    </div>
  );
};

export default RenderGameSharePoints;
