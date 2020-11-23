import React from 'react';

const HeroCard = ({ player, backgroundColor, isYou = false }) => {
  return (
    <div className={`hero-card ${backgroundColor}`}>
      <div className="chat-wrapper">
        <p>
          Hi, <br /> My name is {player.name}
        </p>
      </div>
      <div className="hero-avatar-wrapper ">
        <img className="hero-avatar" src={player.avatar} />
      </div>
      <h1 className="player-name">{player.name}</h1>
    </div>
  );
};

export default HeroCard;
