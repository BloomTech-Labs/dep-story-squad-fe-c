import { selector } from 'recoil';
import { userState } from './atoms';

export const currentUserState = selector({
  key: 'currentUserState',
  get: ({ get }) => {
    // look into local storage for cached user info
    const value = get(userState);
    const cached = JSON.parse(window.localStorage.getItem('currentUser'));
    return !cached ? value : cached;
  },
  set: ({ set }, newValue) => {
    // set the new user info into local storage
    window.localStorage.setItem('currentUser', JSON.stringify(newValue));
    // update state with the new user
    set(userState, newValue);
  },
});
