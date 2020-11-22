import React from 'react';
import { useRecoilState } from 'recoil';

import { currentGameState } from '../../state/gameState';

const HeaderMenu = ({
  authService,
  push,
  switchUser,
  logout,
  refNavMenu,
  refMenuBtn,
}) => {
  const [curGameState, setCurGameState] = useRecoilState(currentGameState);
  // Ref to the <MenuButton /> component in the <Header />
  const menuBtn = refMenuBtn.current;

  // Callback that fires when Home button in nav menu is clicked
  const goHome = () => {
    menuBtn.click();
    push('/dashboard');
  };

  const resetMission = () => {
    setCurGameState({
      ...curGameState,
      name: 'MISSION_NOT_STARTED',
      userVoteCount: 0,
      matchedPlayers: [],
    });
  };

  const handleSwitchUser = event => {
    switchUser(event, push);
    // TODO: Right now I am resetting the mission. But it should really fetch the in progress mission for the newly logged in user
    resetMission();
  };

  // Callback that fires when Logout button in nav menu is clicked
  const userLogout = event => {
    menuBtn.click();
    logout(event, authService);
  };
  // This is to mock a submission approved
  // Submissions will get approved/rejected by Tuesday 11:59 PM
  const approveSubmission = () => {
    setCurGameState({
      ...curGameState,
      name: 'SUBMISSION_APPROVED',
    });
  };

  // This is to mock a mission state happens on 12:00 AM Thursday
  // When Match-up are happening - from Thursday to Friday
  const timeForMatchup = () => {
    setCurGameState({
      ...curGameState,
      name: 'GAME_MATCHUP',
    });
  };

  return (
    <div ref={refNavMenu} className="header-menu">
      <button
        disabled={!window.localStorage.getItem('okta-token-storage')}
        type="button"
        onClick={goHome}
      >
        Home
      </button>

      <button
        disabled={!window.localStorage.getItem('okta-token-storage')}
        type="button"
        onClick={handleSwitchUser}
      >
        Change User
      </button>

      <button type="button" onClick={approveSubmission}>
        Test (Approve Submission)
      </button>

      <button type="button" onClick={timeForMatchup}>
        Test (Time for Matchup)
      </button>

      <button type="button" onClick={resetMission}>
        Test (Reset Mission)
      </button>

      <button
        disabled={!window.localStorage.getItem('okta-token-storage')}
        type="button"
        onClick={e => userLogout(e)}
      >
        Logout
      </button>
    </div>
  );
};

export default HeaderMenu;
