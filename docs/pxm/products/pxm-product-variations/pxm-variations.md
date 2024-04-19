---
title: Overview
nav_label: Overview
sidebar_position: 10
---

:::caution
The Variations API is for Administrator use only. Do not use these endpoints on your customer-facing frontends.
:::

Product variations are the product options available for a base product that your shoppers can choose. As a merchandiser, you want to be able to present all the options you have available for your products to make it easier for your shoppers to visualize them and influence a potential sale. Product Variations allow you to create and manage up to 10,000 unique combinations of options for variations of a product. You can then use PXM Catalogs to build different catalogs for different users, giving you greater flexibility with your product data and making it easier for your shoppers to interact with your products. 

For example, a product has two variations size and color. The size variation has three options, such as small, medium, and large and the color variation has three options, such as green, red, and blue. This creates a variation matrix with nine possible unique combinations or child products as shown in the following example:

![The sizes are across the top row and the colors are in the first column.](/assets/product-variations-1.png)

You can create additional variations or options and attach them to a product to increase the number of combinations. Using the previous example, if you add a third variation with three options, you can build child products with 27 unique combinations of variations and options.

## Reusability

Variations are reusable, and you can attach the same variation to any number of products. You can also create a link between the existing variation and a new product. The following scenario provides an example:

1. Create a variation `shoe size` and add five options in the variation.
1. Create a product `shoe 1` and link the variation `shoe size` to the product.
1. Create second product, `shoe 2` and link the variation `shoe size` to this product as well.
1. Create a third product `shoe 3` and do not link any variation to this product.

`shoe 1` and `shoe 2` inherit the properties of `shoe size` variation, and you can build the child products with the options. However, you cannot build child products for `shoe 3` unless you assign a variation with at-least one option to the product.

## Building Child Products

Child products inherit attributes from their parent products. When you make changes to the attributes of the parent products, you can rebuild your child products, ensuring that changes to the parent products are propagated to the child products.

Alternatively, you can modify a child product independently, without impacting its parent product. For example, you may prefer the status of your child product to be `live`, while keeping the parent product's status as `draft`. When you directly update a child product, it becomes independent of its parent product. In other words, any subsequent changes made to the parent product are not automatically reflected in the child product when you rebuild the parent product and its child products. Once a child product is independent of its parent, you cannot recreate the association between the child product and its parent. You must delete the child product and rebuild the parent to recreate the child product.

Following on from that, if you add the same flow to both a parent and child product, the child flow values are not affected by changes to the parent flow values in a rebuild.

In addition, when building your child products, you can choose to exclude or include certain combinations of variation options. This is useful, for example, if you have a variation option that you do not sell. This makes managing and building your child products quick and easy. See [Assigning Variations and Building Child Products](/docs/pxm/products/pxm-products-commerce-manager/assign-variations-build-child-products).

Re-building child products after adding or removing a new variation changes the total number of child products that you can generate from a base product. When you rebuild the child products after updating variations associated with the base product, all existing child products that belong to a base product are deleted. New child products are created with new product IDs. 

If you have any bundles that reference child products directly, then you must update the bundles with the new child product IDs.

However, re-building child products after adding or removing an option does not change the existing product IDs.

## Sorting the Order of Variations and Options

The `variation_matrix` object lists the variation IDs and variation option IDs and their corresponding product IDs that are generated when the variation and variation options are built with a product. The `variation_matrix` can then be added to your catalogs.

By default, variations and variation options are sorted randomly. You can use the `sort_order`attribute to sort the order of your variation and variation options in the `variation_matrix`. The sort order value is visible when you add the variations and variation options to your catalogs. You can then use the `sort_order` value to program your storefront to display the variation options in the order that you want.

Add the `sort_order` attribute to the body of your request and specify a `sort_order` value. A `sort_order` value must be a number. You can specify any numbers that you want.

- 1, 2, 3, or 100, 90, 80, and so on.
- Zero or negative numbers.

You can set `sort_order` to either `null` or omit it entirely from the request if you wish to remove an existing `sort_order` attribute.

:::caution
- Commerce does not sort variation options. You must program your storefront to sort the variation options in the order that you want.
- You must rebuild your products for the sort order changes to take effect. See [Build Child Products](/docs/pxm/products/pxm-product-variations/child-products-api/build-child-products).
:::

## Product Modifiers

Use modifiers to change the properties of child products that are inherited from a base product. With modifiers, you only need to have one base product with a variation attached to the product.

Modifiers attached to a variation option are applied to a base product to create child products. For example, instead of creating three base products for three different shirt colors, you can do the following:

1. Create a base product, *shirt*, with the variation, *color*, attached to it.
1. Create three options for the *color* variation.
1. Create a modifier for each option to change the properties of each child product. For example, attach a *description append* modifier to each option so that each child product has different description based on the color of the child product.
1. Build the child products.

This screenshot provides an example of a child product of *shirt* which has a specific description associated with it because of the *description append* modifier setting for the option *yellow*:

![Child products with different descriptions](/assets/modifier-description-append.png)

## Price Modifiers

You can use price modifiers to change the price property of child products. By default, child products inherit the same price as their base products. Using price modifiers, you can enable child products to inherit a different price. This enables you to configure the price of child products, for example, to be lower than its base product, without having to individually update the price of your child products. There are three types of price modifier.

Modifier | Data Type | Effect |
| :--- | :--- | :--- |
| `price_increment` | `string` | Increases the price of a product. |
| `price_decrement` | `string` | Decreases the price of a product. |
| `price_equals` | `string` | Sets the price of a product to the amount you specify. |

The following is an overview of the steps you need to follow to use price modifiers.

1. Create a price modifier. You must give the price modifier a unique name, for example, tax_modifier. For more information, see [Create a Price Modifier](/docs/pxm/pricebooks/pxm-pricebooks-modifiers/create-a-price-modifier)
1. Create a product modifier that uses the same name as the price modifier. For more information, see [Create Modifiers](/docs/pxm/pricebooks/pxm-pricebooks-modifiers/create-a-price-modifier).
1. Build your child products with the new product modifier. For more information, see [Build Child Products](/docs/pxm/products/pxm-product-variations/build-pxm-variations).
