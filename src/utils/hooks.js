import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  //set state
  const [storedValue, setStoredValue] = useState(() => {
    // check if key already exists in localStorage
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = value => {
    //save state
    setStoredValue(value);
    // save to localStorage
    window.localStorage.setItem(key, JSON.stringify(value));
  }; //end setValue

  return [storedValue, setValue];
}; //end useLocalstorage

export { useLocalStorage };
