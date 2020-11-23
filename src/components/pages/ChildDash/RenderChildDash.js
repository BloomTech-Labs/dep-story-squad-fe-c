import React from 'react';

const RenderChildDash = ({ messagePopup, missionButton }) => {
  return (
    <div className="dashboard-container">
      {missionButton}
      <button
        className="dash-btn-container avatar"
        /* Feature not implemented yet. if a user clicks the button an alert is displayed with the feedback */
        onClick={() =>
          messagePopup('warning', 'This feature is not available yet!')
        }
      >
        <img src="/images/avatar-btn.png" alt="change avatar artwork" />
      </button>

      <button
        className="dash-btn-container passport"
        /* Feature not implemented yet. if a user clicks the button an alert is displayed with the feedback */
        onClick={() =>
          messagePopup('warning', 'This feature is not available yet!')
        }
      >
        <img src="/images/passport-btn.png" alt="adventure passport artwork" />
      </button>

      <button
        className="dash-btn-container trophy"
        /* Feature not implemented yet. if a user clicks the button an alert is displayed with the feedback */
        onClick={() =>
          messagePopup('warning', 'This feature is not available yet!')
        }
      >
        <img src="/images/trophy-btn.png" alt="trophy room artwork" />
      </button>
    </div>
  );
};

export default RenderChildDash;
