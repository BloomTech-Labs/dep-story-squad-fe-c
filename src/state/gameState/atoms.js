import { atom } from 'recoil';

export const gameState = atom({
  key: 'gameState',
  default: {
    name: 'MISSION_NOT_STARTED',
    message: 'Pending mission',
  },
});
