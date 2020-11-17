import React from 'react';
import GameControls from '../../common/GameControls';
import HeroCard from '../../common/HeroCard/HeroCard';
import SharePoints from '../../common/SharePoints';

const RenderGameSharePoints = ({ players, controls }) => {
  const player1 = players[0];
  const player2 = players[1];
  return (
    <div className="game-container grid-4">
      <div className={`hero-card yellow`}>
        <div className="hero-avatar-wrapper ">
          <img className="hero-avatar" src={player2.avatar} />
        </div>
      </div>
      <SharePoints player={player1} />
      <div className={`hero-card green`}>
        <div className="hero-avatar-wrapper ">
          <img className="hero-avatar" src={player2.avatar} />
        </div>
      </div>
      <SharePoints player={player2} />
      <GameControls controls={controls} />
    </div>
  );
};

export default RenderGameSharePoints;
