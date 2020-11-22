import { atom } from 'recoil';

// This is used to store game/ mission state
// TODO: maybe we can combine this with userState's mission_progress
export const gameState = atom({
  key: 'gameState',
  default: {
    name: 'MISSION_NOT_STARTED',
    userVoteCount: 0,
    matchedPlayers: [],
  },
});
