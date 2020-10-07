# Recoil - Global State Management

## What is `Recoil`?

`Recoil` is a global state management library for `React` still in development by the team at Facebook. It has been opened up to the public and available for use in other projects. It is only compatible with `Functional` Components using `Hooks` in `React`. It cannot currently be use with `Class` Components. `Recoil` provides a simple yet powerful solution to implementing a global state management solution in your applications.

`Recoil` state is divided into 2 main categories:

---

### `Atoms`

> A piece of global state that can be accessed by any component in the app

- Example `Atom`:

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

- Example `Component`:

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
