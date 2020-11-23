import { atom } from 'recoil';

// This is used to store the current route
export const routeState = atom({
  key: 'routeState',
  default: '/',
});
