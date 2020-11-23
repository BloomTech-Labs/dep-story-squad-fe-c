import { atom } from 'recoil';

// This is used to manage instruction panel open/ close state
export const instructionPanelState = atom({
  key: 'instructionPanelState',
  default: false,
});
