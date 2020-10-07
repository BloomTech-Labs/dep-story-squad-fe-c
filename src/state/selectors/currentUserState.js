import { selector } from 'recoil';
import { userState } from '../atoms';

export const currentUserState = selector({
  key: 'currentUserState',
  get: ({ get }) => {
    const currentUser = get(userState);

    return currentUser;
  },
});
