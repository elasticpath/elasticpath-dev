---
title: Calculate cart and order totals
nav_label: Calculate cart and order totals
sidebar_position: 12
---

There are two methods that can be used to calculate cart and order totals. The method used depends on the `calculation_method` setting.

When you create promotions, you must consider the effects of tax calculations.

:::caution
The default calculation method for stores created before February 2020 is set to `simple`. However, stores created since February 2020 have `line` method as the default setting.
:::

## Simple calculation method

Taxes are calculated for each line and are rounded to the nearest penny for the unit.

The cart totals are calculated by summing each of the lines and then subtracting any discounts.

Example:

|                 |     Item 1 |    Item 2 |  Discount |   Total   |
| :-------------- | ---------: | --------: | --------: | ---------: |
| Unit price      |      $9.99 |     $0.03 |   −$10.00 |           |
| Quantity        |          3 |         1 |         1 |           |
| **Line price**  |     $29.97 |     $0.03 |   −$10.00 |           |
| Tax rate        |       0.20 |      0.00 |           |           |
| Unit tax        |      $1.99 |     $0.00 |           |           |
| **Line tax**    |  **$5.97** | **$0.00** |           |           |
| Unit subtotal   |      $9.99 |     $0.03 |           |           |
|**Line subtotal**| **$29.97** | **$0.03** |           |           |
|**Total**        | **$35.94** | **$0.03** |**−$10.00**| **$25.97** |

In summary, promotional discounts are applied after tax and rounding occurs at the individual unit level.

## Line calculation method

Any cart-level discount is distributed among the cart items such that the amount each line gets is in proportion to its value before tax.

With promotions, you can provide different types of discounts. Promotional discounts are calculated for each line by subtracting from the pre-tax value and the discount is rounded to the nearest penny for the line.

Taxes are calculated for each line based on the line value after promotional discounts have been applied and are rounded to the nearest penny for the line.

The cart totals are calculated by summing each of the lines.

Example:

|                 |   Item 1 |  Item 2 |  Total    |
| :-------------- | -------: | ------: | ---------: |
| Unit price      |    $9.99 |   $0.03 |           |
| Quantity        |        3 |       1 |           |
| Line price      |   $29.97 |   $0.03 |           |
| Unit discount   |   −$3.33 |  −$0.01 |           |
| Line discount   |   −$9.99 |  −$0.01 |           |
| Tax rate        |     0.20 |    0.00 |           |
| Unit tax        | $1.3333r |   $0.00 |           |
|**Line tax**     | **$4.00**|**$0.00**| **$4.00** |
| Unit subtotal   |$5.3266666667|$0.02 |           |
|**Line subtotal**|**$19.97**|**$0.02**| **$19.99** |
| **Total**       |   $23.97 |   $0.02 | **$23.99** |

In summary, promotional discounts are applied before tax and rounding occurs for whole lines.

## Related Resources

- [Orders](https://beta.elasticpath.dev/docs/api/carts/orders)
- [Taxes](https://beta.elasticpath.dev/docs/api/carts/tax-items)
- [Checkout API](https://beta.elasticpath.dev/docs/api/carts/checkout)
- [Create custom carts](https://beta.elasticpath.dev/docs/api/carts/create-a-custom-cart)
