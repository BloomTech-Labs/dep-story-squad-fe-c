import React from 'react';
import { Header } from '../../common/';

const RenderChildDash = () => {
  return (
    <div>
      <Header title={'Story Squad'} />
      <div className="dash-btn-container mission">
        <img src="/images/mission-btn.png" alt="accept the mission artwork" />
      </div>
      <div className="dash-btn-container avatar">
        <img src="/images/avatar-btn.png" alt="change avatar artwork" />
      </div>
      <div className="dash-btn-container passport">
        <img src="/images/passport-btn.png" alt="adventure passport artwork" />
      </div>
      <div className="dash-btn-container trophy">
        <img src="/images/trophy-btn.png" alt="trophy room artwork" />
      </div>
    </div>
  );
};

export default RenderChildDash;
