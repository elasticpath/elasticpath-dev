---
title: Product Options
nav_label: Product Options
sidebar_position: 40
---

The Product Options allows you to show a list of all the options for the chosen product. This generates a series of list elements showing all the possible options.

```jsx
<ProductOptions dataRef={product.options} product={product} />
```

## Attributes

* **product**: the data-element storing the product's configuration from the Product Generator
* **dataRef:** the options of a product to be iterated on
