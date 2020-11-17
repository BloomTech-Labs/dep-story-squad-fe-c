import { atom } from 'recoil';

export const modalWindow = atom({
  key: 'modalWindow',
  default: {
    isOpen: false,
    url: '',
  },
});
