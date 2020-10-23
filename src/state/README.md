# Recoil - Global State Management

## What is `Recoil`?

`Recoil` is a global state management library for `React` still in development by the team at Facebook. It has been opened up to the public and available for use in other projects. It is only compatible with `Functional Components`. It cannot be used by `Class Components` currently. Some features that are in development are unstable and are not reccommended for use. `Recoil` provides a simple yet powerful solution to implementing a global state management setup in your applications.

Find out more about `Recoil` <a href="https://recoiljs.org/" target="_blank">here</a>

---

## Using `Recoil`

`Recoil` state is divided into 2 main categories:

---

### `Atoms`

> A piece of global state that can be accessed by any component in the app

- Example `Atom`

```js
import { atom } from 'recoil';

export const myAtom = atom({
  // key must be unique
  key: 'myAtom',
  // initial value when the app loads or is refreshed
  default: initialAtomValue,
});
```

---

### `Selectors`

> Derived global state. Think of this as an atom that has been passed into a pure function to return a new value

- Example `Selector`

```js
import { selector } from 'recoil';
import { myAtom } from 'path/to/atom-file';

export const mySelector = selector({
  // key must be unique
  key: 'mySelector',
  // function that returns a derived value from the atom
  get: ({ get }) => {
    const value = get(myAtom);

    return value + 10;
  },
});
```

---

`Atoms` can be "subscribed" to by components using one of several `Recoil` Hooks in a manner similar to the `useState` Hook in `React`.

- Example `Component`

```js
import React from 'react';
import { useRecoilState } from 'recoil';
import { myAtom } from 'path/to/atom';

const MyComponent = () => {
  // useRecoilState provides Get and Set methods like useState
  const [appTitle, setAppTitle] = useRecoilState(myAtom);

  return (
    <div id="app">
      <h1>{appTitle}</h1>
    </div>
  );
};

export default MyComponent;
```

---

There are other `Hooks` available that allow you to fine tune how your app performs with the global state changes. If a component needs to set the state but doesn't need to read the value `Recoil` provides a hook to do that. The advantage with this setup is the component setting the state will not be subscribed to state changes and will not be re-rendered when this state changes. In a large component tree structure this means the app will be more performant as only the components that need to re-render will.

---

## File Structure

For this project please follow the outlined structure for file orginization. For each global state item, create a named folder within `state/`. Inside of this folder add an `index.js`, `atoms.js` and `selectors.js` as needed. The index file will simply contain exports for all of this state's atoms and selectors.

- Example Folder Structure:

```
state
|
|-- headerTitle
|   |
|   |-- index.js
|   |-- atoms.js
|
|-- userState
    |
    |-- index.js
    |-- atoms.js
    |-- selectors.js
```

- Example `index.js` file:

```js
// Atom exports
export { atom1, atom2, atom3 } from './atoms';

// Selector exports
export { selector1, selector2, selector3 } from './selectors';
```
