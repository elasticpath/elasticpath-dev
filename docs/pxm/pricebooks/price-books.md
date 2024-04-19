---
title: Price Books
nav_label: Overview
sidebar_position: 10
---

:::caution
The Price Book API is for Administrator use only. Do not use these endpoints on your customer-facing frontends.
:::

You can use price books to configure your product pricing. Your price books are associated with your catalogs. Creating separate price books enables you to:

- Maintain consistent and accurate pricing across all your product listings and channels.
- Provide competitive pricing by creating different price books for different channels. For example, different pricing for different geographical regions, based on standard of living costs.
- Provide personalized pricing by creating personalized price books. For example, pricing for loyalty customers versus new customers.
- Enable cross-selling and upselling by offering sales and volume pricing for your products.
- Create price-books based on real-time adjustments such as inventory levels and market conditions.

Each catalog must have one price book. In your storefront, the product prices are displayed in the currency for the selected locale. If a product in the catalog does not have a price in the price book, the product is displayed without a price. 

A price book can be associated with multiple catalogs. 

Following on from this, you can associate more than one price book with a catalog. Price book stacking allows you to create multiple price books for different scenarios, such as seasonal sales, business versus retail customer pricing, and reward programs. If you have multiple price books, when you create a catalog, you must configure a priority for your price books. Product prices are displayed in the catalog according to the priority of the price books. For example, you may have products that have different prices based on region. You can have a price book with the standard retail pricing and then have a second price book that has different pricing for a different region. See [Create a catalog](/docs/pxm/catalogs/catalog-configuration/create-a-catalog).

A price book contains a list of product SKUs and the prices you want to charge for those products. If your store supports multiple locales, a price book can contain product prices in each of the supported currencies. In addition, you can configure sales and volume (tier) pricing.

![price diagram](/assets/price_diagram.png)

:::caution
Price books work with products that are defined using the Product Experience Manager resource model. If your products are defined using an earlier Products resource model, you will need to migrate products to the `pcm/products` resource before you implement price books.
:::

You can duplicate an existing price book and create a new price book. All products and prices associated with the price book are copied to the new price book. Based on the business requirements, you can use the same data or update the data. 

## Volume (tiers) Pricing

Using volume (tiers) pricing allows your store to offer different pricing for minimum quantities of items that your customers purchase. When a customer adds sufficient quantity of an item and meets the minimum required quantity for different pricing, all products with that item SKU are discounted in the cart. You can define the price range for different quantities of different items as in the following example:

| Quantity | Price/Each |
|:---------|:-----------|
| 1-5      | $10.50     |
| 6-10     | $10.00     |
| 11-20    | $9.50      |
| 21-50    | $8.50      |
| 51+      | $7.90      |

## Sales Pricing

With sales pricing, a store can optionally add a sale price to a product price. For example, a store can schedule seasonal pricing on products without creating a new price book and catalog ruleset. Optionally, a store can schedule the date ranges for the sale products. 

You can set a sale price for an item within a bundle so that the product is sold at the sale price when sold as part of the bundle. For example, if you have a bundle consisting of four items, you can apply a discounted price to an item within the bundle to get a bundle sales price. See [Create bundle sale price](/docs/pxm/pricebooks/pxm-pricebooks-prices/create-product-prices#create-bundle-sale-price).

1. For sale prices in the same price book:

    - the schedules must not overlap.
    - if you have just one sale price, without a schedule, this is effectively a permanent price. If you want to add more sale prices to the price book, you must configure a schedule for the sale price. 
   
2. Sale prices in different price books can have overlapping schedules.

Both list and sale price (or was/is prices) are available in the catalog response, enabling you to display slash pricing on your storefront, depending on your requirements.

## Understanding Volume and Sale Pricing Behavior for Products

If you have configured both sale and volume pricing for your products and product bundles, the following table describes how pricing behaves in the following scenarios.

{% table %}
* Scenario
* Description
---
* Minimum quantities for volume pricing and sale pricing
*
   {% list type="checkmark" %}
   * (With sale schedule) If you have specified a minimum quantity of five whose price is $0.99 and at the same time, you have configured a sale for the time of purchase, then when a shopper checkouts 5 items or more, the total is based on the volume pricing. In other words, $0.99 x 5 = $4.95.
   * (With sale schedule) If a shopper's items in the cart do not meet the minimum quantity required for volume pricing, the total is calculated based on the sales price.
   * (Without sale schedule) If the sale is a permanent sale, then regardless of the quantity a shopper adds to a cart, the final price is always calculated based on the sales price.
   {% /list %}
---
* Two levels of volume pricing with different prices for each volume
* If you have configured two levels of volume pricing, for example, the first minimum quantity is 5 and the second minimum quantity is 10:
  {% list type="checkmark" %}
   * When the quantity in the cart is => 5, then the price for the minimum quantity of 5 is used.
   * When the quantity in the cart is => 10 then the price for the minimum quantity of 10 is used.
  {% /list %}
{% /table %}

## Price Modifiers

You can use price modifiers to change the price property of child products. By default, child products inherit the same price as their base products. Using price modifiers, you can enable child products to inherit a different price. This enables you to configure the price of child products, for example, to be lower than its base product, without having to individually update the price of your child products. There are three types of price modifier.

| Modifier          | Data Type | Effect                                       |
|:------------------|:----------|:---------------------------------------------|
| `price_increment` | `string`  | Increases the price of a product.            |
| `price_decrement` | `string`  | Decreases the price of a product.            |
| `price_equals`    | `string`  | Sets the price of a product to the amount you specify. |

The following is an overview of the steps you need to follow to use price modifiers.

1. Create a price modifier. You must give the price modifier a unique name. For more information, see [Create a Price Modifier](/docs/pxm/pricebooks/pxm-pricebooks-modifiers/create-a-price-modifier)
1. Build your child products with the new product modifier. For more information, see [Build Child Products](/docs/pxm/products/pxm-product-variations/child-products-api/build-child-products).

## Bulk Creating/Updating Price Books and Prices

You can create and update product price books and prices in bulk, at both organization and store level, using the Price Book Import API. This is useful, for example, if you have a promotion and want to update 50,000 product prices. Rather than having to go to each price book and manually edit 50,000 prices, you can use the Price Book Import API to bulk update all your product prices at the same time, including setting different prices for different currencies.

See [Price Book Import/Bulk Update](/docs/pxm/pricebooks/price-import/overview).

## Related Resources

- [Catalogs](/docs/pxm/catalogs/catalogs)
- [Product Experience Manager](/docs/pxm/products/pxm-products)
