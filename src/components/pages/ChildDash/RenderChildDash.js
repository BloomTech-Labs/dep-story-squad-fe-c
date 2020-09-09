import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../common/';

const RenderChildDash = () => {
  return (
    <div>
      <Header title={'Story Squad'} />
      <div className="dash-btn-container mission">
        <Link>
          <img src="/images/mission-btn.png" alt="accept the mission artwork" />
        </Link>
      </div>
      <div className="dash-btn-container avatar">
        <Link>
          <img src="/images/avatar-btn.png" alt="change avatar artwork" />
        </Link>
      </div>
      <div className="dash-btn-container passport">
        <Link>
          <img
            src="/images/passport-btn.png"
            alt="adventure passport artwork"
          />
        </Link>
      </div>
      <div className="dash-btn-container trophy">
        <Link>
          <img src="/images/trophy-btn.png" alt="trophy room artwork" />
        </Link>
      </div>
    </div>
  );
};

export default RenderChildDash;
