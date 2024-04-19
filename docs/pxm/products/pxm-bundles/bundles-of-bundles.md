---
title: Bundles of Bundles
nav_label: Bundles of Bundles
sidebar_position: 40
---

Your bundle can consist of child bundles. This is useful if you have a base product that is made-up of child products and the pricing of the base product changes, depending on the child products a customer chooses. This can be represented by creating a parent bundle that is made-up of other child bundles. 

![Bundle of bundles](/assets/bundle-of-bundles.png)

For example, you may sell sofas. For each sofa that you sell, your customers can choose a fabric, a sofa size, and a leg color. The sofas are the parent bundle. The sofa size, fabric, and leg color are the child bundles. If a customer chooses a large sofa, then the cost of the fabric increases.

![sofa bundle](/assets/sofa-bundle.png)

You create a bundle of bundles by adding a child bundle as an option of a component of another bundle. 

- You cannot have more than one level of child bundles. In other words, a child bundle cannot have a child bundle as a component.
- A parent bundle can contain both bundle and product components.
- Both parent and child bundles can be either [fixed](/docs/pxm/products/pxm-bundles/pxm-bundles) or [dynamic](/docs/pxm/products/pxm-bundles/dynamic-bundles) in a bundle of bundles.

## Adding Products From Bundles of Bundles to Carts

When using bundles of bundles, only products from child bundles should be added to a cart. This is because if you add a parent bundle to a cart and call the cart, the cart returns information about the parent bundle and the name of the child bundle, but no child bundle components are returned.

When designing your storefront, you must only allow child bundles to be added to carts. 

### Best practices

To create a bundle of bundles, simply add a bundle as a component to another bundle. 

1. Create your products using [create a product](/docs/pxm/products/ep-pxm-products-api/create-a-product).
1. Create all your child bundles using [create a bundle](/docs/pxm/products/ep-pxm-products-api/create-a-product).
1. [Create a parent bundle](/docs/pxm/products/ep-pxm-products-api/create-a-product) and specify the product ID of your child bundle as an option of a component in your bundle. You cannot have more than 1500 options in a bundle. 
