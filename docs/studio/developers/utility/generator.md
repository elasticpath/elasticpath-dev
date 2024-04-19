---
title: Generator
nav_label: Generator
sidebar_position: 10
---

The Generator allows your users to iterate through lists and groups of data and create a piece of NOML for each item iterated on.

```jsx
<Generator
  dataRef={content.values}
  item={(value, m) => (
    <div>{value}</div>
  )}
/>
```

## Attributes

* **dataRef**: DataLocator - the data-element storing the Generator's configuration
* **item**: anonymous [arrow function](https://www.w3schools.com/js/js\_arrow\_function.asp) - used to create a collection item

