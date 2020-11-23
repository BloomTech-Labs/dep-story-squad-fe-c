import { atom } from 'recoil';

// This is used to store state for submission modal window
export const modalWindow = atom({
  key: 'modalWindow',
  default: {
    // modal is open or not
    isOpen: false,
    // image url for the submission
    url: '',
  },
});
