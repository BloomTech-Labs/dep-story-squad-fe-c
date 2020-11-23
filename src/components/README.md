# React Component Structure

This README will outline the preferred convention for creating React Components within this project.

## Common Components

Common Components are generally any commonly used or basic components. Elements like buttons, lists, menus, navigation or other commonly used elements of a page should be created within the `common/` folder. These components are generally composed of a single file and then exported via `index.js`.
In some cases it may be beneficial to creat a folder to house a collection of files that comprise a common component. It may also be worth while to follow the convention in Page Components to increase readability of more complex components.

---

#### Example code for a `Common Component`

---

- Example `index.js` for exports

```js
import CommonComp from './CommonComp';
import CommonComp2 from './CommonComp2';

export { CommonComp, CommonComp2 };
```

- Example `Common Component`

```js
import React from 'react';

const CommonComp = () => {
  // Stateful logic goes in here

  return (
    <>
      <input />
    </>
  );
};

export default CommonComp;
```

---

## Page Components

Page Components are components that create a complete page within the app and are typically comprised of multiple other components including Common Components. Each Page Component is divided into a minimum of 3 files: an `index.js` to simplify exports, a `Container` component that houses the stateful logic and a `Render` component that houses all the JSX and receives props.

---

#### Example Boilerplate code for a `Page Component`

---

- `index.js`

```js
export { default as CompName } from './CompNameContainer';
```

- `CompNameContainer.js`

```js
import React from 'react';
import RenderCompName from './RenderCompName';

const CompNameContainer = () => {
  // Stateful logic goes here

  return <RenderCompName />;
};

export default CompNameContainer;
```

- `RenderCompName.js`

```js
import React from 'react';

const RenderCompName = props => {
  // no stateful logic, only props

  return (
    <div>
      <h1>Title</h1>
      <p>text goes in here</p>
    </div>
  );
};

export default RenderCompName;
```

---
## Ant Design Components
See [Ant Design](https://ant.design/)


---


