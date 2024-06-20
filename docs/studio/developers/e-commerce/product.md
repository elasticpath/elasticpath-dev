---
title: Product
nav_label: Product
sidebar_position: 10
---

:::note
This generator is only available on **eCommerce** plans.
:::

The Product generator allows you to access elements of a product in your storefront. This allows you to display details on the products inventory, price range, variants, and media associated with the product.

```jsx
<Product
  dataRef={content.product}
  item={(product) => (
    <ProductInventory product={product} />
    <ProductPrice product={product} />
    <ProductOptions dataRef={product.options} product={product} />
    <Media
      dataRef={product.media[0]}
      layout="normal"
      category="image"
      className="media swiper-slide"
      readOnly={true}
    />
  )}
/>
```

When Product is added, a new button will be added to the top right corner of the component that allows you to pick a product from your storefront as shown below.

![Choose a product from your Storefront to have](/assets/360644AC-C51D-4B7C-BC86-6D79925171E4.jpeg)


![Pick a Product from your storefront that will be used](/assets/3C06425C-D12E-44CA-9B6B-D881D0063916_1_201_a.jpeg)

## Attributes

* **dataRef**: DataLocator - the data-element storing the Generator's configuration
* **item**: anonymous [arrow function](https://www.w3schools.com/js/js\_arrow\_function.asp) - used to create a collection item
