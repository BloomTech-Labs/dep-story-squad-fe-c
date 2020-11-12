import { atom } from 'recoil';

export const gameState = atom({
  key: 'gameState',
  default: {
    name: 'submissionsCompleteApproved',
    message: 'Pending mission',
  },
});
