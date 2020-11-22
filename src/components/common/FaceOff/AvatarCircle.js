import React from 'react';

const AvatarCircle = ({ player }) => {
  return (
    <div className="avatar-container">
      <div className="avatar-circle">
        <img
          className="avatar"
          src={player.avatar}
          alt="accept the mission artwork"
        />
      </div>
      <h1 className="avatar-name">{player.name}</h1>
    </div>
  );
};

export default AvatarCircle;
