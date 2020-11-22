import { selector } from 'recoil';
import { gameState } from './atoms';
import { getMatchupPlayers } from '../../utils/dummyData';

export const currentGameState = selector({
  key: 'currentGameState',
  get: ({ get }) => {
    // load value from localstorage if exist
    const value = get(gameState);
    const cached = JSON.parse(window.localStorage.getItem('currentGameState'));
    return !cached ? value : cached;
  },
  set: ({ set }, newValue) => {
    window.localStorage.setItem('currentGameState', JSON.stringify(newValue));
    set(gameState, newValue);
  },
});

// Dummy player selector
export const matchupPlayers = selector({
  key: 'matchupPlayers',
  get: ({ get }) => {
    const result = getMatchupPlayers();
    return result;
  },
});
