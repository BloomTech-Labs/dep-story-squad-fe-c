import { atom } from 'recoil';

export const screenState = atom({
  key: 'screenState',
  default: 'home',
});
