---
title: JSONParser
nav_label: JSONParser
sidebar_position: 20
---

The JSON parser tag can be used to parse JSON that is contained in a string value. This is useful for parsing product attributes that contain JSON values.

```jsx
<JSONParser
  dataRef={product.attributes.custom_json_string}
  item={(object) => (
    <div>{object.name}</div>
  )}
/>
```

## Attributes

* **dataRef**: DataLocator - the data-element storing the Generator's configuration
* **item**: anonymous [arrow function](https://www.w3schools.com/js/js\_arrow\_function.asp) - used to create a collection item
