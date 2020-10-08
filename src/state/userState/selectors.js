import { selector } from 'recoil';
import { userState } from './atoms';

export const currentUserState = selector({
  key: 'currentUserState',
  get: ({ get }) => {
    // look into local storage for cached user info
    const cachedUser = JSON.parse(window.localStorage.getItem('currentUser'));
    // return the cached user info or the default userState if no cached obj found
    return cachedUser ? cachedUser : get(userState);
  },
  set: ({ set }, newValue) => {
    // set the new user info into local storage
    window.localStorage.setItem('currentUser', JSON.stringify(newValue));
    // update state with the new user
    set(userState, newValue);
  },
});
